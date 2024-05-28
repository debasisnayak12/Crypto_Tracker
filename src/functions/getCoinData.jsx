import axios from "axios";

export const getCoinData = (id) => {
    const myData = axios
        .get(`https://api.coingecko.com/api/v3/coins/${id}`,{crossDomain: true})
        .then((response) => {
        //   convertObject(setCoinData,response.data);
        return response.data;
        })
        .catch((error) => {
          console.log(error);
        });
        return myData;
}