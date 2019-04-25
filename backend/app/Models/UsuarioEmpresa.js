"use strict";

const Model = use("Model");

class UsuarioEmpresa extends Model {
  usuarios() {
    return this.belongsTo("App/Models/Usuario");
  }
}

module.exports = UsuarioEmpresa;
