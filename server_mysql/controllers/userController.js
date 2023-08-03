import con from "../database/db.js";
const db = con;

/** HTTP GET METHOD - get all data */
const getUsers = async (req, res) => {
  const sql = "SELECT * FROM users";
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};

/** HTTP POST METHOD - save data */
const createUser = async (req, res) => {
  const { name, email, age } = req.body;
  const sql = "INSERT INTO users(name, email, age) values (?, ?, ?)";
  db.query(sql, [name, email, age], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json({ message: "User added successfully" });
    }
  });
};

/** HTTP GET METHOD - get single data */
const getUser = async (req, res) => {
  const { id } = req.params;
  const sql = "SELECT * FROM users WHERE id = ?";
  db.query(sql, id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};

/** HTTP PUT METHOD - update selected data */
const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;
  const sql = "UPDATE users SET name = ?, email = ?, age = ? WHERE id = ?";
  db.query(sql, [name, email, age, id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.status(201).json({ message: "Updated Successfully" });
    }
  });
};

/** HTTP DELETE METHOD - delete selected data */
const deleteUser = async (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM users WHERE id = ?";
  db.query(sql, id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.status(201).json({ message: "Deleted Successfully" });
    }
  });
};

export { getUsers, getUser, createUser, updateUser, deleteUser };
