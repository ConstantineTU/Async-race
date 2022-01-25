import * as React from 'react';
import { Dispatch, useState, SetStateAction, useEffect } from 'react';
import redFlag from '../../../../../assets/img/red-flag.svg'

type Props = {
  i: number
  startEngine: (e: React.MouseEvent<HTMLButtonElement>, i: number) => void
  stopCar: (e: React.MouseEvent<HTMLButtonElement>, i: number) => void
};


export default function ButtonsAB(props: Props) {
  const [engineIsActive, setEngineIsActive] = useState<boolean>(false)
  const handleStart = (e: React.MouseEvent<HTMLButtonElement>) => {
    props.startEngine(e, props.i)
    setEngineIsActive(true)
  }
  const handleStop = (e: React.MouseEvent<HTMLButtonElement>) => {
    props.stopCar(e, props.i)
    setEngineIsActive(false)

  }
  return (
    <div className="garage-item-control-block">
      <button className="btn-small" onClick={(e) => handleStart(e)} disabled={engineIsActive ? true : false}>A</button>
      <button className="btn-small" onClick={(e) => handleStop(e)} disabled={engineIsActive ? false : true}>B</button>
    </div>
  );
}