"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UsuarioSchema extends Schema {
  up() {
    this.create("usuarios", table => {
      table.increments();
      table.string("nome").notNullable();
      table
        .string("email")
        .notNullable()
        .unique();
      table.string("password").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("usuarios");
  }
}

module.exports = UsuarioSchema;
