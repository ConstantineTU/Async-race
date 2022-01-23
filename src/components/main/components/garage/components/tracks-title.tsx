import * as React from 'react';
import { Dispatch, useState, SetStateAction, useEffect } from 'react';

type Props = {
};


export default function TracksTitle() {
  return (
    <div>
      <div className="garage-title-wrap">
        <h2 className="garage-title">Garage - (<span className="garage-title-count">4</span> cars)</h2>

      </div>
      <div className="garage-pagination">
        <h3 className="garage-pagination__title">Page #<span>1</span></h3>
        <button className="btn-small btn-prev" disabled={true}>Prev</button>
        <button className="btn-small btn-next" disabled={true}>Next</button>
      </div>
    </div>
  );
}
