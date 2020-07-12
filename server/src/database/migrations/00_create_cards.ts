import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('cards', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('description').notNullable();
    table.integer('attack').notNullable();
    table.integer('defense').notNullable();
    table.enum('types', ['Magia', 'Criatura']).notNullable();
    table.enum('class', ['Mago', 'Paladino', 'Caçador', 'Goauld']).notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('cards');
}