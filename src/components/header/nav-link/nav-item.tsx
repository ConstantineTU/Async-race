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
};

export default function NavItem(props: Props) {
  const handleChange = () => {
    props.activePage.setValue(props.pageName);
  };

  return (
    <li className="nav__item">
      <a className={props.active ? 'nav__link active' : 'nav__link'} href={`#${props.pageName}`} onClick={handleChange}>
        {props.pageName.toUpperCase()}
      </a>
    </li>
  );
}
