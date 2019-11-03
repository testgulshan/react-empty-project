import React from 'react';
import { hot } from 'react-hot-loader/root';
import Header from './components/Header';
import Banner from './components/Banner';

const App = () => {
  const welcomeMessage = 'Welcome dev 🧪';

  return (
    <main>
      <Header />
      <Banner message={welcomeMessage} />
    </main>
  );
};

export default hot(App);
