function Clockwatch() {
    var d = new Date();
    var hour = d.getHours(); // 0 - 23
    var minutes = d.getMinutes(); // 0 - 59
    var second = d.getSeconds(); // 0 - 59
    var date = d.getDate();
    var month = d.getMonth();
    var year = d.getFullYear();
    var day = d.getDay();
    var Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var watch = date + ":" + month + ":" + year + ": " + Days[day];
    console.log(watch);
    var time = hour + ":" + minutes + ":" + second + " ";
    console.log(time);
    setTimeout(Clockwatch, 1000);
}
Clockwatch();