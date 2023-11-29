interface Info {
  symbol: string;
  priceChange: string;
  priceChangePercent: string;
  weightedAvgPrice: string;
  lastPrice: string;
  lastQty: string;
  openPrice: string;
  highPrice: string;
  lowPrice: string;
  volume: string;
  quoteVolume: string;
  openTime: string;
  closeTime: string;
  firstId: string;
  lastId: string;
  count: string;
}

export interface Coin {
  symbol: string;
  timestamp: number;
  datetime: string;
  high: string;
  low: string;
  vwap: number;
  open: string;
  close: number;
  last: string;
  change: number;
  percentage: string;
  average: number;
  baseVolume: string;
  quoteVolume: string;
  info: Info;
}

export interface ICoin {
  event: string;
  data: {
    [key: string]: Coin;
  };
}
