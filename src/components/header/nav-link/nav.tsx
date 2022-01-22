import * as React from 'react';
import { Dispatch, SetStateAction } from 'react';
import './nav.scss';
// import { Link } from 'react-router-dom'
import NavItem from './nav-item';

type Props = {
  activePage: {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
  }
};

export default function Nav(props: Props) {
  const pages = ['home', 'garage', 'winners'];

  return (
    <ul className="nav">
      {pages.map((pageName, index) => (
        <NavItem
          pageName={pageName}
          key={index}
          active={props.activePage.value === pageName}
          activePage={props.activePage}
        />
      ))}
    </ul>
  );
}

// const AppLink = (props) => ({
//   render: () => (
//     <Link to={...props} activeClassName="active" />
//   ),
// });

// class Nav extends Component {
//   render(): React.ReactNode {
//     return (
//       <nav>
//         <ul id="nav" className="nav">
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/filters">Filters</Link></li>
//           <li><Link to="/tree">Tree</Link></li>
//         </ul>
//       </nav>
//     );
//   }
// }

// export default Nav;
