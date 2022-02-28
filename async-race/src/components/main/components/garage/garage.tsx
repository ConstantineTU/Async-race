import * as React from 'react';
import { useState, FC, useRef } from 'react';
import Options from './components/options';
import Tracks from './components/tracks';
import TracksTitle from './components/tracks-title';
import ModalWinner from './components/modal-winner';
import {
  CarDataType,
  StringReactType,
  BooleanReactType,
  NumberReactType,
  CarSelectType,
  WinnerType,
} from '../../../../type';
import './garage.scss';

type Props = {
  carData: {
    value: CarDataType;
    setValue: React.Dispatch<React.SetStateAction<CarDataType>>;
  };
  fetchCars: () => void;
  carCount: StringReactType;
  pageCount: NumberReactType;
  page: NumberReactType;
  winner: {
    value: WinnerType;
    setValue: React.Dispatch<React.SetStateAction<WinnerType>>;
  };
  isWinner: BooleanReactType;
  engineIsActiveGlobal: BooleanReactType;
  blocked: BooleanReactType;
  textCreate: StringReactType;
  colorCreate: StringReactType;
  textUpdate: StringReactType;
  colorUpdate: StringReactType;
  activePage: StringReactType;
  btnWinners: React.MutableRefObject<HTMLLIElement | null>;
  btnGarage: React.MutableRefObject<HTMLLIElement | null>;
};

const Garage: FC<Props> = (props: Props) => {
  const inputCreateRef = useRef<HTMLInputElement | null>(null);
  const btnRaceRef = useRef<HTMLButtonElement | null>(null);
  const btnResetRef = useRef<HTMLButtonElement | null>(null);
  const btnPrevRef = useRef<HTMLButtonElement | null>(null);
  const btnNextRef = useRef<HTMLButtonElement | null>(null);

  const [isDriveActive, setIsDriveActive] = useState<boolean>(false);
  const [carSelectUpdate, setCarSelectUpdate] = useState<CarSelectType>({
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
        btnWinners={props.btnWinners}
        btnGarage={props.btnGarage}
      />
      {props.isWinner.value && props.engineIsActiveGlobal.value && <ModalWinner winner={props.winner} />}
    </div>
  );
};

export default Garage;
