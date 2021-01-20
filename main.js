// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
  const hearts = document.getElementsByClassName("like-glyph");
  for (i = 0; i < hearts.length; i++) {
    hearts[i].addEventListener('click', () => {
      let heart = event.target
      if (event.target.innerText == EMPTY_HEART) {
        mimicServerCall()
          .then(resp => {
            heart.innerText = FULL_HEART;
            heart.classList.add("activated-heart");
          })
          .catch((error) => {
            document.getElementById("modal").classList.remove("hidden");
            document.getElementById("modal-message").innerText = error;
            setTimeout(() => {
              document.getElementById("modal").classList.add("hidden")
            }, 5000);
          })
      } else {
        mimicServerCall()
          .then(() => {
            heart.innerText = EMPTY_HEART;
            heart.classList.remove("activated-heart");
          })
          .catch((error) => {
            document.getElementById("modal").classList.remove("hidden");
            document.getElementById("modal-message").innerText = error;
            setTimeout(() => {
              document.getElementById("modal").classList.add("hidden")
            }, 5000);
          })
      }
    })
  };
})



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
