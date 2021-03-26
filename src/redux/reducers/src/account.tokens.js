import * as types from 'redux/actions/account.tokens';

const initialState = [
  {
    id: '000002',
    name: 'Disapproving directer',
    level: 1,
    exp: 9,
    expToUp: 12,
    class: 'Warrior',
    img: '/images/ceroes/warrior/1.svg',
    isChild: true,
    parent1: '000000',
    parent2: '000000',
    birthday: Date.now(),
  },
  {
    id: '000003',
    name: 'Disapproving directer',
    level: 1,
    exp: 12,
    expToUp: 12,
    class: 'Warrior',
    img: '/images/ceroes/warrior/2.svg',
    isChild: true,
    parent1: '000000',
    parent2: '000000',
    birthday: Date.now(),
  },
  {
    id: '000004',
    name: 'Disapproving directer',
    level: 1,
    exp: 8,
    expToUp: 12,
    class: 'Warrior',
    img: '/images/ceroes/warrior/3.svg',
    isChild: false,
    parent1: '000000',
    parent2: '000000',
    birthday: Date.now(),
  },
  {
    id: '000005',
    name: 'Disapproving directer',
    level: 1,
    exp: 2,
    expToUp: 12,
    class: 'Warrior',
    img: '/images/ceroes/warrior/4.svg',
    isChild: false,
    parent1: '000000',
    parent2: '000000',
    birthday: Date.now(),
  },
  {
    id: '000006',
    name: 'Disapproving directer',
    level: 1,
    exp: 8,
    expToUp: 12,
    class: 'Warrior',
    img: '/images/ceroes/warrior/7.svg',
    isChild: true,
    parent1: '000004',
    parent2: '000005',
    birthday: Date.now(),
  },

];

export default function index(state = initialState, action) {
  switch (action.type) {
    case types.ACCOUNT_TOK_UPDATE:
      return action.payload;
    default:
      return state;
  }
}
