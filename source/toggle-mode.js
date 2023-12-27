let darkMode = true
const buttonToggle = document.getElementById("toggle-mode")

buttonToggle.addEventListener("click", (event) => {
  document.documentElement.classList.toggle("light")

  const mode = darkMode ? "light" : "dark" // se o dark mode é verdadeiro - então é light se não vai ser dark

  event.currentTarget.querySelector("span").textContent = `${mode} mode ativado`

  darkMode = !darkMode //contrario do valor atual - ou seja, nega a booleana que ta verdadeira
})
