'use strict';

let dbcontroller =  require('../controller/dbcontroller')

let express = require('express');
let router = express.Router();
let CONSTANTS =  require("../constants/constants")

router.post('/insertEmployees', async function(req, res, next) {
  let data = [req.body.name, req.body.phone, req.body.address, req.body.types_id];
  console.log(data);
  let insert = await dbcontroller.insertQuery(data,CONSTANTS.INSERTEMPLOYEES);
  res.status(200).send({IdRegistro:insert})

});


router.get('/selectEmployees', async function(req, res, next) {
  let data = req.query.id
  console.log(data);

  if(data == '*')
  {
    let select = await dbcontroller.selectQuery(data,CONSTANTS.SELECTEMPLOYEES); //List total
    res.status(200).send(select)

  }
  else{
    let selectById = await dbcontroller.selectQuery(data,CONSTANTS.EMPLOYEESYID); //List by id
    res.status(200).send(selectById)

  }

});


router.post('/updateEmployees', async function(req, res, next) {
  let data = [req.body.name, req.body.phone, req.body.address, req.body.types_id, req.body.id];
  console.log(data);
  let update = await dbcontroller.updateQuery(data,CONSTANTS.UPDATEEMPLOYEES);
  res.status(200).send({message:"successful"})

});


router.delete('/delete', async function (req, res, next) {
  let data = req.query.id
  console.log(data);
  let selectById = await dbcontroller.selectQuery(data, CONSTANTS.EMPLOYEESYID); //List by id
  if (selectById != null && selectById != false) {
    let eliminar = await dbcontroller.deleteQuery(data, CONSTANTS.DELETEEMPLOYEES);
    res.status(200).send({ message: "successful" })

  }
  else{

    res.status(500).send({ message: "error" })

  }
  

});

module.exports = router;
