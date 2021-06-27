import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { actions, setNewBuildTc } from '../../../../redux/buildHistoryReducer';
import { addNewBuild } from '../../../../selectors';
import BuildForm from './buildForm/buildForm';
import s from './newBuild.module.css';

const NewBuildPopUp = () => {
  const isAddNewBuild = useSelector(addNewBuild);
  const dispatch = useDispatch();

  const closeBuildForm = () => {
    dispatch(actions.isShowBuildForm(false));
  };

  const addBuild = (value) => {
    dispatch(setNewBuildTc(value));
  };

  if (isAddNewBuild === true) {
    return <Redirect to="/details" />;
  }
  console.log(isAddNewBuild);
  return (
    <div className={s.new__build}>
      <div className={s.new__build_form}>
        <div className={s.new__build_form_container}>
          <div className={s.new__form_title}> New Build </div>
          <div className={s.new__form_description}>
            Enter the commit hash which you want to build
          </div>
          <div>
            <BuildForm closeBuildForm={closeBuildForm} addBuild={addBuild} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewBuildPopUp;
