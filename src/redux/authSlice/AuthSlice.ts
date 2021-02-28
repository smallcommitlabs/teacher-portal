import { createSlice } from '@reduxjs/toolkit';
import { completeSignupReducers } from './thunks/completeSignupThunk';
import { hydrateAuthReducers } from './thunks/hydrateThunk';
import { loginThunkReducers } from './thunks/loginThunk';
import { logoutThunkReducers } from './thunks/logoutThunk';

const stateSlice = createSlice({
  name: 'state',
  initialState: {
    isAuthenticated: false,
    mustCompleteSignup: false,
    isHydrated: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    hydrateAuthReducers(builder);
    loginThunkReducers(builder);
    logoutThunkReducers(builder);
    completeSignupReducers(builder);
  },
});

const { reducer } = stateSlice;

export default reducer;
