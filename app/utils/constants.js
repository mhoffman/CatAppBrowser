/* Import Icons */

import packageJson from './package.json';

module.exports = {
  backendRoot: 'https://obscure-woodland-71302.herokuapp.com/',
  /* flaskRoot: 'http://localhost:5001', */
  flaskRoot: 'http://catapp-staging.herokuapp.com/',
  apiRoot: 'https://api.catalysis-hub.org/',
  /* apiRoot: 'http://localhost:5000', */
  /* graphQLRoot: (process.env.NODE_ENV !== 'production') ? '//localhost:5000/graphql' : '//catappdatabase.herokuapp.com/graphql', */
  graphQLRoot: '//catappdatabase.herokuapp.com/graphql',
  /* newGraphQLRoot: '//localhost:5000/graphql', */
  newGraphQLRoot: '//api.catalysis-hub.org/graphql',
  uploadGraphQLRoot: '//api.catalysis-hub.org/apps/upload/graphql',
  docRoot: 'http://docs.catalysis-hub.org',
  whiteLabel: false,
  suBranding: false,
  appBar: true,
  version: packageJson.version,
  gaTrackingId: 'UA-109061730-1',
  apps: [
    {
      title: 'Activity Maps',
      route: '/activityMaps',
      tooltip: 'Interactive activity maps.',
      children: [
        {
          title: 'CO Hydrogenation (111)',
          route: 'CO_Hydrogenation_111',
        },
        {
          title: 'NRR',
          route: 'NRR',
        },
        {
          title: 'OER',
          route: 'OER',
        },
        {
          title: 'ORR',
          route: 'ORR',
        },

      ],
    }, {
      title: 'CatLearn',
      route: '/catLearn',
      tooltip: 'Machine learning based predictions.',
    }, {
      title: 'CatKit Slab Generator',
      route: '/catKitDemo',
      tooltip: 'Build your own slab geometry.',
    }, {
      title: 'GraphQL API',
      route: '/graphQLConsole',
      tooltip: 'Programmatic access to database.',
    }, {
      title: 'Pourbaix Diagrams',
      route: '/pourbaixDiagrams',
      tooltip: 'Interactive electrochemical phase diagrams.',
    }, {
      title: 'Profiles',
      route: '/profile',
      tooltip: 'Contributions by indidual (co-)authors.',
    }, {
      title: 'Prototype Search',
      route: '/prototypeSearch',
      tooltip: 'Search for structures using Wyckoff points.',
    }, {
      title: 'Publications',
      route: '/publications',
      tooltip: 'Calculated structures sorted by publications.',
    }, {
      title: 'Surface Reactions',
      tooltip: 'Explore calculated reaction energetics.',
      route: '/energies',
    }, {
      title: 'Scaling Relations',
      route: '/scalingRelations',
      tooltip: 'App for exploring scaling relations.',
    }, {
      title: 'Upload Datasets',
      route: '/upload',
      tooltip: 'Contribute reaction energy calculations.',
    }, {
      title: 'Wyckoff Bulk Generator',
      route: '/bulkGenerator',
      tooltip: 'Construct arbitrary bulk lattices.',
    }, {
      title: 'Your Next App ...',
      route: '/yourNextApp',
      tooltip: 'How to write your own apps.',
    },
  ],
  people: {
    'Thomas Bligaard': ['Senior Staff Scientist, SUNCAT, SLAC National Accelerator Laboratory.',
      'http://suncat.stanford.edu/pi/thomas-bligaard'],
    'Michal Bajdich': ['Staff Scientist, SUNCAT, SLAC National Accelerator Laboratory.',
      'http://suncat.stanford.edu/people/michal-bajdich'],
    'Frank Abild Pedersen': ['Senior Staff Scientist, SUNCAT Co-Director, SLAC National Accelerator Laboratory.',
      'http://suncat.stanford.edu/pi/frank-abild-pedersen'],
    'Kirsten Winther': ['Postdoc, SUNCAT, SLAC National Accelerator Laboratory.',
      'http://suncat.stanford.edu/people/kirsten-winther'],
    'Osman Mamun': ['Postdoc, SUNCAT, SLAC National Accelerator Laboratory.',
      'http://suncat.stanford.edu/people/osman-mamun'],
  },
  contributors: {
    'Max Hoffmann': ['Software engineer at Apple, former postdoc at SUNCAT.',
      'http://suncat.stanford.edu/people/max-hoffmann'],
    'Jacob Boes': ['Former postdoc at SUNCAT.',
      'https://suncat.stanford.edu/people/jacob-russell-boes'],
    'Martin Hansen': ['Computational materials scientist, former postdoc at SUNCAT.',
      'http://suncat.stanford.edu/people/martin-hangaard-hansen'],
    'Meng Zhao': ['Computational materials scientist, former postdoc at SUNCAT.',
      'http://suncat.stanford.edu/people/meng-zhao'],
    'Philomena Schlexer': ['Former postdoc at SUNCAT.',
      'http://suncat.stanford.edu/theory/people/philomena-schlexer'],
    'Ankit Jain': ['Assistant Professor at IIT Bombay, former postdoc at SUNCAT.',
      'https://www.me.iitb.ac.in/?q=faculty/Prof.%20Ankit%20Jain'],
  },
};
