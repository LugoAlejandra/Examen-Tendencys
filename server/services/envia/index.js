'use strict'
const axios = require('axios');
const base_url = process.env.ENVIA_BASE_URL;

class EnviaService {

    create(shipment) {
        return new Promise(async (resolve, reject) => {
            try {
                const shipment_created = await axios.post(`${base_url}/ship/generate`, shipment, {
                    headers: {
                        'Authorization': `Bearer ${process.env.ENVIA_TOKEN}`,
                    }
                });
                resolve(shipment_created.data);
            } catch (err) {
                reject(err);
            }
        });
    }
}

module.exports = new EnviaService();