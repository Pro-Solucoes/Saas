"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with empresas
 */
class EmpresaController {
  /**
   * Show a list of all empresas.
   * GET empresas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ auth }) {
    const empresa = await auth.user.empresas().fetch();
    return empresa;
  }

  /**
   * Render a form to be used for creating a new empresa.
   * GET empresas/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */

  /**
   * Create/save a new empresa.
   * POST empresas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, auth }) {
    const data = request.only("nome");
    const empresa = await auth.user.empresas().create({
      ...data,
      usuario_id: auth.user.id
    });
    return empresa;
  }

  /**
   * Display a single empresa.
   * GET empresas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, auth }) {
    const empresa = await auth.user
      .empresas()
      .where("empresa_id", params.id)
      .first();
    return empresa;
  }

  /**
   * Render a form to update an existing empresa.
   * GET empresas/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */

  /**
   * Update empresa details.
   * PUT or PATCH empresas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, auth }) {
    const data = request.only("nome");
    const empresa = await auth.user
      .empresas()
      .where("empresa_id", params.id)
      .first();

    empresa.merge(data);
    await empresa.save();
    return empresa;
  }

  /**
   * Delete a empresa with id.
   * DELETE empresas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, auth }) {
    const empresa = await auth.user
      .empresas()
      .where("empresa_id", params.id)
      .first();
    await empresa.delete();
  }
}

module.exports = EmpresaController;
