import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Common/Header";
import Loader from "../components/Common/Loader";
import List from "../components/Dashboard/List";
import axios from "axios";
import { convertObject } from "../functions/convertObject";
import CoinInfo from "../components/Coin/CoinInfo";
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrices } from "../functions/getCoinPrices";
import LineChart from "../components/Coin/LineChart";
import { convertDate } from "../functions/convertDate";
import SelectDays from "../components/Coin/SelectDays";
import { settingChartData } from "../functions/settingChartData";
import PriceType from "../components/Coin/PriceType";
import Footer from "../components/Common/Footer";

const CoinPage = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [coinData, setCoinData] = useState();
  const [days, setDays] = useState(60);
  const [chartData, setChartData] = useState({});
  const [priceType, setPriceType] = useState('prices');

  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);

  async function getData() {
    const data = await getCoinData(id);
    if (data) {
      convertObject(setCoinData, data);
      const prices = await getCoinPrices(id, days, priceType);
      if (prices) {
        settingChartData(setChartData, prices);
        setIsLoading(false);
      }
    }
  }


  const handleDaysChange = async (event) => {
    setIsLoading(true);
    setDays(event.target.value);
    const prices = await getCoinPrices(id, event.target.value, priceType);
      if (prices) {
       settingChartData(setChartData, prices);
        setIsLoading(false);
      }
  }


  const handlePriceTypeChange = async (event, newType) => {
    setIsLoading(true);
    setPriceType(newType);
    const prices = await getCoinPrices(id, days, newType);
      if (prices) {
       settingChartData(setChartData, prices);
        setIsLoading(false);
      }
  }
 

  return (
    <div>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="coin-page">
            <List coin={coinData} />
          </div>
          <div className="coin-page line-chart">
            <SelectDays days={days} handleDaysChange={handleDaysChange}/>
            <PriceType priceType={priceType} handlePriceTypeChange={handlePriceTypeChange}/>
            <LineChart chartData={chartData} priceType={priceType}/>
          </div>
          <CoinInfo heading={coinData.name} desc={coinData.desc} />
        </>
      )}
      <Footer/>
    </div>
  );
};

export default CoinPage;
