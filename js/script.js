window.addEventListener("scroll", function() {
  const header = document.querySelector(".header1");
  const maxScroll = 300; // hasta dónde queremos que el fondo se vuelva sólido
  let scroll = window.scrollY;

  if(scroll > maxScroll) scroll = maxScroll;

  // Calculamos opacidad entre 0.4 y 0.9
  const opacity = 0.4 + (scroll / maxScroll) * 0.5;
  header.style.background = `rgba(158, 9, 22, ${opacity})`;

  // Blur también puede aumentar suavemente
  const blur = 10 + (scroll / maxScroll) * 5;
  header.style.backdropFilter = `blur(${blur}px)`;
  header.style.webkitBackdropFilter = `blur(${blur}px)`;
});
