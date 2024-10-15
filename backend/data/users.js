import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('123789', 10),
    isAdmin: true,
  },
  {
    name: 'shaza samman',
    email: 'shazasa@email.com',
      password: bcrypt.hashSync('123789', 10),
        isAdmin: false,

  },
  {
    name: 'Tiziano Vera',
    email: 'tiziano@email.com',
      password: bcrypt.hashSync('123789', 10),
      isAdmin: false,

  },
];

export default users;