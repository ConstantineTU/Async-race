import * as React from 'react';
import { FC } from 'react';
import './header.scss';

import Nav from './nav-link/nav';

type Props = {
  activePage: {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
  };
  engineIsActiveGlobal: {
    value: boolean;
    setValue: React.Dispatch<React.SetStateAction<boolean>>;
  };
  isWinner: {
    value: boolean;
    setValue: React.Dispatch<React.SetStateAction<boolean>>;
  };
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
