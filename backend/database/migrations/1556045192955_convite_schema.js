'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ConviteSchema extends Schema {
  up () {
    this.create('convites', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('convites')
  }
}

module.exports = ConviteSchema
