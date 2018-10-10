// LAYOUT_DIRECTION_HORIZONTAL
// Horizontal = true
// Vertical = false

export const state = {
  config: {
    application_name: "UX UI Principles",
    application_logo_loc: "/logo/LaunchLogoGray.svg",
    application_logo_alt_text: "Application Logo",
    toolbar_height: 64,
    layout_direction_horizontal: true,
    aboutModal: false,
    mobileNav: false,
    mobileSettings: false
  },
  navigationItems: [
    // {
    //   name: "Landing",
    //   route: "/",
    //   fn: null,
    //   url: null,
    //   icon: "mdi-home-outline"
    // },
    // {
    //   name: "Colors",
    //   route: "/colors",
    //   fn: null,
    //   url: null,
    //   icon: "mdi-format-color-fill"
    // },
    // {
    //   name: "Flip Layout",
    //   route: null,
    //   fn: "flipLayout",
    //   url: null,
    //   icon: "mdi-page-layout-header"
    // },
    // {
    //   name: "Vue Docs",
    //   route: null,
    //   fn: null,
    //   url: "https://vuejs.org",
    //   icon: "mdi-file-document-box-outline"
    // }
  ],
  userMenuItems: [
    {
      name: "Logout",
      route: null,
      fn: "logoutUser",
      url: null,
      icon: "mdi-logout-variant"
    }
  ],
  appMenuItems: [
    {
      name: "About App",
      route: null,
      fn: "toggleAppAbout",
      url: null,
      icon: "mdi-information-outline"
    },
    {
      name: "Release Notes",
      route: "/releasenotes",
      fn: null,
      url: null,
      icon: "mdi-file-document-box-outline"
    }
  ],
  bottomNavItems: [
    {
      name: "Landing",
      route: "/",
      fn: null,
      url: null,
      icon: "mdi-home-outline"
    },
    {
      name: "Colors",
      route: "/colors",
      fn: null,
      url: null,
      icon: "mdi-format-color-fill"
    }
  ]
};

export const getters = {
  getConfig(state) {
    return state.config;
  },
  getNavigationItems(state) {
    return state.navigationItems;
  },
  getUserMenuItems(state) {
    return state.userMenuItems;
  },
  getAppMenuItems(state) {
    return state.appMenuItems;
  },
  getBottomNavItems(state) {
    return state.bottomNavItems;
  }
};

export const mutations = {
  TOGGLE_LAYOUT_DIRECTION: state => {
    state.config.layout_direction_horizontal = !state.config
      .layout_direction_horizontal;
  },
  TOGGLE_APP_ABOUT: state => {
    state.config.aboutModal = !state.config.aboutModal;
  },
  TOGGLE_MOBILE_NAV: state => {
    state.config.mobileNav = !state.config.mobileNav;
  },
  TOGGLE_MOBILE_SETTINGS: state => {
    state.config.mobileSettings = !state.config.mobileSettings;
  }
};

export const actions = {
  toggleLayoutDirection: ({ commit }) => {
    commit("TOGGLE_LAYOUT_DIRECTION");
  },
  toggleAppAbout: ({ commit }) => {
    commit("TOGGLE_APP_ABOUT");
  },
  toggleMobileNav: ({ commit }) => {
    commit("TOGGLE_MOBILE_NAV");
  },
  toggleMobileSettings: ({ commit }) => {
    commit("TOGGLE_MOBILE_SETTINGS");
  }
};
