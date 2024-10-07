const adviceText = document.getElementById("advice-text")
const diceBtn = document.getElementById("dice-btn")

async function fetchAdvice() {
 const response = await fetch("https://api.adviceslip.com/advice")
 const data = await response.json()
 const advice = data.slip

 adviceText.textContent = `"${advice.advice}"`
}

diceBtn.addEventListener("click", fetchAdvice)

window.onload = fetchAdvice
