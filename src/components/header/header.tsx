import * as React from 'react';
import { SetStateAction, Dispatch } from 'react';
import './header.scss';

import Nav from './nav-link/nav';

type Props = {
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

export default function Header(props: Props) {
  return (
    <header id="Top" className="header">
      <Nav activePage={props.activePage}
        engineIsActiveGlobal={props.engineIsActiveGlobal}
        isWinner={props.isWinner}
      />
    </header>
  );
}

// import NavLink from './nav-link/nav-link';

// class Header extends Component {
//   render(): React.ReactNode {
//     return (
//       <header id="Top" className="header">
//         <NavLink />
//       </header>
//     );
//   }
// }

// export default Header;
