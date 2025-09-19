function startFlashSaleTimer() {
  const timerElement = document.getElementById("flashSaleTimer");
  if (!timerElement) return;

  const end = new Date("2025-09-20T23:59:59").getTime();

  setInterval(() => {
    const now = new Date().getTime();
    const distance = end - now;

    if (distance > 0) {
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      timerElement.innerHTML = `Berakhir dalam: ${hours}h ${minutes}m ${seconds}s`;
    } else {
      timerElement.innerHTML = "Flash sale telah berakhir.";
    }
  }, 1000);
}

startFlashSaleTimer();