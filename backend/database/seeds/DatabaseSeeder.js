"use strict";

/*
|--------------------------------------------------------------------------
| DatabaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Usuario = use("App/Models/Usuario");

class DatabaseSeeder {
  async run() {
    const usuario = await Usuario.create({
      nome: "Paulo Sergio",
      email: "pslima@uneb.br",
      password: "123456"
    });

    const empresa = await usuario.empresas().create({
      nome: "Rocketseat",
      usuario_id: usuario.id
    });
  }
}

module.exports = DatabaseSeeder;
