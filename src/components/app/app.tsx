import React, { Fragment, useState, useEffect, FC } from 'react';
import Header from '../header/header';
import Main from '../main/main';
import Footer from '../footer/footer';
import { carDataType } from '../../type'

const App: FC = () => {
  const [activePage, setActivePage] = useState<string>(() => {
    const saved = localStorage.getItem('activePage');
    const initialValue = saved || undefined;
    return initialValue || 'home';
  });
  useEffect(() => {
    localStorage.setItem('activePage', activePage);
  }, [activePage]);

  const [page, setPage] = useState<number>(1)
  const [carCount, setCarCount] = useState<string>('0')
  const [pageCount, setPageCount] = useState<number>(1)
  const [carData, setCarData] = useState<carDataType>([{
    name: '',
    color: '',
    id: 0,
  }]);

  const getHeader = (res: Response) => {
    const carCountJson = res.headers.get('X-Total-Count');
    carCountJson !== null && setCarCount(carCountJson)
    if (carCount !== null && carCount !== undefined && Number(carCount) < 7) {
      setPage(1)
    }
    return res
  }

  const fetchCars = () => {
    fetch(`http://127.0.0.1:3000/garage?_page=${page}&_limit=7`, {
      method: 'GET',
    })
      .then((res) => (getHeader(res)))
      .then((res) => res.json())
      .then((result) => setCarData(result))
      .catch((err) => console.log('error: function fetchCars'))
  }
  useEffect(() => {
    fetchCars()
  }, [activePage])
  useEffect(() => {
    setPageCount(Math.ceil((Number(carCount) / 7)));
  }, [carData])
  useEffect(() => {
    if (Number(carCount) < 8) setPage(1)
  }, [carCount])
  useEffect(() => {
    console.log('PageCount', pageCount);
  }, [pageCount])
  useEffect(() => {
    fetchCars();
  }, [page])

  return (
    <Fragment>
      <Header activePage={{ value: activePage, setValue: setActivePage }} />
      <Main
        activePage={{ value: activePage, setValue: setActivePage }}
        carData={{ value: carData, setValue: setCarData }}
        fetchCars={fetchCars}
        carCount={{ value: carCount, setValue: setCarCount }}
        page={{ value: page, setValue: setPage }}
        pageCount={{ value: pageCount, setValue: setPageCount }}
      />
      <Footer />
    </Fragment>
  );
};

export default App;
