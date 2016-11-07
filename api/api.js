'use strict';

const MongoClient = require('mongodb').MongoClient,
  url = 'mongodb://localhost:27017/ng2-node',
  assert = require('assert');

class DB {
  constructor() {
  }

  init() {
    return new Promise(resolve => {
      MongoClient.connect(url, (err, db) => {
        assert.equal(null, err);
        console.log("Connected correctly to server");
        this.db = db;
        resolve();
      });
    })
  }

  close() {
    this.db.close();
  }

  insertDocuments(data, callback) {
    let collection = this.db.collection('documents');

    collection.insertMany(data, (err, result) => {
      assert.equal(err, null);
      assert.equal(3, result.result.n);
      assert.equal(3, result.ops.length);
      console.log("Inserted 3 documents into the collection");
    });
  }

  findDocuments(callback) {
    let collection = this.db.collection('documents');
    // Find some documents
    collection.find({})
      .toArray((err, docs) => {
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(docs);
      });
  }

  removeDocuments(callback) {
    let collection = this.db.collection('documents');

    collection.drop();
  }

}

module.exports = new DB();