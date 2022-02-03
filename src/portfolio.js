const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Tue An',
  role: 'Full-stack Developer',
  description:
    "My name is An Nam Hoang Tri Tue and I am a software developer. I have worked with several front-end and back-end technologies. Currently my skillset has me focus on front-end development, but I'm ready to tackle any challenge.",
  resume: '',
  social: {
    linkedin: 'https://www.linkedin.com/in/tue-an/',
    github: 'https://github.com/antritue',
  },
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Enzyme',
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'johnsmith@mail.com',
};

export { about, projects, skills, contact };
