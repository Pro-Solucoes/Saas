"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Empresa extends Model {
  static boot() {
    super.boot();

    this.addTrait("@provider:Lucid/Slugify", {
      fields: {
        slug: "nome"
      },
      strategy: "dbIncrement",
      disableUpdates: false
    });
  }

  usuarios() {
    return this.belongsToMany("App/Models/Usuario").pivotModel(
      "App/Models/UsuarioEmpresa"
    );
  }

  projects() {
    return this.hasMany("App/Models/Project");
  }
}

module.exports = Empresa;
