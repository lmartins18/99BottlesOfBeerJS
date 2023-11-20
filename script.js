document.addEventListener("DOMContentLoaded", function () {
  const lyricsContainer = document.getElementById("lyrics");

  function GetBottleNumberLyricFromNumeric(numOfBottles) {
    if (numOfBottles == 0 || isNaN(parseInt(numOfBottles)))
      return "No more bottles";
    else {
      const bootleString = numOfBottles > 1 ? "bottles" : "bottle";
      return `${numOfBottles} ${bootleString}`;
    }
  }

  function generateLyrics() {
    let lyrics = "";

    for (let i = 99; i >= 0; i--) {
      if (i == 0) {
        lyrics += `No more bottles of beer on the wall, no more bottles of beer<br />
          Go to the store and buy some more, 99 bottles of beer on the wall<br />`;
        break;
      }
      const bottle = GetBottleNumberLyricFromNumeric(i);
      const nextBottle = GetBottleNumberLyricFromNumeric(i - 1);

      lyrics += `${bottle} of beer on the wall, ${bottle} of beer<br />`;
      lyrics += `Take one down and pass it around, ${nextBottle.toLowerCase()} of beer on the wall<br /><br />`;
    }
    return lyrics;
  }

  lyricsContainer.innerHTML = generateLyrics();
});
