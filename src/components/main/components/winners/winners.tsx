import * as React from 'react';
import { Dispatch, useState, SetStateAction, useEffect } from 'react';
import './winners.scss';
import { carDataType, stringReactType, numberReactType, carDataWinType, winnersType } from '../../../../type';
import TableLine from './components/table-line';

type Props = {
  fetchWinners: (sortDefault?: string, orderDefault?: string) => void;
  carCountWinners: stringReactType;
  pageWinners: stringReactType;
  pageCountWinners: numberReactType;
  carDataWinners: {
    value: winnersType;
    setValue: React.Dispatch<React.SetStateAction<winnersType>>;
  };
  carData: {
    value: carDataType;
    setValue: React.Dispatch<React.SetStateAction<carDataType>>;
  };
};

export default function Winners(props: Props) {
  const [id, setId] = useState<boolean>(false);
  const [wins, setWins] = useState<boolean>(false);
  const [time, settime] = useState<boolean>(false);

  const handleChange = (prop: string) => {
    if (prop === 'id' && !id) {
      setId(true);
      setWins(false);
      settime(false);
    } else if (prop === 'id' && id) {
      setId(false);
      setWins(false);
      settime(false);
    }
    if (prop === 'wins' && !wins) {
      setWins(true);
      settime(false);
      setId(false);
    } else if (prop === 'wins' && wins) {
      setWins(false);
      settime(false);
      setId(false);
    }
    if (prop === 'time' && !time) {
      settime(true);
      setId(false);
      setWins(false);
    } else if (prop === 'time' && time) {
      settime(false);
      setId(false);
      setWins(false);
    }

    if (id) {
      props.fetchWinners(prop, 'DESC');
    }
    if (wins) {
      props.fetchWinners(prop, 'DESC');
    }
    if (time) {
      props.fetchWinners(prop, 'DESC');
    }
    if (!id && !wins && !time) props.fetchWinners(prop, 'ASC');
  };
  const nextPage = () => {
    if (props.pageCountWinners.value > Number(props.pageWinners.value)) {
      props.pageWinners.setValue(String(Number(props.pageWinners.value) + 1));
    }
  };
  const prevPage = () => {
    if (Number(props.pageWinners.value) > 1) {
      props.pageWinners.setValue(String(Number(props.pageWinners.value) - 1));
    }
  };
  return (
    <div className="winners" id="winners">
      <div className="winners-table-wrap">
        <h2 className="winners-title">
          Winners ({' '}
          <span id="winners-count" className="winners-count">
            {props.carCountWinners.value}
          </span>{' '}
          )
        </h2>
        <div className="winners-top">
          <div className="winners-title-wrap">
            <h3 className="winners-subtitle">
              Page #
              <span id="winners-page" className="winners-page">
                {props.pageWinners.value}
              </span>
            </h3>
          </div>
          <div className="winners-button-wrap">
            <div>
              <button disabled={false} onClick={prevPage} className="btn-small btn-prev">
                Prev page
              </button>
            </div>
            <div>
              <button disabled={false} onClick={nextPage} className="btn-small btn-next">
                Next page
              </button>
            </div>
          </div>
        </div>
        <table className="winners-table">
          <thead>
            <tr>
              <th>№</th>
              <th className="winners-sort-button" onClick={() => handleChange('id')}>
                ID
              </th>
              <th>CAR</th>
              <th>NAME</th>
              <th className="winners-sort-button" onClick={() => handleChange('wins')}>
                WINS
              </th>
              <th className="winners-sort-button" onClick={() => handleChange('time')}>
                BEST TIME
              </th>
            </tr>
          </thead>
          <tbody>
            {props.carDataWinners.value.map((el, i) => (
              <TableLine
                key={i}
                el={el}
                i={i}
                fetchWinners={props.fetchWinners}
                carCountWinners={props.carCountWinners}
                pageWinners={props.pageWinners}
                pageCountWinners={props.pageCountWinners}
                carData={props.carData}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
