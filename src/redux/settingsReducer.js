import settingConf from '../api/apiSettings';

const initialState = {
  ui: {
    isConfigError: false, // наличие ошибки при загрузке настроек
    isSettingConfig: false, // наличие настроек в store
    isSettingLoading: false, /// загрузкa настроек
    isShowLoader: false, // svg loader При загрузке контента
    isChengePage: false,
  },
  confData: {
    repoName: '',
    buildCommand: '',
    mainBranch: '',
    period: 0,
  },
};

const buildHistoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'IS_CONFIG_ERROR': {
      return { ...state, ui: { ...state.ui, isConfigError: action.payload } };
    }
    case 'IS_SETTING_CONFIG': {
      return { ...state, ui: { ...state.ui, isSettingConfig: action.payload } };
    }
    case 'SHOW_LOADER': {
      return {
        ...state, ui: { ...state.ui, isShowLoader: action.payload },
      };
    }
    case 'SET_CONF_DATA': {
      return { ...state, confData: action.payload };
    }
    case 'SETINGS_LOADDING': {
      return {
        ...state, ui: { ...state.ui, isSettingLoading: action.payload },
      };
    }
    case 'SET_CHENGE_PAGE_STATE': {
      return {
        ...state, ui: { ...state.ui, isChengePage: action.payload },
      };
    }
    default: { return state; }
  }
};

export const actions = {
  isisSettingConfig: (payload) => ({ type: 'IS_SETTING_CONFIG', payload }),
  isConfigError: (payload) => ({ type: 'IS_CONFIG_ERROR', payload }),
  showLoader: (payload) => ({ type: 'SHOW_LOADER', payload }),
  setConfData: (payload) => ({ type: 'SET_CONF_DATA', payload }),
  settingsLoading: (payload) => ({ type: 'SETINGS_LOADDING', payload }),
  setCengePageState: (payload) => ({ type: 'SET_CHENGE_PAGE_STATE', payload }),
};

export const getSettingTc = () => (dispatch) => {
  settingConf.getSettingConf()
    .then((response) => {
      if (response.statusText === 'OK') {
        console.log({ 'пришли настройки': response });
        dispatch(actions.setConfData(response.data.data));
        dispatch(actions.isisSettingConfig(true));
        dispatch(actions.showLoader(false));
        dispatch(actions.setCengePageState(true));
      } else {
        console.log('неудача загрузки настроек');
        dispatch(actions.showLoader(false));
      }
      dispatch(actions.setCengePageState(false));
    });
};

export const setSettingTc = (settings) => (dispatch) => {
  dispatch(actions.settingsLoading(true));
  return settingConf.setSettingConf(settings)
    .then((response) => {
      if (response === true) {
        console.log({ 'настройки успешно отправлены': response });
        dispatch(actions.isConfigError(false));
        dispatch(getSettingTc());
      } else {
        console.log({ 'настройки не отправлены ошибка': response });
        dispatch(actions.isConfigError(true));
      }
      dispatch(actions.settingsLoading(false));
    });
};

export const setLoadStateTc = (payload) => (dispatch) => {
  dispatch(actions.isConfigError(payload));
};

export default buildHistoryReducer;
