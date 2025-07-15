
function checkAnswer(choice) {
  alert("You chose: " + choice + " ❤️ Level Complete!");
}
function wrongAnswer() {
  const messages = [
    "Only MY answer is correct, samjhi?? 😾😾😾",
    "I’m hurt... try again 🥺🥺",
    "Battamizee sharam tu nai ai yea choose karty way 🙂🙂🙂",
    "Chalair khani?? 🙂🙂",
    "kittni battamizee bandi meri 🥲🥲",
    "it isn't right option jaannn 😘😘😘",
    "mar jao ja kar battamizee 🙂🙂🙂"
  ];
  const randomMsg = messages[Math.floor(Math.random() * messages.length)];
  alert(randomMsg);
}
