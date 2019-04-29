"use strict";
const Usuario = use("App/Models/Usuario");
const Convite = use("App/Models/Convite");
class UsuarioController {
  async store({ request, response, auth }) {
    const data = request.only(["nome", "email", "password"]);
    const empresaQuery = Convite.query().where("email", data.email);
    const empresas = await empresaQuery.pluck("empresa_id");

    if (empresas.lenht === 0) {
      return response
        .status(401)
        .send({ message: "Voce nao esta em nenhuma empresa" });
    }

    const usuario = await Usuario.create(data);
    await usuarui.empresas().attach(empresas);
    await empresaQuery.delete();

    const token = await auth.attempt(data.email, data.password);

    return token;
  }
}

module.exports = UsuarioController;
