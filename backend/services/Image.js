const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getImage(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT * 
    FROM Image
    JOIN User ON Image.idUser = User.id
    LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

async function create(image){

  const result = await db.query(
     `INSERT INTO Image 
    (File, idUser, Description) 
    VALUES 
    ('${image.File}', '${image.idUser}', '${image.Description}')`
  );
  let message = 'Error in creating image';

  if (result.affectedRows) {
    message = 'Image created successfully';
  }

  return {message};
}

/*async function update(id, programmingLanguage){
  const result = await db.query(
    `UPDATE Image 
    SET name="${programmingLanguage.name}", released_year=${programmingLanguage.released_year}, githut_rank=${programmingLanguage.githut_rank}, 
    pypl_rank=${programmingLanguage.pypl_rank}, tiobe_rank=${programmingLanguage.tiobe_rank} 
    WHERE id=${id}` 
  );

  let message = 'Error in updating programming language';

  if (result.affectedRows) {
    message = 'Programming language updated successfully';
  }

  return {message};
}*/

async function remove(id){
  const result = await db.query(
    `DELETE FROM Image WHERE id=${id}`
  );

  let message = 'Error in deleting image';

  if (result.affectedRows) {
    message = 'Image deleted successfully';
  }

  return {message};
}


module.exports = {
  getImage,
  create, 
  //update,
  remove,
}