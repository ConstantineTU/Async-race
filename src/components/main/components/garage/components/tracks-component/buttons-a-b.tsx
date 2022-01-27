import * as React from 'react';
import { Dispatch, useState, SetStateAction, useEffect } from 'react';

type Props = {
  i: number
  startEngine: (i: number) => void
  stopCar: (i: number) => void
  engineIsActiveGlobal: {
    value: boolean;
    setValue: React.Dispatch<React.SetStateAction<boolean>>;
  }
  blocked: {
    value: boolean;
    setValue: React.Dispatch<React.SetStateAction<boolean>>;
  }
};


export default function ButtonsAB(props: Props) {
  const [engineIsActive, setEngineIsActive] = useState<boolean>(false)
  const handleStart = () => {
    props.startEngine(props.i)
    setEngineIsActive(true)
    props.blocked.setValue(true)
  }
  const handleStop = () => {
    props.stopCar(props.i)
    setEngineIsActive(false)
    props.blocked.setValue(false)
  }
  return (
    <div className="garage-item-control-block">
      <button className="btn-small" onClick={handleStart}
        disabled={props.engineIsActiveGlobal.value || (engineIsActive ? true : false)}>A</button>
      <button className="btn-small" onClick={handleStop}
        disabled={props.engineIsActiveGlobal.value || (engineIsActive ? false : true)}>B</button>
    </div>
  );
}