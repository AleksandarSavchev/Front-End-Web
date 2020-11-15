let dates = [];
dates[0] = new Date();
dates[1] = new Date("December 8, 2018 21:00:00");

function getDates(date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

let arr2 = [];

for (i in dates) {
    arr2[i] = [];
    arr2[i][0] = getDates(dates[i]);
    arr2[i][1] = dates[i].getDay();
}

let arr3 = [];

function den(chislo) {
    switch (chislo) {
        case 0 :
            return "неделя";
        case 1 :
            return "понеделник";
        case 2 :
            return "вторник";
        case 3 :
            return "сряда";
        case 4 :
            return "четвъртък";
        case 5 :
            return "петък";
        case 6 :
            return "събота";
    }
}

for (i in arr2) {
    arr3[i] = "Дата: " + dates[i].getDate() + "." + (dates[i].getMonth() + 1) + "." + dates[i].getFullYear() + ", час: " +
    (dates[i].getHours() < 10 ? "0" + dates[i].getHours() : dates[i].getHours())+ ":" + (dates[i].getMinutes() < 10 ? "0" + dates[i].getMinutes() : dates[i].getMinutes())
    + ":" + (dates[i].getSeconds() < 10 ? "0" + dates[i].getSeconds() : dates[i].getSeconds()) + ", " + den(arr2[i][1]) + ", " + arr2[i][0] + " дена."
}

console.log(arr3[0]);
console.log(arr3[1]);