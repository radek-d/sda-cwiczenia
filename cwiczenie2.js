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
var types = {};

var documentType = "dokument";
var imageType = "obrazek";
var appType = "aplikacje";

types["jpg"]=imageType;
types["png"]=imageType;
types["psd"]=imageType;
types["doc"]=documentType;
types["txt"]=documentType;
types["xls"]=documentType;
types["pdf"]=documentType;
types["exe"]=appType;
types["bat"]=appType;

files.forEach( element => {
    showType(element);
 });

function showType(fileName) {
    var result;
    var type = getType(fileName);
    result = types[type];
    console.log (fileName, "jest typu", result);

    function getType(fileName) {
        var array = fileName.split(".");
        return array[array.length - 1];
    }
}
