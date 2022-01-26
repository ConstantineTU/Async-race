import * as React from 'react';
import { Dispatch, useState, SetStateAction, useEffect } from 'react';

type Props = {
};


export default function Winners() {
  return (
    <div className="winners" id="winners">
      <div className="winners-table-wrap">
        <h2 className="winners-title">Winners(3)</h2>
        <h3 className="winners-page">Page #1</h3>
        <table className="winners-table">
          <thead>
            <tr>
              <th>№</th>
              <th>ID</th>
              <th>CAR</th>
              <th>NAME</th>
              <th className="winners-sort-button">WINS</th>
              <th className="winners-sort-button">BEST TIME</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>193</td>
              <td></td>
              <td></td>
              <td>5</td>
              <td>2.51s</td>
            </tr>
          </tbody>
        </table>
        <div className="button-wrap">
          <div><button disabled={false} className="btn-small btn-prev">Prev page</button></div>
          <div><button disabled={false} className="btn-small btn-next">Next page</button></div>
        </div>
      </div>
    </div>
  );
}
