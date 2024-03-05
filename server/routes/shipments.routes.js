'use strict'

const router = require('express').Router();
const controller = require('../controllers/index');
const prefix = '/shipments';

router.post(
    `${prefix}/generate`,
    controller.shipments.generate
);

module.exports = router;