var Sequelize = require('sequelize')
var sequelize = new Sequelize(
    "c9",
    process.env.C9_USER,
    "",
    {
      host: process.env.IP,
      port: 3306
    }
);
/*
Hostname - $IP (The same local IP as the application you run on Cloud9)
Port - 3306 (The default MySQL port number)
User - $C9_USER (Your Cloud9 user name)
Password - "" (No password since you can only access the DB from within the workspace)
Database - c9 (The database username)
*/

global.db = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    User: sequelize.import(__dirname + '/user'),
    Tsuka_Daily: sequelize.import(__dirname + '/tsuka_daily'),
    KyoshiMessage: sequelize.import(__dirname + '/kyoshi_message')
}

module.exports = global.db;
