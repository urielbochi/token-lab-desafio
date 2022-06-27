const Event = require("../Models/Event");
const User = require("../Models/User");

exports.create = async (req, res) => {
  const createEvent = await Event.create({
    title: req.body.title,
    date: req.body.date,
    description: req.body.description,
    st: req.body.startTime,
    et: req.body.endTime,
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
  const userEvent = await Event.destroy({
    where: {
      title: req.body.title,
    },
  });

  res.json(userEvent);
};

exports.editEvent = async (req, res) => {
  const userEvent = await Event.update(
    {
      title: req.body.title,
      date: req.body.date,
      description: req.body.description,
      st: req.body.st,
      et: req.body.et,
    },
    {
      where: {
        id: req.body.id,
      },
    }
  );

  res.json(userEvent);
};
