'use strict';

const nodedir = require('node-dir');
const parseRDF = require('./lib/parse-rdf.js');
const dirname = process.argv[2];

const options = {
  match: /\.rdf$/,
  excluse: ['pg0.rdf']
}

nodedir.readFiles(dirname, options, (err, content, next) => {
  if (err) { throw err; }
  const doc = parseRDF(content);
  console.log(JSON.stringify({ index: { _id: `pg${doc.id}` } }));
  console.log(JSON.stringify(doc));
  next();
});
