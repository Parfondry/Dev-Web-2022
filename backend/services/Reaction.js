const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getReact(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT *
    FROM Reaction LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

async function create(react){

  const result = await db.query(
     `INSERT INTO Reaction 
    (idUser, idImage, React) 
    VALUES 
    ('${react.idUser}', '${react.idImage}', '${react.React}')`
  );
  let message = 'Error in creating reaction';

  if (result.affectedRows) {
    message = 'Reaction created successfully';
  }

  return {message};
}

async function update(id, react){
  const result = await db.query(
    `UPDATE Reaction 
    SET idUser="${react.idUser}", idImage='${react.idImage}', React='${react.React}'
    WHERE id=${id}` 
  );

  let message = 'Error in updating reaction';

  if (result.affectedRows) {
    message = 'Reaction updated successfully';
  }

  return {message};
}

async function remove(id){
  const result = await db.query(
    `DELETE FROM Reaction WHERE id=${id}`
  );

  let message = 'Error in deleting reaction';

  if (result.affectedRows) {
    message = 'reaction deleted successfully';
  }

  return {message};
}


module.exports = {
  getReact,
  create, 
  update,
  remove,
}