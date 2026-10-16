document.querySelectorAll('.metrics').forEach(ticker => {
  const button = ticker.querySelector('.metrics-toggle');
  button.addEventListener('click', () => {
    const paused = ticker.classList.toggle('is-paused');
    button.setAttribute('aria-pressed', String(paused));
    button.setAttribute('aria-label', paused ? 'Retomar movimento das estatísticas' : 'Pausar movimento das estatísticas');
    button.innerHTML = paused ? 'Retomar <span aria-hidden="true">▶</span>' : 'Pausar <span aria-hidden="true">Ⅱ</span>';
  });
});
