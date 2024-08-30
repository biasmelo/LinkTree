function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')
  const img = document.querySelector('#profile img')
  const alt = document.querySelector('#profile img')

  if(html.classList.contains('light')) {
    img.setAttribute('src', './assets/bias.png')
  } else {
    img.setAttribute('src', './assets/biasblack.png')
  }

  if(html.classList.contains('light')) {
    img.setAttribute('alt', 'Foto do Bias no fundo claro!')
  } else {
    img.setAttribute('alt', 'Foto do Bias no fundo escuro!')
  }
  
}
