const text = document.querySelector('.text');
const playBtn = document.querySelector('.fa-play-circle');

const sample = new Audio('./assets/10rano2.mp3');
const savedIp = localStorage.getItem('ip');

if (typeof Storage !== 'undefined') {
  async function saveIpPlaySample() {
    try {
      const res = await fetch('https://api.ipify.org');
      const data = await res.text();

      localStorage.setItem('ip', data);

      playBtn.addEventListener(
        'click',
        () => {
          playBtn.classList.add('played');
          playBtn.classList.add('rotate');
          sample.play();
          text.innerText = 'A jeho cicina';
        },
        { once: true }
      );

      sample.addEventListener('ended', () => {
        playBtn.classList.remove('rotate');
        text.innerText = 'Snaha bola, 5.';
      });
    } catch (error) {
      //console.log(error);
      playBtn.classList.add('played');
      text.innerText = 'Unable to retrieve, please refresh';
    }
  }

  // on load
  if (savedIp) {
    text.innerText = `🖕 sample already played by ${savedIp}`;
    playBtn.classList.add('played');
  } else {
    saveIpPlaySample();
  }
} else {
  // local storage not supported
  playBtn.style.display = 'none';
  text.innerText = 'Please try using different browser';
}

// test

const time = new Date();
const day = time.getDay();
const month = time.getMonth();
const year = time.getFullYear();
const hour = time.getHours();
const minute = time.getMinutes();
const second = time.getSeconds();

console.log(time);
console.log(day);
console.log(month);
console.log(year);
console.log(hour);
console.log(minute);
console.log(second);

// var q = new Date();
// var m = q.getMonth();
// var d = q.getDay();
// var y = q.getFullYear();

// var date = new Date(y,m,d);

// mydate=new Date('2011-04-11');
// console.log(date);
// console.log(mydate)

// if(date>mydate)
// {
//     alert("greater");
// }
// else
// {
//     alert("smaller")
// }
