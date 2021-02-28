import Auth, { CognitoUser } from '@aws-amplify/auth';
import { ActionReducerMapBuilder, createAsyncThunk } from '@reduxjs/toolkit';
import state from '../authState';

interface completeSignupThunkInterface {
  user: CognitoUser;
  password: string;
}

export const completeSignup = createAsyncThunk<boolean, completeSignupThunkInterface>(
  'auth/completeSignup',
  async ({ user, password }): Promise<boolean> => Auth.completeNewPassword(user, password)
);

export const completeSignupReducers = (builder: ActionReducerMapBuilder<state>) => {
  builder.addCase(completeSignup.fulfilled, (state, { payload }) => {
    state.mustCompleteSignup = false;
    state.isAuthenticated = true;
  });
};
