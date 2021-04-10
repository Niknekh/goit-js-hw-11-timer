class CountdownTimer {
  constructor(selector, targetDate) {
    (this.selector = document.querySelector(selector)),
      (this.targetDate = new Date(targetDate)),
      (this.days = this.selector.querySelector('[data-value="days"]')),
      (this.hours = this.selector.querySelector('[data-value="hours"]')),
      (this.mins = this.selector.querySelector('[data-value="mins"]')),
      (this.secs = this.selector.querySelector('[data-value="secs"]'));
  }
}
const labels = document.querySelectorAll(".label");
const values = document.querySelectorAll(".value");

setInterval(() => {
  const days = Math.floor(
    (timer.targetDate - new Date()) / (1000 * 60 * 60 * 24)
  );

  /*
   * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
   * остатка % и делим его на количество миллисекунд в одном часе
   * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
   */
  function hours() {
    const mathHour = Math.floor(
      ((timer.targetDate - new Date()) % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );
    if (mathHour < 10) {
      return "0" + mathHour;
    } else {
      return mathHour;
    }
  }

  /*
   * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
   * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
   */

  function mins() {
    const mathMins = Math.floor(
      ((timer.targetDate - new Date()) % (1000 * 60 * 60)) / (1000 * 60)
    );
    if (mathMins < 10) {
      return "0" + mathMins;
    } else {
      return mathMins;
    }
  }

  /*
   * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
   * миллисекунд в одной секунде (1000)
   */

  function secs() {
    const mathSecs = Math.floor(
      ((timer.targetDate - new Date()) % (1000 * 60)) / 1000
    );
    if (mathSecs < 10) {
      return "0" + mathSecs;
    } else {
      return mathSecs;
    }
  }
  timer.days.textContent = days;
  timer.hours.textContent = hours();
  timer.mins.textContent = mins();
  timer.secs.textContent = secs();
}, 1000);

const timer = new CountdownTimer("#timer-1", "March 2, 2024");
/*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */

labels.forEach((label) => (label.style.display = "none"));
values.forEach((value) => {
  value.style.margin = "20px";
  value.style.fontWeight = 700;
  value.style.fontSize = "70px";
});

timer.selector.style.display = "flex";
