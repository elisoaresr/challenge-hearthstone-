import express from 'express';
import knex from './database/connection';

const routes = express.Router()

routes.get('/cards', async (request, response) => {
  const cards = await knex('cards').select('*');
  
  return response.json(cards);
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

