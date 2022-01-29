import * as React from 'react';
import { FC } from 'react';
import './nav.scss';
import { StringReactType, BooleanReactType } from '../../../type';

type Props = {
  pageName: string;
  active: boolean;
  activePage: StringReactType;
  engineIsActiveGlobal: BooleanReactType;
  isWinner: BooleanReactType;
  btnWinners: React.MutableRefObject<HTMLLIElement | null>;
  btnGarage: React.MutableRefObject<HTMLLIElement | null>;
};

const NavItem: FC<Props> = (props: Props) => {
  const handleChange = () => {
    props.activePage.setValue(props.pageName);
  };

  return (
    <li className="nav__item" ref={props.pageName === 'winners' ? props.btnWinners : props.btnGarage}>
      <a className={props.active ? 'nav__link active' : 'nav__link'} href={`#${props.pageName}`} onClick={handleChange}>
        {props.pageName.toUpperCase()}
      </a>
    </li>
  );
};

export default NavItem;
