import * as React from 'react';
import { Dispatch, useState, SetStateAction, useEffect } from 'react';
import { carDataType, stringReactType, numberReactType, carDataWinType } from '../../../../../type'

type Props = {
  fetchWinners: () => void
  carCountWinners: stringReactType
  pageWinners: stringReactType
  pageCountWinners: numberReactType
  carData: {
    value: carDataType;
    setValue: React.Dispatch<React.SetStateAction<carDataType>>;
  }
  el: {
    name: string;
    color: string;
    id: number;
    wins: number;
    time: number;
  }
  i: number;
};


export default function Winners(props: Props) {
  return (
    <tr >
      <td>{props.i + 1}</td>
      <td>{props.el.id}</td>
      <td>
        <div className="winners-car-wrap">
          <svg className="winners-car" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 167.83 55.332" version="1.0">
            <g transform="translate(-227.51 -167.55)">
              <path id="path2220" fill={props.el.color} fillRule={'evenodd'} d="m229.52 196.33c-0.09-8.41 0.63-14.12 2.92-14.62l11.85-1.54c8.38-3.87 17.11-8.68 24.77-10.62 5.88-1.17 12.1-1.88 18.77-2 13.43 0.22 28.36-0.7 37.85 2.47 9.04 4.17 17.95 8.62 26.46 13.84 11.48 0.79 34.91 3.98 38.32 7.7 1.69 2.28 3.05 4.73 3.69 7.54 1.49 0.61 1.38 2.82 0.77 5.53l-0.16 5.54-5.69 2.31-11.23 1.39-2.92 0.77c-4.24 9.94-19.98 8.71-24.31-0.47l-3.54 0.62-63.09-0.62-0.77 1.08-4.92-0.15c-3.3 10.15-22.17 11.08-25.08-1.39h-2.46l-7.39-1.07-11.23-1.54c-3.06-1.82-4.34-3.19-4.62-4.31l0.77-1.08-0.61-6.15c0.41-2.09 0.79-2.76 1.85-3.23zm68.16-26.37c-6.77 0.01-13.39 0.26-19.34 1.57l1.39 11.78 20.9 0.72c0.86-0.18 1.76-0.32 1.59-1.79l-2.18-12.28c-0.79-0.01-1.57 0-2.36 0zm-20.34 1.8c-4.01 0.97-7.7 2.47-10.9 4.74-1.27 0.85-1.73 1.85-1.68 2.97 0.59 2.54 2.09 3.57 4.26 3.47l9.71 0.33-1.39-11.51zm27.26-1.7l4.46 12.68c0.56 0.92 1.38 1.61 2.88 1.69l21.7 0.89c-3.09-2.11-0.55-6 2.58-5.15-5.87-4.89-12.24-7.99-19.13-9.22-4.05-0.65-8.26-0.79-12.49-0.89zm-71.88 12.58c-1.78 0.64-2.21 5.18-2.29 10.75l5.83-0.05c0.22-1.95 0.26-3.9 0.02-5.85-0.57-3.41-2.17-3.83-3.56-4.85zm38.65 5.22h5.51c0.43 0 0.79 0.36 0.79 0.79 0 0.44-0.36 0.79-0.79 0.79h-5.51c-0.44 0-0.79-0.35-0.79-0.79 0-0.43 0.35-0.79 0.79-0.79zm38 0.91h5.51c0.44 0 0.79 0.35 0.79 0.79s-0.35 0.79-0.79 0.79h-5.51c-0.44 0-0.79-0.35-0.79-0.79s0.35-0.79 0.79-0.79zm-34.25 21.22c0 5.04-4.09 9.13-9.13 9.13s-9.13-4.09-9.13-9.13 4.09-9.13 9.13-9.13 9.13 4.09 9.13 9.13zm97.44-1.16c0 5.04-4.09 9.13-9.13 9.13s-9.13-4.09-9.13-9.13 4.09-9.13 9.13-9.13 9.13 4.09 9.13 9.13zm7.63-11.03l11.79 0.08c-0.91-1.96-2.08-3.7-3.91-5.12l-4.56 0.35c-0.84 0.13-1.19 0.5-1.5 0.89l-1.82 3.8z" />
            </g>
          </svg>
        </div>
      </td>
      <td>{props.el.name}</td>
      <td>{props.el.wins}</td>
      <td>{props.el.time} s</td>
    </tr>
  );
}
