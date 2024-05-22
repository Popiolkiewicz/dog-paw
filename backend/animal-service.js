missingList = [];
foundList = [{ name: "Rufus" }, { name: "Plato" }];

find = (animal) => {
  return foundList.find(a => a.name === animal.name);
}

addMissing = (animal) => {
  missingList.push(animal);
}

exports.getFoundList = () => JSON.parse(JSON.stringify(foundList));

exports.getMissingList = () => JSON.parse(JSON.stringify(missingList));

exports.reportMissing = (animal) => {
    console.log("Processing missing report for: " + JSON.stringify(animal));
    const foundAnimal = find(animal);
    if (foundAnimal) {
        return "Animal found!";
    } else {
        addMissing(animal);
        return "No animal was found, your report has been submitted. ";
    }
}