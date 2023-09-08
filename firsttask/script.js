//get current date
const currentDate = new Date();
const currentDayOfWeek = currentDate.getDay();

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const currentDayName = daysOfWeek[currentDayOfWeek];

//get date div from html

const dateDiv= document.getElementById("day")
dateDiv.innerHTML=currentDayName;
//set date data-test-id
document.getElementById("date").setAttribute('data-testid', currentDayName);

//curent time UTC in milliseconds
const currentUTCTimeMilliseconds = new Date().getTime();


//display the time using a setInterval
function updateCounter() {
  const currentUTCTimeMilliseconds = new Date().getTime();
  document.getElementById('time').textContent = currentUTCTimeMilliseconds;
}

setInterval(updateCounter, 10);