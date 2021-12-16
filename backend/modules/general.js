const bcrypt = require("bcryptjs");
exports.generateHashPassword = (password) => {
    const saltRounds = 10;
    var salt = bcrypt.genSaltSync(saltRounds);
    var hash = bcrypt.hashSync(password, salt);
    return hash;
 };

 exports.validatePassword = (password, hashedPassword) => {
    return bcrypt.compareSync(password, hashedPassword);
}

exports.getSecretCode =()=>{
    return "B(@{|j;$OWH7<5nI-=}B@W3J6cbrdy^-V2QzfK20K$IaHsU8/GgviIov(I2VB7<7";
}