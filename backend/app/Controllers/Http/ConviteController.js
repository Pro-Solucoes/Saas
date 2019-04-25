"use strict";

const Convite = use("App/Models/Convite");

/**
 * Resourceful controller for interacting with convites
 */
class ConviteController {
  async store({ request, auth }) {
    console.log("dsdsd");
    const convites = request.input("convites");

    const data = convites.map(email => ({
      email,
      usuario_id: auth.user.id,
      empresa_id: request.empresa.id
    }));
    console.log(data);
    await Convite.createMany(data);
  }
}
module.exports = ConviteController;
