module.exports = {
  title: `youngk.dev`,
  description: `YoungK's Devlog`,
  language: `en`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://www.youngk.com`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: `iamyoungk/younghk-gatsby-blog`, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `Young Kim`,
    bio: {
      role: ``,
      description: [
        'passionate developer dedicated to crafting elegant solutions through clean code and continuous learning.',
        'innovative developer with a knack for problem-solving, transforming complex concepts into user-friendly applications.',
        'collaborative developer skilled in communication and teamwork, thriving in dynamic environments to drive projects forward.',
      ],
      thumbnail: 'self.gif', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/iamyoungk`, // `https://github.com/zoomKoding`,
      linkedIn: ``, // `https://www.linkedin.com/in/jinhyeok-jeong-800871192`,
      email: `younghkim0013@gmail.com`, // `zoomkoding@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '05.2023 ~ 08.2023',
        activity: 'The Psyentist Intern',
        links: {
          post: '/gatsby-starter-zoomkoding-introduction',
          github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
          demo: 'https://www.zoomkoding.com',
        },
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: 'The Legend of Zelda (NES)',
        description:
          'I meticulously recreated the iconic first dungeon of the Legend of Zelda using C# and Unity,' +
          'elevating the experience with a custom-designed level that stays true to the original while adding exciting new elements. Press 4 for the custom level.',
        techStack: ['Unity', 'C#'],
        thumbnailUrl: '',
        links: {
          demo: 'https://younghk.itch.io/the-legend-of-zelda-nes',
        },
      },
      {
        title: 'Re: Them (2D Rhythm Game)',
        description:
          'Re: Them is a captivating 2D rhythm game developed with Unity and C#. The game includes three NCS songs: Light It Up, Why We Lose, and On & On.',
        techStack: ['Unity', 'C#'],
        thumbnailUrl: '',
        links: {
          demo: 'https://younghk.itch.io/re-them',
        },
      },
      {
        title: 'B4 Last Shift',
        description:
          'A first person horror game where you escape a haunted parking lot as a parking lot security guard.',
        techStack: ['Unity', 'C#'],
        thumbnailUrl: '',
        links: {
          demo: 'https://younghk.itch.io/b4lastshift',
        },
      },
      {
        title: 'Pager (OS)',
        description: 'To be updated',
        techStack: ['C++'],
        thumbnailUrl: '',
        links: {
          demo: '',
        },
      },
      {
        title: 'File System (OS)',
        description: 'To be updated',
        techStack: ['C++'],
        thumbnailUrl: '',
        links: {
          demo: '',
        },
      },
      {
        title: 'Map Reduce (Web)',
        description: 'To be updated',
        techStack: ['Python'],
        thumbnailUrl: '',
        links: {
          demo: '',
        },
      },
      {
        title: 'Search Engine (Web)',
        description: 'To be updated',
        techStack: ['Python'],
        thumbnailUrl: '',
        links: {
          demo: '',
        },
      },
      {
        title: 'Instagram Clone',
        description: 'To be updated',
        techStack: ['Flutter', 'Dart'],
        thumbnailUrl: '',
        links: {
          demo: '',
        },
      },
      {
        title: 'Toonflix',
        description: 'To be updated',
        techStack: ['Flutter', 'Dart'],
        thumbnailUrl: '',
        links: {
          demo: '',
        },
      },
    ],
  },
};
