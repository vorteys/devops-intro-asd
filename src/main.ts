import './style.css'

let count = 0;
const counterDisplay = document.getElementById('counter') as HTMLElement;
const counterBtn = document.getElementById('counterBtn') as HTMLElement;

counterBtn.addEventListener('click', () => {
  count++;
  counterDisplay.textContent = count.toString();

  counterDisplay.style.transform = 'scale(1.2)';
  setTimeout(() => {
    counterDisplay.style.transform = 'scale(1)';
  }, 200);
});

counterDisplay.style.transition = 'transform 0.2s ease';
