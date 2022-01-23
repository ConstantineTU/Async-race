import React, { Fragment, useState, useEffect, FC } from 'react';
import Header from '../header/header';
import Main from '../main/main';
import Footer from '../footer/footer';

const App: FC = () => {
  const [activePage, setActivePage] = useState<string>(() => {
    const saved = localStorage.getItem('activePage');
    const initialValue = saved || undefined;
    return initialValue || 'домашняя';
  });
  useEffect(() => {
    localStorage.setItem('activePage', activePage);
  }, [activePage]);

  const [page, setPage] = useState<number>(1)
  const [carCount, setCarCount] = useState<string>('1')

  const getHeader = (res: Response) => {
    const carCountJson = res.headers.get('X-Total-Count');
    carCountJson !== null && setCarCount(carCountJson)
    if (carCount !== null && carCount !== undefined && Number(carCount) < 8) {
      setPage(1)
    }
    return res
  }

  const fetchCars = () => {
    fetch(`http://127.0.0.1:3000/garage?_page=${1}&_limit=7`, {
      method: 'GET',
    })
      .then((res) => {
        console.log(res);
        return (getHeader(res))
      })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      })
  }
  useEffect(() => {
    fetchCars()
  }, [activePage])

  return (
    <Fragment>
      <Header activePage={{ value: activePage, setValue: setActivePage }} />
      <Main
        activePage={{ value: activePage, setValue: setActivePage }}
      />
      <Footer />
    </Fragment>
  );
};

export default App;
