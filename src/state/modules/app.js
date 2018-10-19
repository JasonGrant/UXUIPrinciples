export const state = {
  currentAppVersion: "0.1.0",
  currentSkeletonVersion: "1.0.0",
  supportEmail: "jason@uxuiprinciples.com",
  team: [
    {
      name: "Engineering",
      individuals: "Jason Grant"
    },
    {
      name: "Design",
      individuals: "Jason Grant"
    },
    {
      name: "Special Thanks",
      individuals: ""
    }
  ],
  releaseNotes: [
    {
      releaseNumber: "0.1.0",
      releaseDate: "October 19, 2018",
      notes: [
        {
          type: "New Features",
          notes: [
            {
              name: "Proof of Concept Launched",
              details:
                "This is the beginning of a large project to bring together UX Principles, UI Principles and Checklists to assist designers and developers. There will be more releases coming that will expand on this."
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
