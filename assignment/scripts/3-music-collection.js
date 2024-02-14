console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

// empty collection array
let myCollection = [];

// function to add music details to myCollection and makes it an object newMusicInfo
function addToCollection(collection, title, artist, yearPublished) {
  const newMusicInfo = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  }; 
  // pushes into myCollection array
  collection.push(newMusicInfo);
  return newMusicInfo;
}

// loops through and displays info about myCollection
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
addToCollection(myCollection, "Views", "Drake", 2016);
addToCollection(myCollection, "-", "Ed Sheeren", 2023);
console.log(myCollection);

showCollection(myCollection);

// takes in a collection and artist
// set an element equal to the index
// if statement using dot notation to identify matches in the artist passed in and element.artist
// push into artistMatch array if found, or else returns empty string
function findByArtist(collection, artist) {
  let artistMatch = [];
  for(let i = 0; i < collection.length; i++) {
    let element = collection[i];
    if(artist === element.artist) {
      artistMatch.push(collection[i]);
      // console.log('found match');
    } 
    // else {
    //   console.log('Artist is not in collection');
    // }
  }
  return artistMatch;
}

console.log(findByArtist(myCollection, 'Drake'));
console.log(findByArtist(myCollection, 'Linkin Park'));
console.log(findByArtist(myCollection, 'Ed Sheeren'));


//stretch goals

function search(collection, searchCriteria) {
  for(let i = 0; i < collection.length; i++) {
    if(searchCriteria.artist === '' || searchCriteria.yearPublished <= 0) {
      return collection[i].title;
      continue;
    }
  }
}
console.log(search(myCollection, { artist: '', yearPublished: 0}));
console.log(search(myCollection, { artist: 'The Band Camino', yearPublished: 2021 }));






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
