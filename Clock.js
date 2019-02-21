function Clockwatch() {

    var Newdate = new Date();
    var Hour = Newdate.getHours();
    var Minute = Newdate.getMinutes();
    var Second = Newdate.getSeconds();
    var DateToday = Newdate.getDate();
    var Month = Newdate.getMonth();
    var Year = Newdate.getFullYear();
    var Day = Newdate.getDay();
    var Session = "";
    if (Hour > 12) {
        Session = "PM";
        Hour = Hour - 12;
    }
    else {
        Session = "AM";
    }
    var Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var Clock = DateToday + ":" + Months[Month] + ":" + Year + ": " + Days[Day];
    console.log(Clock);
    var Time = Hour + ":" + Minute + ":" + Second + " " + Session;
    console.log(Time);
    setTimeout(Clockwatch, 3000);
}
Clockwatch();