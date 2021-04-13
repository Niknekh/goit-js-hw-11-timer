class CountdownTimer {
  constructor(selector, targetDate) {
    (this.selector = document.querySelector(selector)),
      (this.targetDate = new Date(targetDate)),
      (this.days = this.selector.querySelector('[data-value="days"]')),
      (this.hours = this.selector.querySelector('[data-value="hours"]')),
      (this.mins = this.selector.querySelector('[data-value="mins"]')),
      (this.secs = this.selector.querySelector('[data-value="secs"]'));
          (this.labels = this.selector.querySelectorAll(".label"));
      (this.values = this.selector.querySelectorAll(".value"));
setInterval(() => {
  const days = Math.floor(
    (this.targetDate - new Date()) / (1000 * 60 * 60 * 24)
  );


let hours = Math.floor(((this.targetDate - new Date()) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  if (hours < 10) {
    hours = '0' + hours;
}


let mins = Math.floor(((this.targetDate - new Date()) % (1000 * 60 * 60)) / (1000 * 60));
  if (mins < 10) {
    mins = '0' + mins;
}

  let secs = Math.floor(((this.targetDate - new Date()) % (1000 * 60)) / 1000);
    if (secs < 10) {
    secs = '0' + secs;
}

  this.days.textContent = days;
  this.hours.textContent = hours;
  this.mins.textContent = mins;
  this.secs.textContent = secs;
}, 1000);
  }
}

const timer = new CountdownTimer("#timer-1", "March 2, 2024");

timer.selector.style.display = 'flex';
timer.labels.forEach((label) => (label.style.display = "none"));
timer.values.forEach((value) => {
  value.style.margin = "20px";
  value.style.fontWeight = 700;
  value.style.fontSize = "70px";
});

