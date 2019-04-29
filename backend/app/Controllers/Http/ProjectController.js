"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with projects
 */
class ProjectController {
  async index({ request }) {
    const projetos = request.empresa.projetos().fetch();
    return projetos;
  }

  async store({ request }) {
    const data = request.only(["titulo"]);
    const projeto = request.empresa.projetos().create(data);
    return projeto;
  }

  async show({ params, request }) {
    const projeto = await request.empresa
      .projetos()
      .where("id", params.id)
      .first();

    return projeto;
  }

  async update({ params, request }) {
    const data = request.only(["titulo"]);
    const projeto = await request.empresa
      .projetos()
      .where("id", params.id)
      .first();

    projeto.merge(data);
    await projeto.save();
    return projeto;
  }

  async destroy({ params, request }) {
    const projeto = await request.empresa
      .projetos()
      .where("id", params.id)
      .first();
    await projeto.delete();
  }
}

module.exports = ProjectController;
