'use strict'

const router = require('express').Router();
const controller = require('../controllers/shipments.controller');
const prefix = '/shipments';

router.post(
    `${prefix}/generate`,
    controller.generate
);

module.exports = router;