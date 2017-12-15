/*
 * jakiego typu jest plik stwórz pomocniczą tablice z typami
 * i napisz metodę która wyświetla typ pliku na podstawie rozszerzenia
 * 
 * np. piesek.jpg -> obraz
 * 
 * rozszerzenia          - typy
 * 
 * jpg, png, psd         - obraz
 * doc, txt, xls, pdf    - dokument
 * exe, bat              - aplikacje
 */

var files = ["obrazek.jpg", "avatar.png", "cv.pdf", "finanse.xls", "a.jpg.exe"];

var imageTypes = ["jpg", "png", "psd"];
var documentTypes = ["doc", "txt", "xls", "pdf"];
var appTypes = ["exe", "bat"];


files.forEach( element => {
    showType(element);
 });

function showType(fileName) {
    var result;
    var type = getType(fileName);
    if (imageTypes.indexOf(type) > -1){
        result = "obrazek"
    }

    if (documentTypes.indexOf(type) > -1){
        result = "document"
    }

    if (appTypes.indexOf(type) > -1){
        result = "app"
    }
    console.log (fileName, "jest typu", result);

    function getType(fileName) {
        var array = fileName.split(".");
        return array[array.length - 1];
    }
}
