const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getDesc(page = 1){
    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await db.query(
        `SELECT * FROM Image LIMIT ${offset},${config.listPerPage}`
    );
    const data = helper.emptyOrRows(rows);
    const meta = {page};

    return {
        data,
        meta
    }
}

async function getDescByTags(Tags){
    console.log(Tags,'ok');
    const data = [];
    for (let i=0;i<Tags.length;i++){
    const rows = await db.query(
        `SELECT idImage
    FROM Tags
    WHERE Tag='${Tags}'`
    );
    data[i] = helper.emptyOrRows(rows);
    }
    return {
        data
    }

}

module.exports = {
    getDesc,
    getDescByTags,
}