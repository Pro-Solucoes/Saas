"use strict";
const Usuario = use("App/Models/Usuario");
const Kue = use("Kue");
const Job = use("App/Jobs/ConviteEmail");
const ConviteHook = (exports = module.exports = {});

ConviteHook.sendConviteEmail = async convite => {
  const { email } = convite;
  const convited = await Usuario.findBy("email", email);

  if (convited) {
    await convited.empresas().attach(convite.empresa_id);
  } else {
    const usuario = await convite.usuario().fetch();
    const empresa = await convite.empresa().fetch();

    Kue.dispatch(Job.key, { usuario, empresa, email }, { attempts: 3 });
  }
};
