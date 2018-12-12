/*

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

//new test comment

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
*/
//End of Villux examples
//--------------------------------------------------------------------

/*

// Task: Find a needle and display index

var haystack = ['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'];

function findNeedle(){
    return 'found the needle at position ' + haystack.indexOf('needle');
}

console.log(findNeedle(haystack))


// Task: Get the number n (n>0) to return the reversed sequence from n to 1

var number = 10

for (n = number; n >= 1; n--)

 console.log(n);
 
// Task: Create a function that displays "Equal" or "Not Equal" for any value compared to 10

var testNum = 10;

function testNotEqual(val) {
    if (val != testNum) { 
      return "Not Equal";
    }
    return "Equal";
  }
  
  console.log(testNotEqual(10)
  );


  */

// Task: A function that returns golf score depending on Par and Stroke count

 var golfScoreTerm = [
        "Hole-in-one!", 
        "Eagle", 
        "Birdie", 
        "Par", 
        "Bogey", 
        "Double Bogey", 
        "Go Home!"
    ];

 function golfScore(par, strokes) {
    if (strokes == 1) {
        return golfScoreTerm [0];
    }
    else if (strokes <= (par - 2)) {
        return golfScoreTerm [1]
    }
    else if (strokes == (par - 1)) {
        return golfScoreTerm [2]
    }
    else if (strokes == (par)) {
        return golfScoreTerm [3]
    }
    else if (strokes == (par + 1)) {
        return golfScoreTerm [4]
    }
    else if (strokes == (par +2)){
        return golfScoreTerm [5]
    }
    else if (strokes >= par +3 )
        return golfScoreTerm [6]
 }

var coursePar = 5;      // Insert ammount of strokes for hole 
var strokeCount = 4;    // Insert the Par for the course

 console.log(golfScore(coursePar, strokeCount));

