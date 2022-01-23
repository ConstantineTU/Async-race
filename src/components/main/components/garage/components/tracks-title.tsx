import * as React from 'react';
import { Dispatch, useState, SetStateAction, useEffect } from 'react';
import { carDataType, stringReactType, numberReactType } from '../../../../../type'

type Props = {

  pageCount: numberReactType
  page: numberReactType
  carCount: stringReactType
};


export default function TracksTitle(props: Props) {
  const nextPage = () => {
    if (props.pageCount.value > props.page.value) {
      props.page.setValue(props.page.value + 1)
    }
  }
  const prevPage = () => {
    if (props.page.value > 1) {
      props.page.setValue(props.page.value - 1)
    }
  }
  return (
    <div className="garage-title-container">
      <div className="garage-title-wrap">
        <h2 className="garage-title">Garage - (<span className="garage-title-count">{props.carCount.value}</span> cars)</h2>
      </div>
      <div className="garage-pagination">
        <h3 className="garage-pagination__title">Page #<span>{props.page.value}</span></h3>
        <button className="btn-small btn-prev" onClick={prevPage}
          disabled={(props.page.value > 1) ? false : true}>Prev</button>
        <button className="btn-small btn-next" onClick={nextPage}
          disabled={(props.pageCount.value > props.page.value) && props.pageCount.value !== 1 ? false : true}>Next</button>
      </div>
    </div>
  );
}
