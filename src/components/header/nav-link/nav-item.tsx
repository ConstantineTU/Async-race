import * as React from 'react';
import { FC } from 'react';
import './nav.scss';

type Props = {
  pageName: string;
  active: boolean;
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
