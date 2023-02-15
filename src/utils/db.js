const mongoose = require('mongoose');

const initDB = () => {
  mongoose.set('strictQuery', true);
  mongoose
    .connect('mongodb://localhost:27017', {
      dbName: 'medium-clone',
      authMechanism: 'DEFAULT',
      auth: {
        username: 'arif',
        password: '0961',
      },
    })
    .then(() => {
      console.log('Mongo conencted');
    })
    .catch((err) => {
      throw err;
    });
};

module.exports = { initDB };
