/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import s from './form.module.css';
import cancel from '../../../../icons/cancel.png';
import star from '../../../../icons/star.png';

const GetForm = () => {
  const validationSchema = yup.object().shape({
    repository: yup
      .string()
      .typeError('Должно быть строкой')
      .required('Поле обязательно для заполнения'),
    command: yup
      .string()
      .typeError('Должно быть строкой')
      .required('Поле обязательно для заполнения'),
    branch: yup.string().typeError('Должно быть строкой'),
  });

  return (
    <div>
      <Formik
        initialValues={{
          repository: '',
          command: '',
          branch: 'master |',
          time: 0,
        }}
        onSubmit={() => {

        }}
        validationSchema={validationSchema}
        validateOnBlur
      >
        {({
          values,
          errors,
          touched,
          isValid,
          dirty,
          handleChange,
          handleBlur,
          setFieldValue,

        }) => (
          <Form>
            <div className={s.form_container}>
              <div className={s.form__title}>Settings</div>
              <div className={s.form__desc}>
                Configure repository connection and synchronization settings.
              </div>
              <div className={s.form__inputs}>
                <div className={s.input_container}>
                  {values.repository !== '' ? (
                    <img
                      onClick={() => {
                        setFieldValue('repository', '');
                      }}
                      className={s.form__icon}
                      src={cancel}
                      alt="icon"
                      role="presentation"
                    />

                  ) : null}
                  <div className={s.form__input_title}>
                    <div>GitHub repository</div>
                    <span className={s.form__star_icon}>
                      <img src={star} alt="star" />
                    </span>
                  </div>
                  <label className={s.form__price_input} htmlFor="repository">
                    <Field
                      name="repository"
                      type="text"
                      placeholder="user-name/repo-name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.repository}
                      className={
errors.repository && touched.repository
  ? s.form_input_error
  : s.form_input
}
                    />
                    {touched.repository && errors.repository && (
                    <div className={s.error}>{errors.repository}</div>
                    )}
                  </label>
                </div>
                <div className={s.input_container}>
                  {values.command !== '' ? (
                    <img
                      onClick={() => {
                        setFieldValue('command', '');
                      }}
                      className={s.form__icon}
                      src={cancel}
                      alt="icon"
                      role="presentation"
                    />
                  ) : null}
                  <div className={s.form__input_title}>
                    <div>Build command</div>
                    <span className={s.form__star_icon}>
                      <img src={star} alt="star" />
                    </span>
                  </div>
                  <label className={s.form__price_input} htmlFor="command">
                    <Field
                      name="command"
                      type="text"
                      placeholder="npm ci && npm run build"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.command}
                      className={
errors.command && touched.command
  ? s.form_input_error
  : s.form_input
}
                    />
                    {touched.command && errors.command && (
                    <div className={s.error}>{errors.command}</div>
                    )}
                  </label>
                </div>
                <div className={s.input_container}>
                  {values.branch !== '' ? (
                    <img
                      onClick={() => {
                        setFieldValue('branch', '');
                      }}
                      className={s.form__icon}
                      src={cancel}
                      alt="icon"
                      role="presentation"
                    />
                  ) : null}
                  <div className={s.form__input_title}>Main branch</div>
                  <label className={s.form__price_input} htmlFor="branch">
                    <Field
                      name="branch"
                      type="text"
                      placeholder="master |"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.branch}
                      className={
errors.branch && touched.branch
  ? s.form_input_error
  : s.form_input
}
                    />
                    {touched.branch && errors.branch && (
                    <div className={s.error}>{errors.branch}</div>
                    )}
                  </label>
                </div>

                <div className={s.input_container_time}>
                  <div className={s.form__input_title}>
                    <div>Synchronize every</div>
                  </div>
                  <label className={s.form__time_label} htmlFor="time">
                    <Field
                      name="time"
                      type="text"
                      placeholder="time"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.time}
                      className={
errors.time && touched.time
  ? s.form_input_error
  : s.form_input
}
                    />
                    {touched.time && errors.time && (
                    <div className={s.error}>{errors.time}</div>
                    )}
                  </label>
                  <div className={s.form__input_title}>minutes</div>
                </div>
              </div>
              <div className={s.form__buttons}>
                <div
                  onClick={
isValid && dirty
  ? () => {
    /* eslint-disable no-debugger, no-console */
    console.log(values);
  }
  : null
}
                  className={
!isValid || !dirty ? s.form__button : s.form__button_save
}
                  role="presentation"
                >
                  Save
                </div>
                <div className={s.form__button_cansel}>Cansel</div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default GetForm;
