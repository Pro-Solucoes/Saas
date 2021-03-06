"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UsuarioEmpresaSchema extends Schema {
  up() {
    this.create("usuario_empresas", table => {
      table.increments();
      table
        .integer("usuario_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("usuarios")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("empresa_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("empresas")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.timestamps();
    });
  }

  down() {
    this.drop("usuario_empresas");
  }
}

module.exports = UsuarioEmpresaSchema;
