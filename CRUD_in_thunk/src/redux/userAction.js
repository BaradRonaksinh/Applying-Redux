import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

// Action Types
export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

export const ADD_USER = 'ADD_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';

// Fetch Users
export const fetchUsers = () => async (dispatch) => {
  dispatch({ type: FETCH_USERS_REQUEST });
  try {
    const response = await axios.get(API_URL);
    dispatch({ type: FETCH_USERS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_USERS_FAILURE, payload: error.message });
  }
};

// Add User
export const addUser = (user) => async (dispatch) => {
  const response = await axios.post(API_URL, user);
  dispatch({ type: ADD_USER, payload: response.data });
};

// Update User
export const updateUser = (id, user) => async (dispatch) => {
  const response = await axios.put(`${API_URL}/${id}`, user);
  dispatch({ type: UPDATE_USER, payload: response.data });
};

// Delete User
export const deleteUser = (id) => async (dispatch) => {
  await axios.delete(`${API_URL}/${id}`);
  dispatch({ type: DELETE_USER, payload: id });
};