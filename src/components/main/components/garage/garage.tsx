import * as React from 'react';
import { Dispatch, useState, SetStateAction, useEffect, useRef } from 'react';
import Options from './components/options'
import Tracks from './components/tracks'
import TracksTitle from './components/tracks-title'
import { carDataType, stringReactType, numberReactType, carSelectType } from '../../../../type'
import './garage.scss';

type Props = {
  carData: {
    value: carDataType;
    setValue: React.Dispatch<React.SetStateAction<carDataType>>;
  }
  fetchCars: () => void
  carCount: stringReactType
  pageCount: numberReactType
  page: numberReactType
};


export default function Garage(props: Props) {
  const inputCreateRef = useRef<HTMLInputElement | null>(null)
  const [carSelectUpdate, setCarSelectUpdate] = useState<carSelectType>({
    name: '',
    color: '#000000',
    id: 0,
  })
  return (
    <div className="garage" id="garage">
      <div className='garage-container'>
        <TracksTitle carCount={props.carCount} pageCount={props.pageCount} page={props.page} />
        <Options fetchCars={props.fetchCars}
          carSelectUpdate={{ value: carSelectUpdate, setValue: setCarSelectUpdate }}
          inputCreateRef={inputCreateRef}
        />
      </div>
      {[...Array(props.carData.value.length)].map((el, i) => <Tracks i={i} key={i}
        carData={props.carData}
        carSelectUpdate={{ value: carSelectUpdate, setValue: setCarSelectUpdate }}
        inputCreateRef={inputCreateRef}
        fetchCars={props.fetchCars}
      />)}
    </div>
  );
}
