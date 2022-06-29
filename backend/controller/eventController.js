const Event = require("../Models/Event");

exports.create = async (req, res) => {
  const createEvent = await Event.create({
    title: req.body.title,
    date: req.body.date,
    description: req.body.description,
    st: req.body.st,
    et: req.body.et,
    userId: req.body.userId,
  });
  return res.json(createEvent);
};

exports.getUserEvent = async (req, res) => {
  const userEvent = await Event.findAll({
    where: {
      userId: req.params.id,
    },
  });
  res.json(userEvent);
};

exports.deleteEvent = async (req, res) => {
  const id = Number(req.params.id);
  const userEvent = await Event.destroy({
    where: {
      id: id,
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
