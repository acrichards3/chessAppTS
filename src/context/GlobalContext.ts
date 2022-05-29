import React, { Dispatch } from 'react';

export const ACTIONS = {
  ACTIVE_LINK_TRUE: 'ACTIVE_LINK_TRUE',
  ACTIVE_LINK_FALSE: 'ACTIVE_LINK_FALSE',
};

export const initialState = {
  activeLink: false,
};

interface State {
  activeLink: boolean;
}

export const reducer = (
  state: State,
  action: { type: keyof typeof ACTIONS }
) => {
  switch (action.type) {
    // NAVBAR
    case ACTIONS.ACTIVE_LINK_TRUE:
      return { ...state, activeLink: true };
    case ACTIONS.ACTIVE_LINK_FALSE:
      return { ...state, activeLink: false };

    default:
      return state;
  }
};

export const GlobalContext = React.createContext<{ state: State, dispatch: Dispatch<any> }>({ state: initialState, dispatch: () => {} });