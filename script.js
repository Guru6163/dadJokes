const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");
const getMoreJokesBtn = document.getElementById("getMoreJokes");
const singleJokeContainer = document.getElementById("singleJokeContainer");
const multiJokesContainer = document.getElementById("multiJokesContainer");

const generateJoke = () => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  fetch("https://icanhazdadjoke.com", config)
    .then((res) => res.json())
    .then((res) => (jokeEl.innerHTML = res.joke));
};
jokeBtn.addEventListener("click", generateJoke);
generateJoke();

getMoreJokesBtn.addEventListener("click", () => {
  singleJokeContainer.classList.add("hide");
  multiJokesContainer.classList.remove("hide");
  generateMoreJokes();
});

const generateMoreJokes = async () => {
    for (let i = 0; i < 5; i++) {
      const config = {
        headers: {
          Accept: "application/json",
        },
      };
      const joke = await fetch("https://icanhazdadjoke.com", config)
        .then((res) => res.json())
        .then((res) => res.joke);
      if (joke) {
        const jokeElement = `<div id='jokes' class='jokes'>${joke}</div>`;
        multiJokesContainer.innerHTML += jokeElement;
      }
    }
  };
  
