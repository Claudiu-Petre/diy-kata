const getEmployerRole = (employeeName, array) => {
const founded = array.find((element) => element.name === employeeName );
return founded.role;
};


module.exports = getEmployerRole;
