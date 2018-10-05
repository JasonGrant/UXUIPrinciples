export const state = {
  currentAppVersion: "0.0.0",
  currentSkeletonVersion: "1.0.0",
  supportEmail: "support@global.com",
  team: [
    {
      name: "Engineering",
      individuals: "First Last, First Last"
    },
    {
      name: "Design",
      individuals: "First Last"
    },
    {
      name: "Executive Sponsor(s)",
      individuals: "First Last"
    },
    {
      name: "Business",
      individuals: "First Last, First Last"
    },
    {
      name: "Special Thanks",
      individuals: "First Last, First Last"
    }
  ],
  releaseNotes: [
    {
      releaseNumber: "1.0.0",
      releaseDate: "September 26, 2018",
      notes: [
        {
          type: "New Features",
          notes: [
            {
              name: "Added Release Notes",
              details:
                "You can now use release notes to inform users what has changed with each release."
            },
            {
              name: "Added About Modal",
              details:
                "To provide information on the versions of app and skeleton as well as provide the user with information on support email and credits to the creators."
            },
            {
              name: "Global Components",
              details:
                "Componentized many of the elements that make up the layout of the app and typical elements used for every application."
            },
            {
              name: "Vertical Layout",
              details:
                "Created a second layout option for left panel list navigation."
            }
          ]
        },
        {
          type: "Enhancements",
          notes: [
            {
              name: "Stylus for Global CSS",
              details: "Moved App.vue global css to assets/stylus."
            },
            {
              name: "Mixins for Global Layout Functions",
              details:
                "Utilizing mixins to reduce duplication of functions in views."
            },
            {
              name: "Vue CLI3",
              details:
                "Included all of the latest recommendations for Vue CLI3. Some of these include plugins for Vuetify, Axios and other packages."
            }
          ]
        },
        {
          type: "Bug Fixes",
          notes: [
            {
              name: "Styling issues with Vuetify",
              details:
                "App Name/Logo and stacked button styling issues from Vuetify upgrade were resolved. Added classes so this should not happen again."
            }
          ]
        },
        {
          type: "Known Issues",
          notes: [
            {
              name: "Babel Warning",
              details:
                "There is a dependency on a babel library that should be resoloved soon since babel just finished a major release. Seems to only be an issue with the PWA plugin."
            }
          ]
        }
      ]
    }
  ]
};

export const getters = {
  getCurrentAppVersion(state) {
    return state.currentAppVersion;
  },
  getCurrentSkeletonVersion(state) {
    return state.currentSkeletonVersion;
  },
  getTeam(state) {
    return state.team;
  },
  getSupportEmail(state) {
    return state.supportEmail;
  },
  getReleaseNotes(state) {
    return state.releaseNotes;
  }
};
