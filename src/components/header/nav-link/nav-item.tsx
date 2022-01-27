import * as React from 'react';
import { Dispatch, SetStateAction } from 'react';
import './nav.scss';

type Props = {
  pageName: string;
  active: boolean;
  activePage: {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
  }
  engineIsActiveGlobal: {
    value: boolean;
    setValue: React.Dispatch<React.SetStateAction<boolean>>;
  }
  isWinner: {
    value: boolean;
    setValue: React.Dispatch<React.SetStateAction<boolean>>;
  }
};

export default function NavItem(props: Props) {
  const handleChange = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (props.engineIsActiveGlobal.value) {
      window.alert('Please click on the reset button')
    } else {
      props.activePage.setValue(props.pageName)
    }

  };

  return (
    <li className="nav__item">
      <a className={props.active ? 'nav__link active' : 'nav__link'} href={`#${props.pageName}`} onClick={(e) => handleChange(e)}>
        {props.pageName.toUpperCase()}
      </a>
    </li>
  );
}
