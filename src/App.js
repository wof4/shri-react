import React from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import BuildDetailsContainer from './components/pages/buildDetails/buildDetailsContainer';
import BuildHistoryPage from './components/pages/buildHistory/buildHistoryPage';
import s from './app.module.css';
import SettingPage from './components/pages/settings/settingPage';
import Footer from './components/pagesComponents/footer/footer';

const App = () => (
  <HashRouter>
    <div className={s.wrapper}>
      <Route path="/details" component={BuildDetailsContainer} />
      <Route path="/build" component={BuildHistoryPage} />
      <Route path="/setting" component={SettingPage} />
      <Route path="/" render={() => <Redirect to="/build" />} />
      <Footer />
    </div>
  </HashRouter>
);

export default App;
