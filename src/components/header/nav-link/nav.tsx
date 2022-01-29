import * as React from 'react';
import { FC } from 'react';
import './nav.scss';
import NavItem from './nav-item';
import { StringReactType, BooleanReactType } from '../../../type';

type Props = {
  activePage: StringReactType;
  engineIsActiveGlobal: BooleanReactType;
  isWinner: BooleanReactType;
  btnWinners: React.MutableRefObject<HTMLLIElement | null>;
  btnGarage: React.MutableRefObject<HTMLLIElement | null>;
};

const Nav: FC<Props> = (props: Props) => {
  const pages = ['garage', 'winners'];

  return (
    <ul className="nav">
      {pages.map((pageName, index) => (
        <NavItem
          pageName={pageName}
          key={index}
          active={props.activePage.value === pageName}
          activePage={props.activePage}
          engineIsActiveGlobal={props.engineIsActiveGlobal}
          isWinner={props.isWinner}
          btnWinners={props.btnWinners}
          btnGarage={props.btnGarage}
        />
      ))}
    </ul>
  );
};

export default Nav;
