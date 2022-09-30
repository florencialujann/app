import { v4 as uuid } from 'uuid';

export const customers = [
  {
    id: uuid(),
    precio: '$1,000.00',
    avatarUrl: '/static/images/avatars/avatar_3.png',
    createdAt: 1555016400000,
    email: 'ekaterina.tankova@devias.io',
    name: 'Ekaterina Tankova',
    phone: '304-428-3097',
    materia: 'Química', //filtro
    tipo: 'Individual', //filtro
    frecuencia: 'Semanal', //filtro
    

  },
  {
    id: uuid(),
    precio: '$1,500.00',
    avatarUrl: '/static/images/avatars/avatar_4.png',
    createdAt: 1555016400000,
    email: 'cao.yu@devias.io',
    name: 'Cao Yu',
    phone: '712-351-5711',
    materia: 'Matemática'
  },
  {
    id: uuid(),
    precio: '$1,000.00',
    avatarUrl: '/static/images/avatars/avatar_2.png',
    createdAt: 1555016400000,
    email: 'alexa.richardson@devias.io',
    name: 'Alexa Richardson',
    phone: '770-635-2682',
    materia: 'Filosofia'
  },
  {
    id: uuid(),
    precio: '$3,000.00',
    avatarUrl: '/static/images/avatars/avatar_5.png',
    createdAt: 1554930000000,
    email: 'anje.keizer@devias.io',
    name: 'Anje Keizer',
    phone: '908-691-3242',
    materia: 'Literatura'
  },
  {
    id: uuid(),
    precio: '$1,300.00',
    avatarUrl: '/static/images/avatars/avatar_6.png',
    createdAt: 1554757200000,
    email: 'clarke.gillebert@devias.io',
    name: 'Clarke Gillebert',
    phone: '972-333-4106',
    materia: 'Francés'
  },
  {
    id: uuid(),
    precio: '$1,450.00',
    avatarUrl: '/static/images/avatars/avatar_1.png',
    createdAt: 1554670800000,
    email: 'adam.denisov@devias.io',
    name: 'Adam Denisov',
    phone: '858-602-3409',
    materia: 'Inglés'
  },
  {
    id: uuid(),
    precio: '$1,850.00',
    avatarUrl: '/static/images/avatars/avatar_7.png',
    createdAt: 1554325200000,
    email: 'ava.gregoraci@devias.io',
    name: 'Ava Gregoraci',
    phone: '415-907-2647',
    materia: 'Python'
  },
  {
    id: uuid(),
    precio: '$1,200.00',
    avatarUrl: '/static/images/avatars/avatar_8.png',
    createdAt: 1523048400000,
    email: 'emilee.simchenko@devias.io',
    name: 'Emilee Simchenko',
    phone: '702-661-1654',
    materia: 'HTML'
  },
  {
    id: uuid(),
    precio: '$900.00',
    avatarUrl: '/static/images/avatars/avatar_9.png',
    createdAt: 1554702800000,
    email: 'kwak.seong.min@devias.io',
    name: 'Kwak Seong-Min',
    phone: '313-812-8947',
    materia: 'Análisis Matemático'
  },
  {
    id: uuid(),
    precio: '$1,950.00',
    avatarUrl: '/static/images/avatars/avatar_10.png',
    createdAt: 1522702800000,
    email: 'merrile.burgett@devias.io',
    name: 'Merrile Burgett',
    phone: '801-301-7894',
    materia: 'Dibujo'
  }
];
