import * as React from 'react';
import { Dispatch, useState, SetStateAction, useEffect, MouseEventHandler } from 'react';
import { carDataType, stringReactType, numberReactType, carSelectType } from '../../../../../type'

type Props = {
  fetchCars: () => void;
  carSelectUpdate: {
    value: carSelectType;
    setValue: React.Dispatch<React.SetStateAction<carSelectType>>;
  }
};


export default function Options(props: Props) {

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
          const garageInputUpdate = document.getElementById('garage-input-update') as HTMLInputElement;
          garageInputUpdate.blur()
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
        <input id='garage-input-update' className=" garage-input update" type="text"></input><input
          id='garage-color-update' className=" garage-color-input" type="color" ></input><button className="btn garage-button"
            disabled={props.carSelectUpdate.value.id ? false : true} onClick={updateCar}>update</button>
      </div>
      <div className="garage-buttons garage-options-block"><button className="btn garage-race-button">race</button><button
        className="btn garage-reset-button" disabled={false}>reset</button><button
          className="btn garage-generate-button">generate cars</button>
      </div>
    </div>
  );
}
