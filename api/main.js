'use strict';
(() => {
const db = require('./api'),
  mocks = [
    {a : 1}, {a : 2}, {a : 3}
  ];

  db.init().then(() => {
    db.removeDocuments();
    db.insertDocuments(mocks);
    db.findDocuments();
    db.close();
  });

})();