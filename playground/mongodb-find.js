const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
 if(err) {
   return console.log('Unable to connect to MongoDB server');
 }
 console.log('Connected successfully to MongoDB');

 //db.collection('Todos').find({_id:
//   new ObjectID('58e6829c37aab82f700dafee')}).count().then((count) => {
//   console.log(`Todos count: ${count}`);
   //console.log(JSON.stringify(docs, undefined, 2));
// }, (err) => {
//   console.log('Unable to fetch todos', err);
 //});

db.collection('Users').find({name: 'Vishal Desai'}).count().then((count) => {
  console.log(`No. of Users:${count} `);
}, (err) => {
  console.log('Unabe to fetch Users', err);
})

 db.close();

})
