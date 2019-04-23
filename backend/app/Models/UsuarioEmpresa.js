'use strict'

const Model = use('Model')

class UsuarioEmpresa extends Model {
  usuario () {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = UsuarioEmpresa
