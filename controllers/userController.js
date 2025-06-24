const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, '../data/users.json');

const getAllUsers = (req, res) => {
  const users = JSON.parse(fs.readFileSync(dataPath));
  res.json(users);
};

const createUser = (req, res) => {
  const users = JSON.parse(fs.readFileSync(dataPath));
  const newUser = { id: Date.now().toString(), ...req.body };
  users.push(newUser);
  fs.writeFileSync(dataPath, JSON.stringify(users, null, 2));
  res.status(201).json(newUser);
};

const updateUser = (req, res) => {
  const users = JSON.parse(fs.readFileSync(dataPath));
  const index = users.findIndex(u => u.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: 'User not found' });

  users[index] = { ...users[index], ...req.body };
  fs.writeFileSync(dataPath, JSON.stringify(users, null, 2));
  res.json(users[index]);
};

const deleteUser = (req, res) => {
  let users = JSON.parse(fs.readFileSync(dataPath));
  const index = users.findIndex(u => u.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: 'User not found' });

  users = users.filter(u => u.id !== req.params.id);
  fs.writeFileSync(dataPath, JSON.stringify(users, null, 2));
  res.status(204).send();
};

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser
};
