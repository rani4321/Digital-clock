const now = new Date();

const year = now.getFullYear();
document.getElementById("year").innerHTML =year;

const months = {
    0 : "Janvary",
    1 : "February",
    2 : "March",
    3 : "April",
    4 : "May",
    5 : "June",
    6 : "July",
    7 : "August",
    8 : "September",
    9 : "October",
    10 : "November",
    11 : "December"
}
console.log(months)
const month =  now.getMonth();
document.getElementById("month").innerHTML = months[month];
console.log(months[month]);

const date = now.getDate();
document.getElementById("date").innerHTML = date;

const hour = now.getHours();
document.getElementById("hour").innerHTML = hour+"<br> hrs";

const min = now.getMinutes();
document.getElementById("minute").innerHTML = min+"<br> min";

const sec = now.getSeconds();
document.getElementById("second").innerHTML = sec+ "<br> sec";

setInterval(() =>{
    location.reload();
}, 1000);