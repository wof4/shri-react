import React from 'react';
import Header from '../../pagesComponents/header/header';

import s from '../page.module.css';
import GetForm from './form/getForm';

const SettingPage = () => (
  <div className={s.page_wrapper}>
    <div>
      <Header headerText="School CI server" />
      <div>
        <GetForm />
      </div>
    </div>
  </div>
);

export default SettingPage;
