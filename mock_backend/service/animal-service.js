const animalDa = require('../data-access/animal-da.js');

exports.getAll = () => animalDa.getAll();

exports.getFoundList = () => animalDa.getAll().filter(a => a.context === 'found');

exports.getMissingList = () => animalDa.getAll().filter(a => a.context === 'missing');

exports.reportMissing = (animal) => {
    console.log("Processing missing report for: " + JSON.stringify(animal));
    const foundAnimal = animalDa.getAll().find(a => a.name === animal.name);
    if (foundAnimal) {
        if (foundAnimal.context === 'found') {
          return "Animal found!";
        } else if (foundAnimal.context === 'missing') {
          return "No animal was found, but you reported your missing animal already.";
        }
    } else {
        animalDa.add({ ...animal, context: 'missing'});
        return "No animal was found, your report has been submitted. ";
    }
}