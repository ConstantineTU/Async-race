import * as React from 'react';
import { Dispatch, useState, SetStateAction, useEffect, MouseEventHandler } from 'react';
import { carDataType, stringReactType, numberReactType, carSelectType } from '../../../../../type'
import carBrandsData from '../../../../../assets/data/brands-cars'
import carModelsData from '../../../../../assets/data/models-cars'

type Props = {
  fetchCars: () => void;
  carSelectUpdate: {
    value: carSelectType;
    setValue: React.Dispatch<React.SetStateAction<carSelectType>>;
  }
  inputCreateRef: React.MutableRefObject<HTMLInputElement | null>
  btnRaceRef: React.MutableRefObject<HTMLButtonElement | null>
  btnResetRef: React.MutableRefObject<HTMLButtonElement | null>
};


export default function Options(props: Props) {
  const generateName = () => {
    const brand = carBrandsData[Math.round(carBrandsData.length / 100 * Math.round(Math.random() * 100))];
    const model = carModelsData[Math.round(carModelsData.length / 100 * Math.round(Math.random() * 100))];
    return `${brand} ${model}`
  }
  const generateColor = () => {
    return '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()
  }
  const generateCar = () => {
    for (let i = 0; i < 100; i += 1) {
      fetch(`http://127.0.0.1:3000/garage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: generateName(),
          color: generateColor(),
        })
      })
        .then(props.fetchCars)
        .catch((err) => console.log('error: function createCar'))
    }
  }
  const createCar = () => {
    const garageInputCreate = document.getElementById('garage-input-create') as HTMLInputElement;
    const garageColorCreate = document.getElementById('garage-color-create') as HTMLInputElement;
    if (garageInputCreate.value) {
      fetch(`http://127.0.0.1:3000/garage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: garageInputCreate.value,
          color: garageColorCreate.value,
        })
      })
        .then(props.fetchCars)
        .catch((err) => console.log('error: function createCar'))
    } else {
      window.alert('Input car name!')
    }
  }
  const updateCar = () => {
    const garageInputUpdate = document.getElementById('garage-input-update') as HTMLInputElement;
    const garageColorUpdate = document.getElementById('garage-color-update') as HTMLInputElement;
    if (garageInputUpdate.value) {
      fetch(`http://127.0.0.1:3000/garage/${props.carSelectUpdate.value.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: garageInputUpdate.value,
          color: garageColorUpdate.value,
        })
      })
        .then(() => {
          props.carSelectUpdate.setValue({
            name: '',
            color: '#000000',
            id: 0,
          })
          return props.fetchCars()
        })
        .catch((err) => console.log('error: function updateCar'))
    } else {
      window.alert('Input car name to update!')
    }
  }
  useEffect(() => {
    const garageInputUpdate = document.getElementById('garage-input-update') as HTMLInputElement;
    const garageColorUpdate = document.getElementById('garage-color-update') as HTMLInputElement;
    garageInputUpdate.value = props.carSelectUpdate.value.name
    garageColorUpdate.value = props.carSelectUpdate.value.color
    garageInputUpdate.focus()
  }, [props.carSelectUpdate])
  return (
    <div className="garage-options">
      <div className="garage-inputs garage-create-inputs garage-options-block">
        <input id='garage-input-create' className=" garage-input create" type="text"></input><input
          id='garage-color-create' className=" garage-color-input" type="color"></input><button className="btn garage-button"
            disabled={false} onClick={createCar}>create</button>
      </div>
      <div className="garage-inputs garage-update-inputs garage-options-block">
        <input ref={props.inputCreateRef} id='garage-input-update' className=" garage-input update" type="text"
          disabled={props.carSelectUpdate.value.id ? false : true}></input><input
            id='garage-color-update' className=" garage-color-input" type="color"
            disabled={props.carSelectUpdate.value.id ? false : true} ></input><button className="btn garage-button"
              disabled={props.carSelectUpdate.value.id ? false : true} onClick={updateCar}>update</button>
      </div>
      <div className="garage-buttons garage-options-block">
        <button ref={props.btnRaceRef} className="btn garage-race-button">race</button>
        <button ref={props.btnResetRef} className="btn garage-reset-button" disabled={false}>reset</button>
        <button className="btn garage-generate-button" onClick={generateCar}>generate cars</button>
      </div>
    </div>
  );
}
