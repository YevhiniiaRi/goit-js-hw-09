import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';


const datePicker = document.getElementById('datetime-picker');
const startButton = document.querySelector('[data-start]');
const daysElement = document.querySelector('[data-days]');
const hoursElement = document.querySelector('[data-hours]');
const minutesElement = document.querySelector('[data-minutes]');
const secondsElement = document.querySelector('[data-seconds]');


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    if (selectedDate < new Date()) {
      window.alert('Please choose a date in the future');
      startButton.disabled = true;
    } else {
      startButton.disabled = false;
    }
  },
};


flatpickr(datePicker, options);

let countdownIntervalId;


startButton.addEventListener('click', () => {
  const countdownDate = new Date(datePicker.value).getTime();

  startButton.disabled = true;
  datePicker.disabled = true;

  countdownIntervalId = setInterval(() => {
    const now = new Date().getTime();
    let distance = countdownDate - now;

    if (distance <= 0) {
      clearInterval(countdownIntervalId);
      datePicker.disabled = false;
      startButton.disabled = true;
      daysElement.textContent = '00';
      hoursElement.textContent = '00';
      minutesElement.textContent = '00';
      secondsElement.textContent = '00';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    distance -= days * (1000 * 60 * 60 * 24);

    const hours = Math.floor(distance / (1000 * 60 * 60));
    distance -= hours * (1000 * 60 * 60);

    const minutes = Math.floor(distance / (1000 * 60));
    distance -= minutes * (1000 * 60);

    const seconds = Math.floor(distance / 1000);

    daysElement.textContent = days.toString().padStart(2, '0');
    hoursElement.textContent = hours.toString().padStart(2, '0');
    minutesElement.textContent = minutes.toString().padStart(2, '0');
    secondsElement.textContent = seconds.toString().padStart(2, '0');
  }, 1000);
});