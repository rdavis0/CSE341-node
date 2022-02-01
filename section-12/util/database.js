const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
    MongoClient.connect('mongodb+srv://rdavis:mvxezSmZb1wSWUR1@cluster0.pbeyn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
        .then(client => {
            console.log('Connected to MongoDB');
            _db = client.db();
            callback(client);
        }).catch(err => {
            console.log(err);
            throw err;
        });
};

const getDb = () => {
    if (_db) {
        return _db;
    }
    throw 'Error: No database found';
}
exports.mongoConnect = mongoConnect;
exports.getDb = getDb;