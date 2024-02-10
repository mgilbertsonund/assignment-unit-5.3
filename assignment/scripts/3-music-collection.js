console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection = [];

function addToCollection(collection, title, artist, yearPublished) {
  const newMusicInfo = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  }; 
  collection.push(newMusicInfo);
  return newMusicInfo;
}

function showCollection(collection) {
  for(let music of collection) {
    console.log(music.title + ' by ' + music.artist + ', published in ' + music.yearPublished);
  }
}

addToCollection(myCollection, "Slippery When Wet", "Bon Jovi", 1986);
addToCollection(myCollection, "Take Care", "Drake", 2011);
addToCollection(myCollection, "The Band CAMINO", "The Band Camino", 2021);
addToCollection(myCollection, "Traveller", "Chris Stapleton", 2015);
addToCollection(myCollection, "ASTROWORLD", "Travis Scott", 2018);
addToCollection(myCollection, "X", "Ed Sheeren", 2014);
console.log(myCollection);

showCollection(myCollection);






// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
