"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ConviteSchema extends Schema {
  up() {
    this.create("convites", table => {
      table.increments();
      table
        .integer("empresa_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("empresas")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("usuario_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("usuarios")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.string("email").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("convites");
  }
}

module.exports = ConviteSchema;
