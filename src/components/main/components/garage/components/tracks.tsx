import * as React from 'react';
import { Dispatch, useState, SetStateAction, useEffect } from 'react';
import car from '../../../../../assets/img/car.svg'
import redFlag from '../../../../../assets/img/red-flag.svg'

type Props = {
};


export default function Tracks() {
  return (
    <div className="garage-item">
      <div className="garage-item-top">
        <button className=" btn-small">select</button>
        <button className=" btn-small">remove</button>
        <span className="">Tesla</span>
      </div>
      <div className="garage-item-field">
        <div className="garage-item-control-block">
          <button className="btn btn-small">A</button>
          <button className="btn btn-small" disabled={true}>B</button>
        </div>
        <div className="garage-car-wrap">
          <img className="garage-car" src={car}></img>
        </div>
        <div className="garage-flag-wrap">
          <img className="garage-flag" src={redFlag}></img>
        </div>
      </div>
    </div>
  );
}
