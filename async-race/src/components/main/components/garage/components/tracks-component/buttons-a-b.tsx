import * as React from 'react';
import { FC, useState } from 'react';
import { BooleanReactType } from '../../../../../../type';

type Props = {
  i: number;
  startEngine: (i: number) => void;
  stopCar: (i: number) => void;
  engineIsActiveGlobal: BooleanReactType;
  blocked: BooleanReactType;
};

const ButtonsAB: FC<Props> = (props: Props) => {
  const [engineIsActive, setEngineIsActive] = useState<boolean>(false);
  const handleStart = () => {
    props.startEngine(props.i);
    setEngineIsActive(true);
    props.blocked.setValue(true);
  };
  const handleStop = () => {
    props.stopCar(props.i);
    setEngineIsActive(false);
    props.blocked.setValue(false);
  };
  return (
    <div className="garage-item-control-block">
      <button
        className="btn-small"
        onClick={handleStart}
        disabled={props.engineIsActiveGlobal.value || !!engineIsActive}
      >
        A
      </button>
      <button className="btn-small" onClick={handleStop} disabled={props.engineIsActiveGlobal.value || !engineIsActive}>
        B
      </button>
    </div>
  );
};

export default ButtonsAB;
