const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB');
  }
  console.log('Connection Successful');
  db.collection('Todos').deleteMany({text: 'Play'}).then((result) => {
    console.log(result);
  });
  db.close();
})
