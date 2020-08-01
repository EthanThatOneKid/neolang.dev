const root = document.getElementById("root")
const readme = "https://raw.githubusercontent.com/EthanThatOneKid/neo-cli/master/README.md"
fetch(readme)
  .then(res => res.text())
  .then(text => root.innerHTML = marked(text))
