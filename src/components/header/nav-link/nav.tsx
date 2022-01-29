import * as React from 'react';
import { FC } from 'react';
import './nav.scss';
import NavItem from './nav-item';

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
        />
      ))}
    </ul>
  );
};

export default Nav;
