const TM_CLK = 0;
const TM_DIO = 1;
const EN_CLK = 2;
const EN_DT = 3;
const EN_SW = 4;
const BZ_IO = 5;

// Setup TM1637
const { TM1637 } = require("tm1637");
const tm1637 = new TM1637(TM_CLK, TM_DIO); // CLK=0, DIO=1

// Setup rotary encoder
const { RotaryEncoder } = require("rotary-encoder");
pinMode(EN_CLK, INPUT); // external pull-up.
pinMode(EN_DT, INPUT); // external pull-up.
pinMode(EN_SW, INPUT_PULLUP); // interal pull-up.
const encoder = new RotaryEncoder(EN_CLK, EN_DT, EN_SW);

// Buzzer
const buzzer = require("active-buzzer");

var time = 0;
var step = 30; // 30 seconds
var state = 0; // 0=idle, 1=counting
var timerId = -1;

function showTime(t) {
  var m = Math.floor(t / 60);
  var s = t % 60;
  var digits = [0, 0, 0, 0];
  digits[0] = TM1637.DIGIT[Math.floor(m / 10)];
  digits[1] = TM1637.DIGIT[m % 10] | TM1637.SEG_X;
  digits[2] = TM1637.DIGIT[Math.floor(s / 10)];
  digits[3] = TM1637.DIGIT[s % 10];
  for (var i = 0; i < digits.length; i++) {
    tm1637.setDigit(i, digits[i]);
  }
}

function alarm() {
  buzzer.beep(BZ_IO, 4, 50, LOW);
  delay(500);
  buzzer.beep(BZ_IO, 4, 50, LOW);
  delay(500);
  buzzer.beep(BZ_IO, 4, 50, LOW);
}

showTime(time);

encoder.on("rotate", (val) => {
  if (state === 0) {
    time += val * step;
    if (time < 0) time = 0;
    showTime(time);
  }
});

encoder.on("click", () => {
  if (state === 0) {
    tm1637.off();
    delay(100);
    tm1637.on();
    state = 1;
    timerId = setInterval(() => {
      time--;
      showTime(time);
      if (time <= 0) {
        clearInterval(timerId);
        state = 0;
        alarm();
      }
    }, 1000);
  } else {
    state = 0;
    time = 0;
    clearInterval(timerId);
    showTime(time);
    buzzer.beep(BZ_IO, 1, 10, LOW);
  }
});
