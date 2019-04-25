"use strict";
const Usuario = use("App/Models/Usuario");
const Kue = user;
const ConviteHook = (exports = module.exports = {});

ConviteHook.sendConviteEmail = async convite => {
  const { email } = convite;
  const convited = await Usuario.findBy("email", email);

  if (convited) {
    await convited.empresas().attach(convite.empresa_id);
  } else {
    const usuario = await convite.usuario().fetch();
    const empresa = await convite.empresa().fetch();
  }
};
