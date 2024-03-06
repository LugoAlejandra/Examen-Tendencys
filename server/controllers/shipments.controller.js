'use strict'

const services = require('../services/index');
const shipment_body = require('../data/shipment_body.json');

class ShipmentsController {

    async generate(req, res, next) {
        try {
            const shipment = shipment_body;
            const shipment_created = await services.envia.create(shipment);
            if(shipment_created.error) {
                req.app.io.emit('shipment_rejected');
            } else {
                req.app.io.emit('shipment_created');
            }
            res.json({ success: true, shipment: shipment_created });
        } catch (err) {
            next(err);
        }
    }
}

module.exports = new ShipmentsController();

