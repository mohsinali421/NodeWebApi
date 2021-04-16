const express = require('express');
const router = express.Router();
const { getAllBootCamp,postBootCamp, putBootCamp, deleteBootCamp } = require('../controller/bootcamp');

router.route('/')
      .get(getAllBootCamp)
      .post(postBootCamp)


router.route('/:id')
      .put(putBootCamp)
      .delete(deleteBootCamp);

module.exports = router;