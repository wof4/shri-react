import React from 'react';
import { useSelector } from 'react-redux';
import {
  getHistoryContentData,
  getRepoName,
} from '../../../selectors';
import Header from '../../pagesComponents/header/header';
import HistoryContent from './historyContent';

import s from '../page.module.css';

const BuildHistoryPage = () => {
  const contentData = useSelector(getHistoryContentData);
  const repoName = useSelector(getRepoName);
  const ComandButtonText = 'Run build';
  const ComandButtonIcon = 'buildIcon';
  const settingIcon = 'settingIcon';
  return (
    <div className={s.page_wrapper}>
      <div>
        <Header
          headerText={repoName}
          ComandButtonText={ComandButtonText}
          ComandButtonIcon={ComandButtonIcon}
          settingIcon={settingIcon}
        />
        <HistoryContent contentData={contentData} />
      </div>
    </div>
  );
};

export default BuildHistoryPage;
