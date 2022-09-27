
const joinNames = array => {
  return array.reduce((acc, curr, index) => {
        if(index !== array.length -1) {
            return acc + `, ${curr}`
        } else {
            return acc + ` & ${curr}`
        }
    })
};

module.exports = joinNames;
