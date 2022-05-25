const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getUser(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT *
    FROM User LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

async function getUserByNickname(user_nickname){
  const rows = await db.query(
    `SELECT *
    FROM User
    WHERE nickname='${user_nickname}'`
  );
  const data = helper.emptyOrRows(rows);

  return {
    data
  }
}

async function create(user){

  const result = await db.query(
     `INSERT INTO User 
    (nickname, PWD, Mail, Birth) 
    VALUES 
    ('${user.nickname}', '${user.PWD}', '${user.Mail}', '${user.Birth}')`
  );
  let message = 'Error in creating user';

  if (result.affectedRows) {
    message = 'User created successfully';
  }

  return {message};
}

async function update(id, user){
  const result = await db.query(
    `UPDATE User 
    SET nickname="${user.nickname}", PWD=${user.PWD}, Mail=${user.Mail}, 
    Birth='${user.Birth}'
    WHERE id='${id}'` 
  );

  let message = 'Error in updating user';

  if (result.affectedRows) {
    message = 'User updated successfully';
  }

  return {message};
}

async function remove(nickname){
  const result = await db.query(
    `DELETE FROM User WHERE nickname='${nickname}'`
  );

  let message = 'Error in deleting programming language';

  if (result.affectedRows) {
    message = 'User deleted successfully';
  }

  return {message};
}


module.exports = {
  getUser,
  getUserByNickname,
  create, 
  update,
  remove,
}