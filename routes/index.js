const { Router } = require('express');

const contactRoutes = require('./contact.routes');

const router = new Router();

router.use(contactRoutes.url, contactRoutes.router);

module.exports = router;