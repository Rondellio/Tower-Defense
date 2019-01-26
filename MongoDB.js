// JavaScript source code
var MongoClient = require('mongodb').MongoClient;
test = require('assert');
var uri = "mongodb://<username>:<password>@html-td-shard-00-00-lp7zx.gcp.mongodb.net:27017,html-td-shard-00-01-lp7zx.gcp.mongodb.net:27017,html-td-shard-00-02-lp7zx.gcp.mongodb.net:27017/fantasyTD?ssl=true&replicaSet=HTML-TD-shard-0&authSource=admin&retryWrites=true";
MongoClient.connect(uri, { useNewUrlParser: true }, function (err, client) {
    test.equal(null, err);
    var collection = client.db("fantasyTD").collection("credentials");
    // perform actions on the collection object
    collection.find().toArray(function (err, docs) {
        console.log(JSON.stringify(docs));
    });
    /*collection.insert({
        username: "George", password: "georgeRulez",
        progress: { gold: 30, stage1: true, stage2: false, stage3: false, wave: 7 }
    });
    collection.find().toArray(function (err, docs) {
        console.log(JSON.stringify(docs));
    });*/
    client.close();
});

