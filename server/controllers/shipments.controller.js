'use strict'

const services = require('../services/index');
const shipment_body = require('../data/shipment_body.json');

class ShipmentsController {

    async generate(req, res, next) {
        try {
            const shipment = shipment_body;
            const shipment_created = await services.envia.create(shipment);
            if(shipment_created) {
                //Logica para aumentar el contador de shipments en el socket
            }
            res.json({ success: true, shipment: shipment_created });
        } catch (err) {
            next(err);
        }
    }
}

module.exports = new ShipmentsController();

