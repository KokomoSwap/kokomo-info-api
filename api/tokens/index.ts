import { VercelRequest, VercelResponse } from "@vercel/node";
import { getAddress } from "@ethersproject/address";
import { getBnbPrice, getTopPairs } from "../../utils";
import { return200, return500 } from "../../utils/response";
import BigNumber from "bignumber.js";

interface ReturnShape {
  [tokenAddress: string]: {
    name: string;
    symbol: string;
    price: string;
    price_BNB: string;
  };
}

export default async function (req: VercelRequest, res: VercelResponse): Promise<void> {
  try {
    const topPairs = await getTopPairs();

    const bnbPrice = await getBnbPrice()
    
    const tokens = topPairs.reduce<ReturnShape>((accumulator, pair): ReturnShape => {
      for (const token of [pair.token0, pair.token1]) {
        const tId = getAddress(token.id);
        const usdPrice = token.derivedUSD || new BigNumber(token.derivedETH).multipliedBy(bnbPrice).toString()
        
        accumulator[tId] = {
          name: token.name,
          symbol: token.symbol,
          price: usdPrice,
          price_BNB: token.derivedBNB || token.derivedETH,
        };
      }

      return accumulator;
    }, {});


    return200(res, { updated_at: new Date().getTime(), data: tokens });
  } catch (error) {
    return500(res, error);
  }
}
