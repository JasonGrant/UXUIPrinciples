export const state = {
  heuristic_ratings: [
    {
      id: 1,
      name: "Good",
      description: "Meets or Exceeds the question"
    },
    {
      id: 2,
      name: "Cosmetic Fixes Only",
      description: "Text or small style changes would help"
    },
    {
      id: 3,
      name: "Minor Issue",
      description: "Unpleasant, but still usable"
    },
    {
      id: 4,
      name: "Major Issue",
      description: "Impedes or Blocks progress or usability"
    },
    {
      id: 5,
      name: "Show Stopper",
      description: "Changes required to function as expected"
    },
    {
      id: 6,
      name: "N/A",
      description: "Question not relevant to this system"
    }
  ],
  heuristic_questions: [
    {
      id: 1,
      title: "Useful",
      description:
        "The system needs to address the needs and goals of the users through supporting, extending, supplementing, and/or enhancing the user’s skills, background knowledge, and expertise.",
      questions: [
        {
          number: 1.1,
          question:
            "Does the user understand the goal of the system without the need for training?"
        },
        {
          number: 1.2,
          question:
            "Do features and functionality support users desired workflow?"
        },
        {
          number: 1.3,
          question:
            "Are frequently used tasks readily available and support rapid success/completion?"
        },
        {
          number: 1.4,
          question:
            "Have complex processes been broken down into multiple steps?"
        },
        {
          number: 1.5,
          question:
            "Are there uneccessary steps in the user flow that could be reduced?"
        },
        {
          number: 1.6,
          question:
            "Are the correct interface elements used to achieve the goals in the most effective way?"
        },
        {
          number: 1.7,
          question:
            "Are defaults changed based on role or can user's customize defaults?"
        },
        {
          number: 1.8,
          question:
            "If a business goal, Does the system support and look correct on multiple devices?"
        }
      ]
    },
    {
      id: 2,
      title: "Usable",
      description:
        "Usability is the measure of a product's potential to accomplish the goals of the user. Iteration between development and testing is required to measure usability.",
      questions: [
        {
          number: 2.1,
          question:
            "Has unnecessary functionality, process steps and visual clutter been avoided?"
        },
        {
          number: 2.2,
          question:
            "Are standardized terms used to describe interactions and instructions?"
        },
        {
          number: 2.3,
          question: "Does the system behave in a predictable way?"
        },
        {
          number: 2.4,
          question:
            "Is the current location clearly identified? (e.g. highlight nav, breadcrumbs, etc.)"
        },
        {
          number: 2.5,
          question: "Have clicks and scrolling been minimized?"
        },
        {
          number: 2.6,
          question:
            "If long lists of results exist, do users have logical filters to reduce the results?"
        },
        {
          number: 2.7,
          question:
            "If relevant, a consistent, easy to find and easy to use search function is available."
        },
        {
          number: 2.8,
          question:
            "Search results are relevant, comprehensive, precise, well displayed and filterable."
        },
        {
          number: 2.9,
          question:
            "Performance (Common Tasks 2-4 seconds, Complex Tasks 8-12 seconds)"
        }
      ]
    },
    {
      id: 3,
      title: "Desirable",
      description:
        "Aesthetic design creates emotion for a product. Positive emotion makes the system more desirable.",
      questions: [
        {
          number: 3.1,
          question: "Does the system have a pleasurable and attractive design?"
        },
        {
          number: 3.2,
          question: "Are icons used and have a consistent style across system?"
        },
        {
          number: 3.3,
          question:
            "Have standard web patterns been used in the layout and placement of features?"
        },
        {
          number: 3.4,
          question: "Are elements labeled to provide users with intention?"
        },
        {
          number: 3.5,
          question:
            "Is color consistent and used sparingly to highlight key steps and interactions?"
        },
        {
          number: 3.6,
          question:
            "Are visual cues used to show selected, next step, progress, load time and other elements?"
        },
        {
          number: 3.7,
          question:
            "Has gamification been used to entice usage through usage and progression?"
        }
      ]
    },
    {
      id: 4,
      title: "Accessible",
      description:
        "One in seven people worldwide require some form of inclusive design and the result of creating an inclusive system benefits all users.",
      questions: [
        {
          number: 4.1,
          question:
            "Is there adequate contrast to read the foreground from the background?"
        },
        {
          number: 4.2,
          question:
            "Are icons used as a secondary form of implying success, warning or failure?"
        },
        {
          number: 4.3,
          question: "Is the system operable by keyboard only?"
        },
        {
          number: 4.4,
          question: "Are text alternatives used for all non-text content?"
        },
        {
          number: 4.5,
          question: "Does tabbing support the intended user flow?"
        },
        {
          number: 4.6,
          question:
            "Is the font selection, size and spacing make it easy to read?"
        },
        {
          number: 4.7,
          question:
            "Is the system viewable for color blind or high contrast users?"
        }
      ]
    },
    {
      id: 5,
      title: "Help, Feedback & Error Tolerance",
      description:
        "Even better than good error messages is a careful design which prevents a problem from occurring in the first place.",
      questions: [
        {
          number: 5.1,
          question:
            "Do users know where to find help for the system? (either in-system or outside)"
        },
        {
          number: 5.2,
          question:
            "Are errors visually highlighted and feedback provided close to point of error?"
        },
        {
          number: 5.3,
          question:
            "Is error messaging clear and use common language readable by non-technical users?"
        },
        {
          number: 5.4,
          question:
            "For complicated questions or features, is contextual help used for instruction?"
        },
        {
          number: 5.5,
          question:
            "Are irrelevant options or features removed to avoid misleading the user and causing errors?"
        },
        {
          number: 5.6,
          question:
            "Are users able to easily recover from errors without lost time or data?"
        },
        {
          number: 5.7,
          question:
            "Are required or optional fields called out (whichever is used least)?"
        }
      ]
    }
  ]
};

export const mutations = {};

export const actions = {};

export const getters = {
  getGestaltPsychology(state) {
    return state.gestalt_psychology;
  }
};
