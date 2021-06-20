const initialState = {
  buildListData: [
    {
      id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      configurationId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      buildNumber: 1368,
      commitMessage: 'add documentation for postgres scaler',
      commitHash: '9c9f0b9',
      branchName: 'master',
      authorName: 'Philip Kirkorov',
      status: 'Waiting',
      start: '2021-06-17T11:40:38.405Z',
      duration: 0,
    },
    {
      id: '3fa85f64-5717-4562-b3fc-2c963f66afa7',
      configurationId: '3fa85f64-5717-4562-b3fc-2c963f66afa7',
      buildNumber: 1367,
      commitMessage: 'add documentation for postgres',
      commitHash: '9c9f0b8',
      branchName: 'master',
      authorName: 'Vasya Kirkorov',
      status: 'Waiting',
      start: '2021-06-17T11:40:38.405Z',
      duration: 2,
    },
  ],
  confData: {
    id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    repoName: 'philip1967/my-awesome-repo',
    buildCommand: 'Run build',
    mainBranch: 'string',
    period: 0,
  },
};

const buildHistoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case '': {
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
};

export const actions = {

};

export default buildHistoryReducer;
