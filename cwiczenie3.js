/*
 * Napisz metode ktora posortuje wyniki, na podstawie przeslanej nazwy pola
 */

var library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ];

function sortBy(argument) {
    var library_sorted = [];
        library_sorted = library.forEach(sort(howToSort(argument)))
    return library_sorted;
}

function howToSort(tem1, item2) {
    if ((item1.author) > (item2.author)) {
        return 1;
    } 
    else if ((item2.author) > (item1.author))
    {
        return -1;
    }
    else 
    {
        return 0;
    }

    if ((item1.title) > (item2.title)) {
        return 1;
    } 
    else if ((item2.title) > (item1.title))
    {
        return -1;
    }
    else 
    {
        return 0;
    }

    if ((item1.libraryID) > (item2.libraryID)) {
        return 1;
    } 
    else if ((item2.libraryID) > (item1.libraryID))
    {
        return -1;
    }
    else 
    {
        return 0;
    }


}

console.log("Sortuj po Autorze:", library.sortBy(author));