const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getComment(page = 1){
    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await db.query(
        `SELECT id,Comment 
    FROM Comment LIMIT ${offset},${config.listPerPage}`
    );
    const data = helper.emptyOrRows(rows);
    const meta = {page};

    return {
        data,
        meta
    }
}

async function create(Comment){

    const result = await db.query(
        `INSERT INTO Comment 
    (idUser, idImage, Comment) 
    VALUES 
    ('${Comment.idUser}', '${Comment.idImage}', '${Comment.Comment}')`
    );
    let message = 'Error in creating Comment';

    if (result.affectedRows) {
        message = 'Comment created successfully';
    }

    return {message};
}

/*async function update(id, programmingLanguage){
  const result = await db.query(
    `UPDATE Comment
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
        `DELETE FROM Comment WHERE id=${id}`
    );

    let message = 'Error in deleting Comment';

    if (result.affectedRows) {
        message = 'Comment deleted successfully';
    }

    return {message};
}


module.exports = {
    getComment,
    create,
    //update,
    remove,
}