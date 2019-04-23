"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Convite extends Model {
  usuario() {
    return this.belongsTo("App/Models/User");
  }
  empresa() {
    return this.belongsTo("App/Models/Empresa");
  }
}

module.exports = Convite;
