const knex = require('knex')
const config = require('./knexfile')

const pg = knex(config.development)

// pg.select('*').from('lightsabers')
pg.select('color').from('lightsabers').where('id', 2)
  .then((data) => {
    console.log(data)
  })
  .catch((err) => {
    console.log(err)
  });
