import React from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../../../redux/buildHistoryReducer';
import Button from '../buttons/Button';
import s from './header.module.css';

const Header = (props) => {
  const {
    headerText, ComandButtonText, ComandButtonIcon, settingIcon,
  } = props;
  const dispatch = useDispatch();

  const handleClick = (value) => {
    if (value === 'buildIcon') {
      dispatch(actions.isShowBuildForm(true));
    }
  };

  return (
    <div className={s.header}>
      <div className={s.header__description}>{headerText}</div>
      {ComandButtonText && ComandButtonIcon ? (
        <div className={s.heaedr__buttons}>
          <Button icon={ComandButtonIcon} text={ComandButtonText} handleClick={handleClick} />
          <div className={s.header__setting_item}>
            <Button icon={settingIcon} handleClick={handleClick} />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
