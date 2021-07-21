module.exports = {
    HOST: "192.168.193.60",
    USER: "postgres",
    PASSWORD: "1m4dm1n",
    DB: "pintar",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 100000
    }
  };