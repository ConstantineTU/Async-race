import React, { Fragment, useState, useEffect, FC } from 'react';
import Header from '../header/header';
import Main from '../main/main';
import Footer from '../footer/footer';

const App: FC = () => {
  const [activePage, setActivePage] = useState<string>(() => {
    const saved = localStorage.getItem('activePage');
    const initialValue = saved || undefined;
    return initialValue || 'домашняя';
  });
  useEffect(() => {
    localStorage.setItem('activePage', activePage);
  }, [activePage]);

  return (
    <Fragment>
      <Header activePage={{ value: activePage, setValue: setActivePage }} />
      <Main
        activePage={{ value: activePage, setValue: setActivePage }}
      />
      <Footer />
    </Fragment>
  );
};

export default App;
