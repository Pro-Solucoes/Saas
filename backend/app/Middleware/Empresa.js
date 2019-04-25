"use strict";
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class Empresa {
  async handle({ request, response, auth }, next) {
    const slug = request.header("EMPRESA");
    let empresa = null;
    if (slug) {
      empresa = await auth.user
        .empresas()
        .where("slug", slug)
        .first();
    }
    if (!empresa) {
      return response.status(401).send();
    }
    auth.user.currentEmpresa = empresa.id;
    request.empresa = empresa;
    await next();
  }
}

module.exports = Empresa;
