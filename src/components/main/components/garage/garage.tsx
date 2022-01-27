import * as React from 'react';
import { Dispatch, useState, SetStateAction, useEffect, useRef } from 'react';
import Options from './components/options';
import Tracks from './components/tracks';
import TracksTitle from './components/tracks-title';
import ModalWinner from './components/modal-winner';
import { carDataType, stringReactType, numberReactType, carSelectType, winnerType } from '../../../../type';
import './garage.scss';

type Props = {
  carData: {
    value: carDataType;
    setValue: React.Dispatch<React.SetStateAction<carDataType>>;
  };
  fetchCars: () => void;
  carCount: stringReactType;
  pageCount: numberReactType;
  page: numberReactType;
  winner: {
    value: winnerType;
    setValue: React.Dispatch<React.SetStateAction<winnerType>>;
  };
  isWinner: {
    value: boolean;
    setValue: React.Dispatch<React.SetStateAction<boolean>>;
  };
  engineIsActiveGlobal: {
    value: boolean;
    setValue: React.Dispatch<React.SetStateAction<boolean>>;
  };
  blocked: {
    value: boolean;
    setValue: React.Dispatch<React.SetStateAction<boolean>>;
  };
  textCreate: stringReactType;
  colorCreate: stringReactType;
  textUpdate: stringReactType;
  colorUpdate: stringReactType;
  activePage: stringReactType;
};

export default function Garage(props: Props) {
  const inputCreateRef = useRef<HTMLInputElement | null>(null);
  const btnRaceRef = useRef<HTMLButtonElement | null>(null);
  const btnResetRef = useRef<HTMLButtonElement | null>(null);
  const btnPrevRef = useRef<HTMLButtonElement | null>(null);
  const btnNextRef = useRef<HTMLButtonElement | null>(null);

  const [isDriveActive, setIsDriveActive] = useState<boolean>(false);
  const [carSelectUpdate, setCarSelectUpdate] = useState<carSelectType>({
    name: '',
    color: '#000000',
    id: 0,
  });
  return (
    <div className="garage" id="garage">
      <div className="garage-container">
        <TracksTitle
          carCount={props.carCount}
          pageCount={props.pageCount}
          page={props.page}
          engineIsActiveGlobal={props.engineIsActiveGlobal}
          winner={props.winner}
          btnPrevRef={btnPrevRef}
          btnNextRef={btnNextRef}
          blocked={props.blocked}
        />
        <Options
          fetchCars={props.fetchCars}
          carSelectUpdate={{ value: carSelectUpdate, setValue: setCarSelectUpdate }}
          inputCreateRef={inputCreateRef}
          btnRaceRef={btnRaceRef}
          btnResetRef={btnResetRef}
          engineIsActiveGlobal={props.engineIsActiveGlobal}
          winner={props.winner}
          blocked={props.blocked}
          textCreate={props.textCreate}
          colorCreate={props.colorCreate}
          textUpdate={props.textUpdate}
          colorUpdate={props.colorUpdate}
          activePage={props.activePage}
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
        btnPrevRef={btnPrevRef}
        btnNextRef={btnNextRef}
        page={props.page}
        engineIsActiveGlobal={props.engineIsActiveGlobal}
        winner={props.winner}
        isWinner={props.isWinner}
        blocked={props.blocked}
      />
      {props.isWinner.value && props.engineIsActiveGlobal.value && <ModalWinner winner={props.winner} />}
    </div>
  );
}
