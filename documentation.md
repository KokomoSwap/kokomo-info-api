# Documentation

All kokomoSwap pairs consist of two different tokens. BNB is not a native currency in kokomoSwap, and is represented only by WBNB in the pairs. 

The canonical WBNB address used by the kokomoSwap interface is `0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c`.

Results are cached for 2 minutes (or 120 seconds).

## [`/summary`](https://api-info.kokomoswap.io/api/summary)

Returns data for the top ~1000 kokomoSwap pairs, sorted by reserves. 

### Request

`GET https://api-info.kokomoswap.io/api/summary`

### Response

```json5
{
  "updated_at": 1234567,              // UNIX timestamp
  "data": {
    "0x..._0x...": {                  // BEP20 token addresses, joined by an underscore
      "price": "...",                 // price denominated in token1/token0
      "base_volume": "...",           // last 24h volume denominated in token0
      "quote_volume": "...",          // last 24h volume denominated in token1
      "liquidity": "...",             // liquidity denominated in USD
      "liquidity_BNB": "..."          // liquidity denominated in BNB
    },
    // ...
  }
}
```

## [`/tokens`](https://api-info.kokomoswap.io/api/tokens)

Returns the tokens in the top ~1000 pairs on kokomoSwap, sorted by reserves.

### Request

`GET https://api-info.kokomoswap.io/api/tokens`

### Response

```json5
{
  "updated_at": 1234567,              // UNIX timestamp
  "data": {
    "0x...": {                        // the address of the BEP20 token
      "name": "...",                  // not necessarily included for BEP20 tokens
      "symbol": "...",                // not necessarily included for BEP20 tokens
      "price": "...",                 // price denominated in USD
      "price_BNB": "...",             // price denominated in BNB
    },
    // ...
  }
}
```

## [`/tokens/0x...`](https://api-info.kokomoswap.io/api/tokens/0x9a7b87651c6c93cedb831b2b3b5549142a813cfe)

Returns the token information, based on address.

### Request

`GET https://api-info.kokomoswap.io/api/tokens/0x9a7b87651c6c93cedb831b2b3b5549142a813cfe`

### Response

```json5
{
  "updated_at": 1234567,              // UNIX timestamp
  "data": {
    "name": "...",                    // not necessarily included for BEP20 tokens
    "symbol": "...",                  // not necessarily included for BEP20 tokens
    "price": "...",                   // price denominated in USD
    "price_BNB": "...",               // price denominated in BNB
  }
}
```

## [`/pairs`](https://api-info.kokomoswap.io/api/pairs)

Returns data for the top ~1000 kokomoSwap pairs, sorted by reserves.

### Request

`GET https://api-info.kokomoswap.io/api/pairs`

### Response

```json5
{
  "updated_at": 1234567,              // UNIX timestamp
  "data": {
    "0x..._0x...": {                  // the asset ids of BNB and BEP20 tokens, joined by an underscore
      "pair_address": "0x...",        // pair address
      "base_name": "...",             // token0 name
      "base_symbol": "...",           // token0 symbol
      "base_address": "0x...",        // token0 address
      "quote_name": "...",            // token1 name
      "quote_symbol": "...",          // token1 symbol
      "quote_address": "0x...",       // token1 address
      "price": "...",                 // price denominated in token1/token0
      "base_volume": "...",           // volume denominated in token0
      "quote_volume": "...",          // volume denominated in token1
      "liquidity": "...",             // liquidity denominated in USD
      "liquidity_BNB": "..."          // liquidity denominated in BNB
    },
    // ...
  }
}
```

## [`/stats`](https://api-info.kokomoswap.io/api/stats)

Returns stats of kokomoSwap exchange. 

### Request

`GET https://api-info.kokomoswap.io/api/stats`

### Response

```json5
{
  "updated_at": 1234567,              // UNIX timestamp
  "data": {
    "total_liquidity_BNB": "...", // total liquidity in BNB
    "total_liquidity_USD": "...", // total liquidity in USD
    "total_volume_BNB": "...", // total volume in BNB
    "total_volume_USD": "...", // total volume in USD
    "volume_BNB": "...", // last 24h volume in BNB
    "volume_USD": "...", // last 24h volume in USD
    "tx_count": 12345, // last 24h tx count
  }
}
```
