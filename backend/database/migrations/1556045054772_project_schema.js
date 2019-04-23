'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProjectSchema extends Schema {
  up () {
    this.create('projects', table => {
      table.increments()
      table.string('titulo').notNullable()
      table
        .integer('empresa_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('empresas')
      table.timestamps()
    })
  }

  down () {
    this.drop('projects')
  }
}

module.exports = ProjectSchema
