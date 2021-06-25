let a = 1;
document.onclick = function(e) {

  if (e.target.classList[2] == 'btn-animate') {
    document.querySelector('.btn-animate').textContent = `Подписчики: ${a++}`
  }
}