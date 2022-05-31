import React, { Dispatch } from 'react';
import { combineReducers } from 'redux';
/* prettier-ignore */ import { navReducer, NavState, NAV_ACTIONS, initialNavState, } from './reducers/navReducer';

export const ACTIONS = {
  NAV_ACTIONS,
};

export const initialState = {
  NavState: initialNavState,
};

export interface RootState {
  NavState: NavState,
}

export const rootReducer = combineReducers({
  navReducer: navReducer,
});

export const GlobalContext = React.createContext<{
  state: RootState;
  dispatch: Dispatch<any>;
}>({ state: initialState, dispatch: () => {} });
