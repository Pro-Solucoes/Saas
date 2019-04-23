"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Empresa extends Model {
  usuarios() {
    return this.belongsToMany("App/Models/User").privateModel(
      "App/Models/UsuarioEmpresa"
    );
  }
}

module.exports = Empresa;
