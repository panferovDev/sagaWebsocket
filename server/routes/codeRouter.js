const router = require('express').Router();
const { User, Code } = require('../db/models');

router.route('/')
  .get(async (req, res) => {
    const codes = req.session.user ? await Code.findAll({
      include: User,
    }) : [];
    res.json(codes);
  })
  .post(async (req, res) => {
    const code = await Code.create({ code: '', user_id: req.session.user.id });
    res.json(code);
  });

router.route('/:id')
  .get(async (req, res) => {
    if (!isNaN(Number(req.params.id))) {
      const code = await Code.findOne({ where: { id: req.params.id } });
      return res.json(code);
    }
    return res.sendStatus(500);
  })
  .patch(async (req, res) => {
    console.log(req.body);
    try {
      await Code.update({
        code: req.body.code.code,
      }, {
        where: {
          id: req.body.code.id,
        },
      });
      return res.sendStatus(200);
    } catch (err) {
      return res.sendStatus(500);
    }
  });

module.exports = router;
