export const getIsLoggedIn = state => !!state.auth.isLoggedIn;

export const getUserName = state => {
  return state.auth.user.name;
};

export const getFormValue = state => state.auth.user;
