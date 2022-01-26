import * as React from 'react';
import { Dispatch, useState, SetStateAction, useEffect, useRef } from 'react';
import Options from './components/options'
import Tracks from './components/tracks'
import TracksTitle from './components/tracks-title'
import ModalWinner from './components/modal-winner';
import { carDataType, stringReactType, numberReactType, carSelectType, winnerType } from '../../../../type'
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
  winner: {
    value: winnerType;
    setValue: React.Dispatch<React.SetStateAction<winnerType>>;
  }
  isWinner: {
    value: boolean;
    setValue: React.Dispatch<React.SetStateAction<boolean>>;
  }
  engineIsActiveGlobal: {
    value: boolean;
    setValue: React.Dispatch<React.SetStateAction<boolean>>;
  }
};


export default function Garage(props: Props) {
  const inputCreateRef = useRef<HTMLInputElement | null>(null)
  const btnRaceRef = useRef<HTMLButtonElement | null>(null)
  const btnResetRef = useRef<HTMLButtonElement | null>(null)

  const [isDriveActive, setIsDriveActive] = useState<boolean>(false)
  const [carSelectUpdate, setCarSelectUpdate] = useState<carSelectType>({
    name: '',
    color: '#000000',
    id: 0,
  })
  return (
    <div className="garage" id="garage">
      <div className='garage-container'>
        <TracksTitle carCount={props.carCount} pageCount={props.pageCount} page={props.page}
          engineIsActiveGlobal={props.engineIsActiveGlobal}
          winner={props.winner}
        />
        <Options fetchCars={props.fetchCars}
          carSelectUpdate={{ value: carSelectUpdate, setValue: setCarSelectUpdate }}
          inputCreateRef={inputCreateRef}
          btnRaceRef={btnRaceRef}
          btnResetRef={btnResetRef}
          engineIsActiveGlobal={props.engineIsActiveGlobal}
          winner={props.winner}
        />
      </div>
      <Tracks
        carData={props.carData}
        carSelectUpdate={{ value: carSelectUpdate, setValue: setCarSelectUpdate }}
        inputCreateRef={inputCreateRef}
        fetchCars={props.fetchCars}
        isDriveActive={{ value: isDriveActive, setValue: setIsDriveActive }}
        btnRaceRef={btnRaceRef}
        btnResetRef={btnResetRef}
        page={props.page}
        engineIsActiveGlobal={props.engineIsActiveGlobal}
        winner={props.winner}
        isWinner={props.isWinner}
      />
      {props.isWinner.value && <ModalWinner winner={props.winner} />}
    </div>
  );
}
