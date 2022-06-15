export const NAV_ACTIONS = {
  ACTIVE_LINK_TRUE: 'ACTIVE_LINK_TRUE',
  ACTIVE_LINK_FALSE: 'ACTIVE_LINK_FALSE',
};

export const initialNavState = {
  activeLink: false,
};

export interface NavState {
  activeLink: boolean;
};

export const navReducer = (
  state: NavState = initialNavState,
  action: { type: keyof typeof NAV_ACTIONS }
) => {
  switch (action.type) {
    case NAV_ACTIONS.ACTIVE_LINK_TRUE:
      return { ...state, activeLink: true };
    case NAV_ACTIONS.ACTIVE_LINK_FALSE:
      return { ...state, activeLink: false };

    default:
      return state;
  }
};
