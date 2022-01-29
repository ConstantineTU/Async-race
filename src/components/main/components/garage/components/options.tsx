import * as React from 'react';
import { FC, useEffect } from 'react';
import { StringReactType, CarSelectType, WinnerType } from '../../../../../type';
import carBrandsData from '../../../../../assets/data/brands-cars';
import carModelsData from '../../../../../assets/data/models-cars';

type Props = {
  fetchCars: () => void;
  carSelectUpdate: {
    value: CarSelectType;
    setValue: React.Dispatch<React.SetStateAction<CarSelectType>>;
  };
  inputCreateRef: React.MutableRefObject<HTMLInputElement | null>;
  btnRaceRef: React.MutableRefObject<HTMLButtonElement | null>;
  btnResetRef: React.MutableRefObject<HTMLButtonElement | null>;
  engineIsActiveGlobal: {
    value: boolean;
    setValue: React.Dispatch<React.SetStateAction<boolean>>;
  };
  winner: {
    value: WinnerType;
    setValue: React.Dispatch<React.SetStateAction<WinnerType>>;
  };
  blocked: {
    value: boolean;
    setValue: React.Dispatch<React.SetStateAction<boolean>>;
  };
  textCreate: StringReactType;
  colorCreate: StringReactType;
  textUpdate: StringReactType;
  colorUpdate: StringReactType;
  activePage: StringReactType;
};

const Options: FC<Props> = (props: Props) => {
  const generateName = () => {
    const brand = carBrandsData[Math.round(((carBrandsData.length - 1) / 100) * Math.round(Math.random() * 100))];
    const model = carModelsData[Math.round(((carModelsData.length - 1) / 100) * Math.round(Math.random() * 100))];
    return `${brand} ${model}`;
  };
  const generateColor = () => {
    return `#${`${Math.random().toString(16)}000000`.substring(2, 8).toUpperCase()}`;
  };
  const generateCar = () => {
    for (let i = 0; i < 100; i += 1) {
      fetch(`http://127.0.0.1:3000/garage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: generateName(),
          color: generateColor(),
        }),
      })
        .then(props.fetchCars)
        .catch((err) => console.log('error: function createCar', err));
    }
  };
  const createCar = () => {
    const garageInputCreate = document.getElementById('garage-input-create') as HTMLInputElement;
    const garageColorCreate = document.getElementById('garage-color-create') as HTMLInputElement;
    if (garageInputCreate.value) {
      fetch(`http://127.0.0.1:3000/garage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: garageInputCreate.value,
          color: garageColorCreate.value,
        }),
      })
        .then(props.fetchCars)
        .catch((err) => console.log('error: function createCar', err));
    } else {
      window.alert('Input car name!');
    }
  };
  const updateCar = () => {
    const garageInputUpdate = document.getElementById('garage-input-update') as HTMLInputElement;
    const garageColorUpdate = document.getElementById('garage-color-update') as HTMLInputElement;
    if (garageInputUpdate.value) {
      fetch(`http://127.0.0.1:3000/garage/${props.carSelectUpdate.value.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: garageInputUpdate.value,
          color: garageColorUpdate.value,
        }),
      })
        .then(() => {
          props.carSelectUpdate.setValue({
            name: '',
            color: '#000000',
            id: 0,
          });
          return props.fetchCars();
        })
        .catch((err) => console.log('error: function updateCar', err));
    } else {
      window.alert('Input car name to update!');
    }
  };
  useEffect(() => {
    const garageInputUpdate = document.getElementById('garage-input-update') as HTMLInputElement;
    const garageColorUpdate = document.getElementById('garage-color-update') as HTMLInputElement;
    garageInputUpdate.value = props.carSelectUpdate.value.name;
    garageColorUpdate.value = props.carSelectUpdate.value.color;
    garageInputUpdate.focus();
  }, [props.carSelectUpdate.value.id]);
  const changeTextCreate = ({ target }: { target: HTMLInputElement }) => {
    props.textCreate.setValue(target.value);
  };
  const changeColorCreate = ({ target }: { target: HTMLInputElement }) => {
    props.colorCreate.setValue(target.value);
  };
  const changeNameUpdate = ({ target }: { target: HTMLInputElement }) => {
    props.textUpdate.setValue(target.value);
  };
  const changeColorUpdate = ({ target }: { target: HTMLInputElement }) => {
    props.colorUpdate.setValue(target.value);
  };
  const loadCreateUpdate = () => {
    const garageColorCreate = document.getElementById('garage-input-create') as HTMLInputElement;
    const garageInputCreate = document.getElementById('garage-color-create') as HTMLInputElement;
    const garageInputUpdate = document.getElementById('garage-input-update') as HTMLInputElement;
    const garageColorUpdate = document.getElementById('garage-color-update') as HTMLInputElement;
    garageColorCreate.value = props.textCreate.value;
    garageInputCreate.value = props.colorCreate.value;
    garageInputUpdate.value = props.textUpdate.value;
    garageColorUpdate.value = props.colorUpdate.value;
  };
  useEffect(() => {
    loadCreateUpdate();
  }, [props.activePage]);
  return (
    <div className="garage-options">
      <div className="garage-inputs garage-create-inputs garage-options-block">
        <input
          onChange={changeTextCreate}
          id="garage-input-create"
          className=" garage-input create"
          type="text"
        ></input>
        <input
          onChange={changeColorCreate}
          id="garage-color-create"
          className=" garage-color-input"
          type="color"
        ></input>
        <button className="btn garage-button" disabled={false} onClick={createCar}>
          create
        </button>
      </div>
      <div className="garage-inputs garage-update-inputs garage-options-block">
        <input
          onChange={changeNameUpdate}
          ref={props.inputCreateRef}
          id="garage-input-update"
          className=" garage-input update"
          type="text"
          disabled={!props.carSelectUpdate.value.id}
        ></input>
        <input
          onChange={changeColorUpdate}
          id="garage-color-update"
          className=" garage-color-input"
          type="color"
          disabled={!props.carSelectUpdate.value.id}
        ></input>
        <button className="btn garage-button" disabled={!props.carSelectUpdate.value.id} onClick={updateCar}>
          update
        </button>
      </div>
      <div className="garage-buttons garage-options-block">
        <button
          ref={props.btnRaceRef}
          className="btn garage-race-button"
          disabled={!(!props.blocked.value && !props.engineIsActiveGlobal.value)}
        >
          race
        </button>
        <button
          ref={props.btnResetRef}
          className="btn garage-reset-button"
          disabled={!props.engineIsActiveGlobal.value}
        >
          reset
        </button>
        <button className="btn garage-generate-button" onClick={generateCar}>
          generate cars
        </button>
      </div>
    </div>
  );
};

export default Options;
