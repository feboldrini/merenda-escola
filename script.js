document.addEventListener('DOMContentLoaded', function () {
  const beneficiosItems = document.querySelectorAll('.beneficios ul li');
  beneficiosItems.forEach(item => {
    item.addEventListener('click', function () {
      alert(`Você clicou em: ${item.textContent}`);
    });
  });
});
