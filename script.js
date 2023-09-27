// Troca do Dark/Ligth Mode ---
function toggleMode() {
  const html = document.documentElement
  // if (html.classList.contains("ligth")) {
  //   html.classList.remove("ligth")
  // } else {
  //   html.classList.add("ligth")
  // }  --- COMANDO FORAM SUBISTITUIDOS PELA FUNÇÃO TOGGLW ABAIXO ---
  html.classList.toggle("ligth")

  // PEGAR A TAG IMG
  const img = document.querySelector("#profile img")

  // SUBISTITUIR A IMAGEM
  if (html.classList.contains("ligth")) {
    // SE TIVE LIGTH MODE ADD IMG LIGTH
    img.setAttribute("src", "./assets/Perfil.png")
  } else {
    // SE TIVER SEM LIGTH MANTE IMG
    img.setAttribute("src", "./assets/Perfil.png")
  }
}
