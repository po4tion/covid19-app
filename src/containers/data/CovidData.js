import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import dotenv from 'dotenv';
import { ChartDateFunc } from '../../middleware/ChartDateFunc';

import NamingBlock from '../../components/molecules/NamingBlock';
import { prev, current } from '../../modules/differ';

dotenv.config();

const API_KEY = process.env.REACT_APP_SERVICE_KEY;

const result = new Date();
const date = ChartDateFunc(result);

const covidUrl = `/openapi/service/rest/Covid19/getCovid19InfStateJson?serviceKey=${API_KEY}&pageNo=1&numOfRows=10&startCreateDt=${
  date - 1
}&endCreateDt=${date}`;

function CovidData() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       await axios
  //         .get(covidUrl)
  //         .then((res) => res.data)
  //         .then((data) => {
  //           const dataPrev = data.response.body.items.item[1];
  //           const dataCurrent = data.response.body.items.item[0];

  //           dispatch(
  //             prev(
  //               dataPrev.decideCnt,
  //               dataPrev.deathCnt,
  //               dataPrev.clearCnt,
  //               dataPrev.examCnt
  //             )
  //           );
  //           dispatch(
  //             current(
  //               dataCurrent.decideCnt,
  //               dataCurrent.deathCnt,
  //               dataCurrent.clearCnt,
  //               dataCurrent.examCnt
  //             )
  //           );
  //         });
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };

  //   fetchData();
  // }, [dispatch]);

  // TEST CODE
  dispatch(prev(1000, 2000, 3000, 4000));
  dispatch(current(1250, 2450, 3650, 4850));

  return <NamingBlock />;
}

export default CovidData;
