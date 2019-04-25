"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Convite extends Model {
  static boot() {
    super.boot();
    this.addHook("afterCreate", "ConviteHook.sendConviteEmail");
  }
  usuarios() {
    return this.belongsTo("App/Models/Usuario");
  }
  empresas() {
    return this.belongsTo("App/Models/Empresa");
  }
}

module.exports = Convite;
