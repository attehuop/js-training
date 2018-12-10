var materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];

// test comment
function map_add_prefix(item) {
    return "atte_" + item;
}

function map_add_postfix(item) {
    return item + "_test";
}

function filter_by_original_name(item) {
    return item[0] === "H"
}

function process_data(materials) {
    return materials
            .filter(filter_by_original_name)
            .map(map_add_prefix)
            .map(map_add_postfix)
}

function process_data_alternative(materials) {
    updatedNames = [];
    materials.forEach(function(item) {
        if (item[0] === "H") {
            newName = "atte_" + item + "_test";
            updatedNames.push(newName);
        }
    });
    return updatedNames;
}

function process_data_old_fashion(materials) {
    updatedNames = [];
    for (let i=0; i<materials.length; i++) {
        item = materials[i];
        if (item[0] === "H") {
            newName = "atte_" + item + "_test";
            updatedNames.push(newName);
        }
    }
    return updatedNames;
}

console.log(process_data(materials))
console.log(process_data_alternative(materials))
console.log(process_data_old_fashion(materials))