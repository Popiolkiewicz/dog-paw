const animalDa = require('../data-access/animal-da.js');

exports.getFoundList = () => animalDa.getAll().filter(a => a.context === 'found');

exports.getMissingList = () => animalDa.getAll().filter(a => a.context === 'missing');

exports.reportMissing = (animal) => {
    console.log("Processing missing report for: " + JSON.stringify(animal));
    const foundAnimal = animalDa.getAll().find(a => a.name === animal.name && a.context === animal.context);
    if (foundAnimal) {
        return "Animal found!";
    } else {
        animalDa.add({ ...animal, context: 'missing'});
        return "No animal was found, your report has been submitted. ";
    }
}