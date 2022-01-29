import * as React from 'react';
import { useState, useEffect } from 'react';
import './main.scss';
import { carDataType, stringReactType, numberReactType, winnersType } from '../../type';

import Home from './components/home/home';
import Garage from './components/garage/garage';
import Winners from './components/winners/winners';

type Props = {
  activePage: stringReactType;
  carData: {
    value: carDataType;
    setValue: React.Dispatch<React.SetStateAction<carDataType>>;
  };
  fetchCars: (sortDefault?: string, orderDefault?: string) => void;
  carCount: stringReactType;
  pageCount: numberReactType;
  page: numberReactType;
  carDataWinners: {
    value: winnersType;
    setValue: React.Dispatch<React.SetStateAction<winnersType>>;
  };
  fetchWinners: () => void;
  carCountWinners: stringReactType;
  pageWinners: stringReactType;
  pageCountWinners: numberReactType;
  engineIsActiveGlobal: {
    value: boolean;
    setValue: React.Dispatch<React.SetStateAction<boolean>>;
  };
  isWinner: {
    value: boolean;
    setValue: React.Dispatch<React.SetStateAction<boolean>>;
  };
};

export default function Main(props: Props) {
  const [isWinner, setIsWinner] = useState<boolean>(false);
  const [blocked, setBlocked] = useState<boolean>(false);
  const [winner, setWinner] = useState({
    name: '',
    color: '',
    id: 0,
    time: 0,
    position: -1,
  });
  useEffect(() => {
    if (winner.time) addWinner();
  }, [winner]);
  useEffect(() => {
    if (isWinner) {
      setTimeout(() => {
        setIsWinner(false);
      }, 5000);
    }
  }, [isWinner]);

  const getWins = (res: number) => {
    if (res === 500) {
      return fetch(`http://127.0.0.1:3000/winners/${winner.id}`, {
        method: 'GET',
      })
        .then((res) => res.json())
        .then((res) => updateWinner(res))
        .catch((err) => console.log('error: function getWins', err));
    }
  };

  const updateWinner = (winsUpdate: { wins: number; time: number }) => {
    fetch(`http://127.0.0.1:3000/winners/${winner.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        wins: winsUpdate.wins + 1,
        time: winner.time < winsUpdate.time ? winner.time : winsUpdate.time,
      }),
    })
      .then((result) => getWins(result.status))
      .catch((err) => console.log('error: function setWinner', err));
  };
  const addWinner = () => {
    fetch(`http://127.0.0.1:3000/winners/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: winner.id,
        wins: 1,
        time: winner.time,
      }),
    })
      .then((result) => getWins(result.status))
      .catch((err) => console.log('error: function setWinner', err));
  };
  const pages = ['garage', 'winners'];

  const [textCreate, setTextCreate] = useState<string>(() => {
    const saved = localStorage.getItem('textCreate');
    const initialValue = saved || undefined;
    return initialValue || '';
  });
  const [colorCreate, setColorCreate] = useState<string>(() => {
    const saved = localStorage.getItem('colorCreate');
    const initialValue = saved || undefined;
    return initialValue || '';
  });
  const [textUpdate, setTextUpdate] = useState<string>(() => {
    const saved = localStorage.getItem('textUpdate');
    const initialValue = saved || undefined;
    return initialValue || '';
  });
  const [colorUpdate, setColorUpdate] = useState<string>(() => {
    const saved = localStorage.getItem('colorUpdate');
    const initialValue = saved || undefined;
    return initialValue || '';
  });
  useEffect(() => {
    localStorage.setItem('textCreate', textCreate);
  }, [textCreate]);
  useEffect(() => {
    localStorage.setItem('colorCreate', colorCreate);
  }, [colorCreate]);
  useEffect(() => {
    localStorage.setItem('textUpdate', textUpdate);
  }, [textUpdate]);
  useEffect(() => {
    localStorage.setItem('colorUpdate', colorUpdate);
  }, [colorUpdate]);
  return (
    <main className="main" id="main">
      {props.activePage.value === pages[0] && <Home activePage={props.activePage} />}
      {props.activePage.value === pages[0] && (
        <Garage
          carData={props.carData}
          fetchCars={props.fetchCars}
          carCount={props.carCount}
          pageCount={props.pageCount}
          page={props.page}
          winner={{ value: winner, setValue: setWinner }}
          isWinner={{ value: isWinner, setValue: setIsWinner }}
          blocked={{ value: blocked, setValue: setBlocked }}
          engineIsActiveGlobal={props.engineIsActiveGlobal}
          textCreate={{ value: textCreate, setValue: setTextCreate }}
          colorCreate={{ value: colorCreate, setValue: setColorCreate }}
          textUpdate={{ value: textUpdate, setValue: setTextUpdate }}
          colorUpdate={{ value: colorUpdate, setValue: setColorUpdate }}
          activePage={props.activePage}
        />
      )}
      {props.activePage.value === pages[1] && (
        <Winners
          fetchWinners={props.fetchWinners}
          carCountWinners={props.carCountWinners}
          pageWinners={props.pageWinners}
          pageCountWinners={props.pageCountWinners}
          carDataWinners={props.carDataWinners}
          carData={props.carData}
        />
      )}
    </main>
  );
}
