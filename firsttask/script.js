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



//date
const year = currentDate.getFullYear();         // Get the current year (e.g., 2023)
const month = currentDate.getMonth() + 1;       // Get the current month (0-based index, so add 1)
const day = currentDate.getDate();               // Get the day of the month (1-31)
const hours = currentDate.getHours();            // Get the current hour (0-23)
const minutes = currentDate.getMinutes();        // Get the current minute (0-59)
const seconds = currentDate.getSeconds();        // Get the current second (0-59)
const milliseconds = currentDate.getMilliseconds();  // Get the current millisecond (0-999)

// Create a formatted date and time string
const fullDateTime = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')} ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(3, '0')}`;

document.getElementById('time').textContent = fullDateTime;
