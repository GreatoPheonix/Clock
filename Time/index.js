function updateClock()
{
    var clock = new Date();

    var year = clock.getFullYear();

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var month = months[clock.getMonth()];

    var date = clock.getDate();

    var hour = clock.getHours();

    var min = clock.getMinutes();

    var sec = clock.getSeconds();

    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var day = days[clock.getDay()];

    var tt = day + ", " +date + " " + month + " " + year;
    document.getElementById("d-m-y").innerHTML = tt;
    
    var clk = hour + ":" + min + ":" + sec;
    document.getElementById("time").innerHTML = clk;

}