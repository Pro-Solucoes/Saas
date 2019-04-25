"use strict";
const Mail = use("Mail");
class ConviteEmail {
  // If this getter isn't provided, it will default to 1.
  // Increase this number to increase processing concurrency.
  static get concurrency() {
    return 1;
  }

  // This is required. This is a unique key used to identify this job.
  static get key() {
    return "ConviteEmail-job";
  }

  // This is where the work is done.
  async handle({ usuario, empresa, email }) {
    await Mail.send(
      ["emails.convite"],
      {
        empresa: empresa.nome,
        usuario: usuario.nome
      },
      message => {
        message
          .to(email)
          .from("pslima@uneb.br", "Paulo | SAAS")
          .subject(`Convite para a empresa ${empresa.nome}`);
      }
    );
  }
}

module.exports = ConviteEmail;
