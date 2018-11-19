export const addUserRequest = (username, coordinates) => ({
  type: 'ADD_USER_REQUEST',
  payload:{
    username,
    coordinates,
  },
});

export const addUserSuccess = (user, coordinates) => ({
  type: 'ADD_USER_SUCCESS',
  payload:{
    user,
    coordinates,
  },
});

export const addUserError = (message) => ({
  type: 'ADD_USER_ERROR',
  payload:{
    message,
  },
});

export const updateModal = (modal) => ({
  type: 'UPDATE_MODAL',
  payload:{
    modal,
  },
});
