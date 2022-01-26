import React, { Fragment, useState, useEffect, FC } from 'react';
import Header from '../header/header';
import Main from '../main/main';
import Footer from '../footer/footer';
import { carDataType, carDataWinType, winnerType } from '../../type'

const App: FC = () => {
  const [activePage, setActivePage] = useState<string>(() => {
    const saved = localStorage.getItem('activePage');
    const initialValue = saved || undefined;
    return initialValue || 'garage';
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
    fetchWinners();
  }, [activePage])
  useEffect(() => {
    setPageCount(Math.ceil((Number(carCount) / 7)));
  }, [carData])
  useEffect(() => {
    if (Number(carCount) < 8) setPage(1)
  }, [carCount])
  useEffect(() => {
    fetchCars();

  }, [page])
  // Winners
  const [pageWinners, setPageWinners] = useState<string>('1')
  const [carCountWinners, setCarCountWinners] = useState<string>('0')
  const [pageCountWinners, setPageCountWinners] = useState<number>(1)
  const [carDataWinners, setCarDataWinners] = useState<winnerType>([{
    name: '',
    color: '',
    id: 0,
    wins: 0,
    time: 0,
  }]);
  const getHeaderWinners = (res: Response) => {
    const carCountJson = res.headers.get('X-Total-Count');
    carCountJson !== null && setCarCountWinners(carCountJson)
    if (carCountWinners !== null && carCountWinners !== undefined && Number(carCountWinners) < 7) {
      setPageWinners('1')
    }
    return res
  }
  const fetchWinners = () => {
    fetch(`http://127.0.0.1:3000/winners?_page=${pageWinners}&_limit=7&_sort=time`, {
      method: 'GET',
    })
      .then((res) => (getHeaderWinners(res)))
      .then((res) => res.json())
      .then((res) => res.map((el: { id: number, wins: number, time: number }, i: number) => {
        return fetch(`http://127.0.0.1:3000/garage/${el.id}`, {
          method: 'GET',
        }).then((res) => res.json())
          .then((res) => {
            res.wins = el.wins;
            res.time = el.time;
            return res
          })
      })
      ).then((res: winnerType) => Promise.all(res))
      .then((result) => setCarDataWinners(result))
      .catch((err) => console.log('error: function fetchWinners'))
  }
  useEffect(() => {
    setPageCountWinners(Math.ceil((Number(carCountWinners) / 7)));
  }, [carDataWinners])
  useEffect(() => {
    if (Number(carCountWinners) < 8) setPageWinners('1')
  }, [carCountWinners])

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

        carDataWinners={{ value: carDataWinners, setValue: setCarDataWinners }}
        fetchWinners={fetchWinners}
        carCountWinners={{ value: carCountWinners, setValue: setCarCountWinners }}
        pageWinners={{ value: pageWinners, setValue: setPageWinners }}
        pageCountWinners={{ value: pageCountWinners, setValue: setPageCountWinners }}
      />
      <Footer />
    </Fragment>
  );
};

export default App;
