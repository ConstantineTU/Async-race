import * as React from 'react';
import { FC } from 'react';
import { winnerType } from '../../../../../type';

type Props = {
  winner: {
    value: winnerType;
    setValue: React.Dispatch<React.SetStateAction<winnerType>>;
  };
};

const ModalWinner: FC<Props> = (props: Props) => {
  const indexCorrection = 1;

  return (
    <div className="garage-modal-container">
      <h3 className="garage-modal-title">WINNER</h3>
      <div>Time: {props.winner.value.time} s</div>
      <div>Car name: {props.winner.value.name}</div>
      <div>ID: {props.winner.value.id}</div>
      <div>Position: {props.winner.value.position + indexCorrection}</div>
    </div>
  );
};

export default ModalWinner;
