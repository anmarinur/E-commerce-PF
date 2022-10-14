const app = require('./src/app.js');
const { db } = require('./src/db.js');

db.sync({ force: true })
  .then(()=>{
    console.log("Database sync");
  });

app.listen(process.env.PORT, () => {
console.log(`Server listening at port ${process.env.PORT}`); // eslint-disable-line no-console
});