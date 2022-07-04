const Event = require("../Models/Event");
const jwt = require("../utils/jwt");

const decode = async (req, res) => {
  let token = req.headers.authorization;
  if (token && token.startsWith("Bearer ")) {
    token = token.slice(7, token.length);
  }

  if (!token) {
    return res.json({ error: "Authorization must be provided" });
  }

  const decoded = jwt.verifyToken(token);

  return decoded.id;
};

exports.getUserEvent = async (req, res) => {
  const id = await decode(req, res);
  const userEvent = await Event.findAll({
    where: {
      userId: id,
    },
  });

  res.json(userEvent);
};

exports.create = async (req, res) => {
  const id = await decode(req, res);
  if (id) {
    const createEvent = await Event.create({
      title: req.body.title,
      date: req.body.date,
      description: req.body.description,
      st: req.body.st,
      et: req.body.et,
      userId: id,
    });
    return res.json(createEvent);
  } else {
    return res.json({ error: "Cant post" });
  }
};

exports.deleteEvent = async (req, res) => {
  const userId = await decode(req, res);
  const id = Number(req.params.id);
  const userEvent = await Event.destroy({
    where: {
      id: id,
      userId: userId,
    },
  });

  res.json(userEvent);
};

exports.editEvent = async (req, res) => {
  const id = Number(req.body.id);
  const userEvent = await Event.update(
    {
      title: req.body.title,
      description: req.body.description,
      st: req.body.st,
      et: req.body.et,
    },
    {
      where: {
        id: id,
      },
    }
  );

  res.json({ userEvent });
};
