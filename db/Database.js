const mongoose = require("mongoose");

const connectDatabase = () => {
  if (process.env.DB_URL)
    mongoose.connect(process.env.DB_URL, {}).then((data) => {
      console.log(`mongod connected with server: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;
