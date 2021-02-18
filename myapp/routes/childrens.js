'use strict';

let dbcontroller =  require('../controller/dbcontroller')

let express = require('express');
let router = express.Router();
let CONSTANTS =  require("../constants/constants")

router.post('/insert', async function(req, res, next) {
  let data = [req.body.name, req.body.age, req.body.employees_id];
  console.log(data);
  let insert = await dbcontroller.insertQuery(data,CONSTANTS.INSERTCHILDRENS);
  res.status(200).send({IdRegistro:insert})

});


router.get('/select', async function(req, res, next) {
  let data = req.query.id
  console.log(data);

  if(data == '*')
  {
    let select = await dbcontroller.selectQuery(data,CONSTANTS.SELECTCHILDRENS); //List total
    res.status(200).send(select)

  }
  else{
    let selectById = await dbcontroller.selectQuery(data,CONSTANTS.CHILDRENSBYID); //List by id
    res.status(200).send(selectById)

  }

});


router.post('/update', async function(req, res, next) {
  let data = [req.body.name, req.body.age, req.body.employees_id, req.body.id];
  console.log(data);
  let update = await dbcontroller.updateQuery(data,CONSTANTS.UPDATECHILDRENS);
  res.status(200).send({message:"successful"})

});

module.exports = router;
