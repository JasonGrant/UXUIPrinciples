export const state = {
  sessionData: {
    auth_data: {
      firstname: "",
      lastname: "",
      fullName: "Jason Grant"
    }
  }
};

export const mutations = {};

export const actions = {};

export const getters = {
  getUser(state) {
    return state.sessionData.auth_data.fullName;
  }
};
