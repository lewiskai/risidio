// this file is temporary until we don't have fetched data
import newCall from '../../assets/newCall.svg';
import speaker from '../../assets/speaker.svg';
import hold from '../../assets/Hold.svg';
import mute from '../../assets/mute.svg';
import { Button } from '../types/CallButton';

export const titleArray = [
  'Hi {Username}',
  'Your Profile',
  'Tools',
  'Screenwriter building',
];

 export const textArray = [
  'My name is Alex, and I’m here to help you with your journey in The People’s Republic Of Movies. Let’s create the future of movies together.',
  `You will find your profile here, you can edit your information and keep track of your level. 
  You earn experience every time you take action to grow PROM, and when you have enough experience,
   you gain a level and rewards to thank you for your contribution.`,
  'Here you’ll find useful tools at your disposal to travel faster, contact partners or look at your work!',
  'In this first version, PROM focuses on tools to help screenwriters. When you are ready, you can click on the building to enter inside. '
];
export const collaboratorsArray = [
  {
    userName: 'Peter',
    roles: ['Investor'],
    status: 'online'
  },
  {
    userName: 'Celine',
    roles: ['Movie director'],
    status: 'online'
  },
  {
    userName: 'Nataliia',
    roles: ['Screenwriter'],
    status: 'absent'
  },
  {
    userName: 'Preye',
    roles: ['Actor'],
    status: 'offline'
  },
  {
    userName: 'David',
    roles: ['Screenwriter'],
    status: 'offline'
  },
  {
    userName: 'Zanjeel',
    roles: ['Screenwriter'],
    status: 'offline'
  },
  {
    userName: 'Olaide',
    roles: ['Screenwriter'],
    status: 'offline'
  },
  {
    userName: 'User7',
    roles: ['Screenwriter'],
    status: 'offline'
  },
  {
    userName: 'User8',
    role: ['Screenwriter'],
    status: 'offline'
  },
  {
    userName: 'User9',
    role: ['Screenwriter'],
    status: 'offline'
  },
  {
    userName: 'User10',
    role: ['Screenwriter'],
    status: 'offline'
  },
]


export const users = [
  {
    userName: 'Alice',
    roles: ['Movie director'],
    status: 'online'
  },
  {
    userName: 'Bob',
    roles: ['Movie director'],
    status: 'online'
  },
  {
    userName: 'Eva',
    roles: ['Movie director'],
    status: 'absent'
  },
  {
    userName: 'Michael',
    roles: ['Movie director'],
    status: 'offline'
  },
  {
    userName: 'Sophie',
    roles: ['Movie director'],
    status: 'offline'
  },
  {
    userName: 'Alex',
    roles: ['Movie director'],
    status: 'offline'
  },
  {
    userName: 'Olivia',
    roles: ['Movie director'],
    status: 'offline'
  },
  {
    userName: 'Daniel',
    roles: ['Movie director'],
    status: 'offline'
  },
  {
    userName: 'Emma',
    roles: ['Movie director'],
    status: 'offline'
  },
  {
    userName: 'Lucas',
    roles: ['Movie director'],
    status: 'offline'
  },
  {
    userName: 'Isabella',
    roles: ['Movie director'],
    status: 'offline'
  }
];

export const callButtons: Button[] = [
  {
    buttonName: 'Mute',
    imgPath: mute,
  },

  {
    buttonName: 'Speaker',
    imgPath: speaker,
  },
  {
    buttonName: 'Hold',
    imgPath: hold,
  },
  {
    buttonName: 'New Call',
    imgPath: newCall,
  },
];
