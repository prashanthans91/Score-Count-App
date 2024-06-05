let homeScore = document.getElementsByClassName("score1");
let guestScore = document.getElementsByClassName("score2");
let homeCount = 0;
let guestCount = 0;
function add1Home() {
  homeCount += 1;
  homeScore[0].textContent = homeCount;
}
function add2Home() {
  homeCount += 2;
  homeScore[0].textContent = homeCount;
}
function add3Home() {
  homeCount += 3;
  homeScore[0].textContent = homeCount;
}
function add1Guest() {
  guestCount += 1;
  guestScore[0].textContent = guestCount;
}
function add2Guest() {
  guestCount += 2;
  guestScore[0].textContent = guestCount;
}
function add3Guest() {
  guestCount += 3;
  guestScore[0].textContent = guestCount;
}
