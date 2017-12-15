var word = ["sos", "test", "zaraz", "dwa", "oko"];

word.forEach( element => {
   console.log(element, checkPalindroms(element));
});

function checkPalindroms(slowo) {
   return slowo === slowo.split("").reverse().join("");
}
