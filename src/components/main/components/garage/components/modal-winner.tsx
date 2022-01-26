import * as React from 'react';
import { Dispatch, useState, SetStateAction, useEffect } from 'react';

type Props = {
  winner: {
    value: {
      name: string;
      color: string;
      id: number;
      time: string;
      position: number;
    };
    setValue: React.Dispatch<React.SetStateAction<{
      name: string;
      color: string;
      id: number;
      time: string;
      position: number;
    }>>;
  }
};


export default function ModalWinner(props: Props) {

  return (
    <div className="garage-modal-container">
      <h3 className="garage-modal-title">WINNER</h3>
      <div>Time: {props.winner.value.time}</div>
      <div>Car name: {props.winner.value.name}</div>
      <div>ID: {props.winner.value.id}</div>
      <div>Position: {props.winner.value.position + 1}</div>
    </div>
  );
}