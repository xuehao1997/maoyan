function font () {
  document.documentElement.style.fontSize = document.documentElement.clientWidth / ( 750/2/100 ) + 'px'
}

font() 

window.onresize = font 