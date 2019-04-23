'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsuarioEmpresaSchema extends Schema {
  up () {
    this.create('usuario_empresas', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('usuario_empresas')
  }
}

module.exports = UsuarioEmpresaSchema
