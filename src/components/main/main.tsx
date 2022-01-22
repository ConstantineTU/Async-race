import * as React from 'react';
import { Dispatch, useState, SetStateAction, useEffect } from 'react';
import './main.scss';

import Home from './components/home/home';
// import Garage from './components/garage/garage';
// import Winners from './components/winners/winners';

type Props = {
  activePage: {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
  }
  // toysData: {
  //   num: string;
  //   name: string;
  //   count: string;
  //   year: string;
  //   shape: string;
  //   color: string;
  //   size: string;
  //   favorite: boolean;
  // }[];
  // favoriteToys: number;
  // setFavoriteToys: Dispatch<SetStateAction<number>>;
  // selectedToys: {
  //   value: string[];
  //   setValue: React.Dispatch<React.SetStateAction<string[]>>;
  // };
  // handleChangeActive: React.Dispatch<React.SetStateAction<string>>;
};


export default function Main(props: Props) {
  // Позже переделать все состояния в объект ниже

  // const [filters, setFilters] = useState({
  //   search: '',
  //   sorting: 'By title(A-Z)',
  //   shapeFilter: ['Ball'],
  //   colourFilter: ['Red'],
  //   sizeFilter: ['Big'],
  //   quantityFilter: { min: '', max: '' },
  //   purchaseYearFilter: { min: '', max: '' },
  //   favoriteFilter: true,
  // });

  const pages = ['home', 'garage', 'winners'];

  return (
    <main className="main" id="main">
      {props.activePage.value === pages[0] && <Home activePage={props.activePage} />}
      {/* {props.activePage.value === pages[1] && (<Garage />)} */}
      {/* {props.activePage.value === pages[2] && (<Winners />)} */}
    </main>
  );
}
