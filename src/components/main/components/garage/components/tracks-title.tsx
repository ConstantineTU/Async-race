import * as React from 'react';
import { FC } from 'react';
import { stringReactType, numberReactType, winnerType } from '../../../../../type';

type Props = {
  pageCount: numberReactType;
  page: numberReactType;
  carCount: stringReactType;
  engineIsActiveGlobal: {
    value: boolean;
    setValue: React.Dispatch<React.SetStateAction<boolean>>;
  };
  winner: {
    value: winnerType;
    setValue: React.Dispatch<React.SetStateAction<winnerType>>;
  };
  btnPrevRef: React.MutableRefObject<HTMLButtonElement | null>;
  btnNextRef: React.MutableRefObject<HTMLButtonElement | null>;
  blocked: {
    value: boolean;
    setValue: React.Dispatch<React.SetStateAction<boolean>>;
  };
};

const TracksTitle: FC<Props> = (props: Props) => {
  const nextPage = () => {
    if (props.pageCount.value > props.page.value) {
      props.page.setValue(props.page.value + 1);
    }
  };
  const prevPage = () => {
    if (props.page.value > 1) {
      props.page.setValue(props.page.value - 1);
    }
  };
  return (
    <div className="garage-title-container">
      <div className="garage-title-wrap">
        <h2 className="garage-title">
          Garage - (<span className="garage-title-count">{props.carCount.value}</span> cars)
        </h2>
      </div>
      <div className="garage-pagination">
        <h3 className="garage-pagination__title">
          Page #<span>{props.page.value}</span>
        </h3>
        <button
          className="btn-small btn-prev"
          onClick={prevPage}
          ref={props.btnPrevRef}
          disabled={!(!props.blocked.value && !props.engineIsActiveGlobal.value && props.page.value > 1)}
        >
          Prev
        </button>
        <button
          className="btn-small btn-next"
          onClick={nextPage}
          ref={props.btnNextRef}
          disabled={
            !!(
              props.blocked.value ||
              props.engineIsActiveGlobal.value ||
              (props.pageCount.value < props.page.value && props.pageCount.value !== 1)
            )
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TracksTitle;
