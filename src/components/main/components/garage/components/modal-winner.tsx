import * as React from 'react';
import { Dispatch, useState, SetStateAction, useEffect } from 'react';
import { carDataType, stringReactType, numberReactType, carSelectType, winnerType } from '../../../../../type'

type Props = {
  winner: {
    value: winnerType;
    setValue: React.Dispatch<React.SetStateAction<winnerType>>;
  }
};


export default function ModalWinner(props: Props) {

  return (
    <div className="garage-modal-container">
      <h3 className="garage-modal-title">WINNER</h3>
      <div>Time: {props.winner.value.time} s</div>
      <div>Car name: {props.winner.value.name}</div>
      <div>ID: {props.winner.value.id}</div>
      <div>Position: {props.winner.value.position + 1}</div>
    </div>
  );
}