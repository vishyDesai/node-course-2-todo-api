//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {



  if(err) {
    return console.log('Unable to connect to MongoDB');
  }
  console.log('Connection Successful');

//  db.collection('Todos').insertOne({
//     text: 'Something to Do',
//     completed: false
//  }, (err, result) => {
//    if(err) {
//      return console.log('Unable to insert collection');
//    }
//    console.log(JSON.stringify(result.ops,undefined,2));
//  });

  db.collection('Users').insertOne({
    name: 'Ankita Desai',
    age: 31,
    location: 'Mumbai'
  }, (err,result) => {
    if (err) {
      return console.log('Unable to insert document');
    }

    //console.log(JSON.stringify(result.ops, undefined, 2));
    console.log(result.ops[0]._id.getTimestamp());
  });

  db.close();
});
