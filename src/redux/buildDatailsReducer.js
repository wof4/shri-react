const initialState = {
  buildDetailsData: {
    authorName: '',
    branchName: '',
    buildNumber: 0,
    commitHash: '',
    commitMessage: '',
    configurationId: '',
    id: '',
    status: '',
  },
};

const buildDatailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BUILD_DETAILS_DATA': {
      return { ...state, buildDetailsData: action.payload };
    }
    default: { return state; }
  }
};

export const actions = {
  setBuildDetailsData: (payload) => ({ type: 'BUILD_DETAILS_DATA', payload }),
};

export const setNewBuildTc = (data) => (dispatch) => {
  console.log('data', data);
  dispatch(actions.setBuildDetailsData(data));
};

export default buildDatailsReducer;
