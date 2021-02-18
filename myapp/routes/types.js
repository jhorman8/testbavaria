'use strict';

let dbcontroller =  require('../controller/dbcontroller')

let express = require('express');
let router = express.Router();
let CONSTANTS =  require("../constants/constants")

router.post('/insertTypes', async function(req, res, next) {
  let data = req.body
  console.log(data);
  let insert = await dbcontroller.insertQuery(data.name,CONSTANTS.INSERTTYPES);
  res.status(200).send({IdRegistro:insert})

});


router.get('/selectTypes', async function(req, res, next) {
  let data = req.query.id
  console.log(data);

  if(data == '*')
  {
    let select = await dbcontroller.selectQuery(data,CONSTANTS.SELECTTYPES); //List total
    res.status(200).send(select)

  }
  else{
    let selectById = await dbcontroller.selectQuery(data,CONSTANTS.TYPESBYID); //List by id
    res.status(200).send(selectById)

  }

});


router.post('/updateTypes', async function(req, res, next) {
  let data = [req.body.name, req.body.id]
  console.log(data);
  let update = await dbcontroller.updateQuery(data,CONSTANTS.UPDATETYPES);
  res.status(200).send({message:"successful"})

});

module.exports = router;
