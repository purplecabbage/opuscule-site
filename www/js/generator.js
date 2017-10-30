
// var fs = require('fs');
// var midi = require('jsmidgen');

var notes = ["C3","D3","E3","F3","G3","A3","B3","C4","D4","E4","F4","G4","A4","B4","C5"];
//var baseNote = "C4"; // present in every combo
var baseNote = 60;
var topNote = baseNote + 12;
var bottomNote = baseNote - 12;


function factorial(n) {
    for(var t = 1; n > 1; n--) {
        t *= n;
    }
    return t;
}


// num should be greater than 1
// will generate ALL eigth note combos of baseNote + (notesPerMeasure - 1) bars
function generateAllCombos(notesPerMeasure) {
    console.assert(notesPerMeasure > 1,"notesPerMeasure should be > 1.");
    console.assert(notesPerMeasure < 9,"notesPerMeasure should be 8 or less.")

    var padding = [0,0,0,0,0,0,0,0]; // 8 rests
    var otherNotes = [];
    for(var n = 0; n < notesPerMeasure-1; n++) {
        otherNotes.push(bottomNote);
    }
    console.log("otherNotes = " + otherNotes);
    padding.splice(0,notesPerMeasure);

    var count = 0;
    for(n = 0; n < notesPerMeasure-1; n++) {
        for(var note = bottomNote; note < topNote; note++) {
            otherNotes[n] = note;
            var arr = [baseNote];
            arr = arr.concat(otherNotes).concat(padding);

            arr = Permutate.first(arr);
            console.log('New set :: ' + arr);
            while(arr) {
                //writeFile(arr,notesPerMeasure);
                console.log('New set :: ' + arr);
                count++;
                arr = Permutate.next(arr);
            }
        }
    }
    console.log("generated : " + count);
}

generateAllCombos(3);


// for(var bottomNote = 48; bottomNote <= baseNote; bottomNote++) {
//     for(var topNote = baseNote; topNote < 73; topNote++) {

//         var arr = firstPermutation([0,0,0,0,bottomNote,baseNote,topNote]);
//         console.log('New set :: ' + arr);
//         while(arr) {
//             writeFile(arr);
//             arr = nextPermutation(arr);
//         }


//     }
// }

// function writeFile(arr,notesPerMeasure) {

//     var file = new midi.File();
//     var melody = new midi.Track();
//     file.addTrack(melody);
//     for(var n = 0; n < arr.length; n++)
//     {
//         melody.addNote(0,arr[n],64);
//     }
//     melody.addNote(0,0,64); // add a rest at the end

//     var fileName = arr.join("_") + ".mid";
//     fs.writeFileSync("midiFiles/" + notesPerMeasure + "/" + fileName, file.toBytes(), 'binary');
// }
