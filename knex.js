module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'claims_management',
      user: 'your_username',
      password: 'your_password'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};

// migrations/create_tables.js
exports.up = function(knex) {
  return knex.schema
    .createTable('policyholders', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable().unique();
    })
    .createTable('policies', (table) => {
      table.increments('id').primary();
      table.integer('policyholder_id').references('id').inTable('policyholders').notNullable();
      table.string('policy_number').notNullable().unique();
      table.decimal('coverage_amount', 14, 2).notNullable();
    })
    .createTable('claims', (table) => {
      table.increments('id').primary();
      table.integer('policy_id').references('id').inTable('policies').notNullable();
      table.text('incident_details').notNullable();
      table.decimal('claim_amount', 14, 2).notNullable();
      table.string('status').notNullable();
    })
    .createTable('notifications', (table) => {
      table.increments('id').primary();
      table.integer('user_id').notNullable();
      table.text('message').notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('notifications')
    .dropTable('claims')
    .dropTable('policies')
    .dropTable('policyholders');
};
