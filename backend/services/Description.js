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
    let data = [];
    let data2 = [];
    data2 = Tags.split(',');
    for (let i=0;i<data2.length;i++){
    const rows = await db.query(
        `SELECT idImage
    FROM Tags
    WHERE Tag='${data2[i]}'`
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