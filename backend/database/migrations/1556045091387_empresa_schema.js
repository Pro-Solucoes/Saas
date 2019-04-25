"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class EmpresaSchema extends Schema {
  up() {
    this.create("empresas", table => {
      table.increments();
      table.string("nome").notNullable();
      table
        .integer("usuario_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("usuarios")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .string("slug")
        .notNullable()
        .unique();
      table.timestamps();
    });
  }

  down() {
    this.drop("empresas");
  }
}

module.exports = EmpresaSchema;
