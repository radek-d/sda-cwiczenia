/*
 * Napisz metode ktora posortuje wyniki, na podstawie przeslanej nazwy pola
 */

var library = [
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245 }
];

function sortuj(jakiePole) {
    library.sort((a, b) => {
        if (a[jakiePole] > b[jakiePole]) {
            return 1;
        } else if (a[jakiePole] < b[jakiePole]) {
            return -1;
        } else {
            return 0;
        }
    });
}


sortuj("title");



console.log(library);
