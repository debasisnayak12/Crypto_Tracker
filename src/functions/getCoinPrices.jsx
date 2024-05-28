import axios from "axios";

export const getCoinPrices = (id, days, priceType) => {
    const prices = axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`,
        {crossDomain: true}
      )
      .then((response) => {
        return response.data[priceType];
      })
      .catch((error) => {
        console.error(error);
      });
      return prices;
}