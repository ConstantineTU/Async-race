import * as React from 'react';
import { Dispatch, useState, SetStateAction, useEffect } from 'react';

type Props = {
};


export default function Options() {
  return (
    <div className="garage-options">
      <div className="garage-inputs garage-create-inputs garage-options-block">
        <input className="ui-input garage-input" type="text"></input><input
          className="ui-input garage-color-input" type="color"></input><button className="btn garage-button"
            disabled={false}>create</button>
      </div>
      <div className="garage-inputs garage-update-inputs garage-options-block">
        <input className="ui-input garage-input" type="text"></input><input
          className="ui-input garage-color-input" type="color" ></input><button className="btn garage-button"
            disabled={false}>update</button>
      </div>
      <div className="garage-buttons garage-options-block"><button className="btn garage-race-button">race</button><button
        className="btn garage-reset-button" disabled={false}>reset</button><button
          className="btn garage-generate-button">generate cars</button>
      </div>
    </div>
  );
}
