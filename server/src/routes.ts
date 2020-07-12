import express from 'express'
import knex from './database/connection';

const routes = express.Router()

routes.get('/', (request, response) => {
  return response.json({ message: 'Tema Application' });
});

routes.post('/cards', async (request, response) => {
  const {
    name,
    description,
    attack,
    defense,
    sort,
    group
  } = request.body;

  await knex('cards').insert({
    name,
    description,
    attack,
    defense,
    sort,
    group
  })

  return response.json({ success: true });

});

export default routes;

