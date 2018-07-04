import moment from 'moment';

module.exports = {
  up: queryInterface => {
    queryInterface.bulkInsert('Users', [
      {
        name: 'Usuario 1',
        email: 'usuario1@teste.com.br',
        password:
          '$2b$10$1KgLAnHoaQ.wbtj9KP7pw.mErI1RyIxAOln1IA.orYMuq2OTAGBeC',
        createdAt: moment().format('YYYY-MM-DD hh:mm:ss Z'),
        updatedAt: moment().format('YYYY-MM-DD hh:mm:ss Z'),
      },
      {
        name: 'Usuario 2',
        email: 'usuario2@teste.com.br',
        password:
          '$$2b$10$1KgLAnHoaQ.wbtj9KP7pw.mErI1RyIxAOln1IA.orYMuq2OTAGBeC',
        createdAt: moment().format('YYYY-MM-DD hh:mm:ss Z'),
        updatedAt: moment().format('YYYY-MM-DD hh:mm:ss Z'),
      },
      {
        name: 'Usuario 3',
        email: 'usuario3@teste.com.br',
        password:
          '$2b$10$1KgLAnHoaQ.wbtj9KP7pw.mErI1RyIxAOln1IA.orYMuq2OTAGBeC',
        createdAt: moment().format('YYYY-MM-DD hh:mm:ss Z'),
        updatedAt: moment().format('YYYY-MM-DD hh:mm:ss Z'),
      },
      {
        name: 'Usuario 4',
        email: 'usuario4@teste.com.br',
        password:
          '$2b$10$1KgLAnHoaQ.wbtj9KP7pw.mErI1RyIxAOln1IA.orYMuq2OTAGBeC',
        createdAt: moment().format('YYYY-MM-DD hh:mm:ss Z'),
        updatedAt: moment().format('YYYY-MM-DD hh:mm:ss Z'),
      },
      {
        name: 'Usuario 5',
        email: 'usuario5@teste.com.br',
        password:
          '$2b$10$1KgLAnHoaQ.wbtj9KP7pw.mErI1RyIxAOln1IA.orYMuq2OTAGBeC',
        createdAt: moment().format('YYYY-MM-DD hh:mm:ss Z'),
        updatedAt: moment().format('YYYY-MM-DD hh:mm:ss Z'),
      },
    ]);
  },
  down: queryInterface => {
    queryInterface.bulkDelete('Users', null, {});
  },
};
