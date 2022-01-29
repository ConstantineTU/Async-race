import * as React from 'react';
import { FC } from 'react';
import './header.scss';
import { BooleanReactType, StringReactType } from '../../type';

import Nav from './nav-link/nav';

type Props = {
  activePage: StringReactType;
  engineIsActiveGlobal: BooleanReactType;
  isWinner: BooleanReactType;
  btnWinners: React.MutableRefObject<HTMLLIElement | null>;
  btnGarage: React.MutableRefObject<HTMLLIElement | null>;
};

const Header: FC<Props> = (props: Props) => {
  return (
    <header id="Top" className="header">
      <Nav
        activePage={props.activePage}
        engineIsActiveGlobal={props.engineIsActiveGlobal}
        isWinner={props.isWinner}
        btnWinners={props.btnWinners}
        btnGarage={props.btnGarage}
      />
    </header>
  );
};

export default Header;
