const config = require("config");


const SELECTTYPES = process.env.SELECTTYPES
    ? process.env.SELECTTYPES
    : config.get("types.select");

const TYPESBYID = process.env.TYPESBYID
    ? process.env.TYPESBYID
    : config.get("types.selectId");

const INSERTTYPES = process.env.INSERTTYPES
    ? process.env.INSERTTYPES
    : config.get("types.insert");

const UPDATETYPES = process.env.UPDATETYPES
    ? process.env.UPDATETYPES
    : config.get("types.update");

const DELETETYPES = process.env.DELETETYPES
    ? process.env.DELETETYPES
    : config.get("types.delete");



const SELECTEMPLOYEES = process.env.SELECTEMPLOYEES
    ? process.env.SELECTEMPLOYEES
    : config.get("employees.select");

const EMPLOYEESYID = process.env.EMPLOYEESYID
    ? process.env.EMPLOYEESYID
    : config.get("employees.selectId");

const INSERTEMPLOYEES = process.env.INSERTEMPLOYEES
    ? process.env.INSERTEMPLOYEES
    : config.get("employees.insert");

const UPDATEEMPLOYEES = process.env.UPDATEEMPLOYEES
    ? process.env.UPDATEEMPLOYEES
    : config.get("employees.update");
const DELETEEMPLOYEES = process.env.DELETEEMPLOYEES
    ? process.env.DELETEEMPLOYEES
    : config.get("employees.delete");


const SELECTCONTRACTS = process.env.SELECTCONTRACTS
    ? process.env.SELECTCONTRACTS
    : config.get("contracts.select");

const CONTRACTSBYID = process.env.CONTRACTSBYID
    ? process.env.CONTRACTSBYID
    : config.get("contracts.selectId");

const INSERTCONTRACTS = process.env.INSERTCONTRACTS
    ? process.env.INSERTCONTRACTS
    : config.get("contracts.insert");

const UPDATECONTRACTS = process.env.UPDATECONTRACTS
    ? process.env.UPDATECONTRACTS
    : config.get("contracts.update");

const DELETECONTRACTS = process.env.DELETECONTRACTS
    ? process.env.DELETECONTRACTS
    : config.get("contracts.delete");




const SELECTCHILDRENS = process.env.SELECTCHILDRENS
    ? process.env.SELECTCHILDRENS
    : config.get("childrens.select");

const CHILDRENSBYID = process.env.CHILDRENSBYID
    ? process.env.CHILDRENSBYID
    : config.get("childrens.selectId");

const INSERTCHILDRENS = process.env.INSERTCHILDRENS
    ? process.env.INSERTCHILDRENS
    : config.get("childrens.insert");

const UPDATECHILDRENS = process.env.UPDATECHILDRENS
    ? process.env.UPDATECHILDRENS
    : config.get("childrens.update");

const DELETECHILDRENS = process.env.DELETECHILDRENS
    ? process.env.DELETECHILDRENS
    : config.get("childrens.delete");


module.exports = {
    TYPESBYID,
    SELECTTYPES,
    INSERTTYPES,
    UPDATETYPES,
    DELETETYPES,
    SELECTEMPLOYEES,
    EMPLOYEESYID,
    INSERTEMPLOYEES,
    UPDATEEMPLOYEES,
    SELECTCONTRACTS,
    CONTRACTSBYID,
    UPDATECONTRACTS,
    INSERTCONTRACTS,
    INSERTCHILDRENS,
    SELECTCHILDRENS,
    CHILDRENSBYID,
    UPDATECHILDRENS,
    DELETEEMPLOYEES,
    DELETECONTRACTS,
    DELETECHILDRENS
};

