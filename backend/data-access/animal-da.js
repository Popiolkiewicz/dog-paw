const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'backend',
  'data',
  'animals.json'
);

exports.getAll = function() {
    return JSON.parse(fs.readFileSync(p, {encoding: 'utf8'}));
}

exports.add = function(animal) {
    const allAnimals = this.getAll();
    allAnimals.push(animal);
    fs.writeFileSync(p, JSON.stringify(allAnimals));
}