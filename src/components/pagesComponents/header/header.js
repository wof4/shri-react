import React from 'react';
import Button from '../buttons/Button';
import s from './header.module.css';

const Header = (props) => {
  const {
    headerText, ComandButtonText, ComandButtonIcon, settingIcon,
  } = props;
  return (
    <div className={s.header}>
      <div className={s.header__description}>{headerText}</div>
      {ComandButtonText && ComandButtonIcon && settingIcon ? (
        <div className={s.heaedr__buttons}>
          <Button icon={ComandButtonIcon} text={ComandButtonText} />
          <div className={s.header__setting_item}>
            <Button icon={settingIcon} />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
