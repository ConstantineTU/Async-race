import * as React from 'react';
import { Dispatch, useState, SetStateAction, useEffect } from 'react';
import Options from './components/options'
import Tracks from './components/tracks'
import TracksTitle from './components/tracks-title'
import './garage.scss';

type Props = {
};


export default function Garage(props: Props) {
  return (
    <div className="garage" id="garage">
      <Options />
      <TracksTitle />
      <Tracks />
    </div>
  );
}
