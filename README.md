# Boggle Solver

A simple REST API, with one endpoint.

POST: `\solve`
Body: `{ boardString = "abcd efgh ijkl mnop" }`


Makes use of the [node-boggle-solver](https://www.npmjs.com/package/node-boggle-solver) npm package, to return an array of valid boggle words.

Deployed to [heroku]()