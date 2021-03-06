const crypto = require("crypto");
const Data = new Date();
var language = 1;//0 - EN, 1 - PL, 2 - DE, 3 - RU, 4 - FR
var dayOfWeek = []
dayOfWeek[0] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
dayOfWeek[1] = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];
dayOfWeek[2] = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
dayOfWeek[3] = ["Воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
dayOfWeek[4] = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
var monthOfWeek = []
monthOfWeek[0] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
monthOfWeek[1] = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];
monthOfWeek[2] = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
monthOfWeek[3] = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
monthOfWeek[4] = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
var seasons_tab = [];
seasons_tab[0] = ["Spring", "Summer", "Autumn", "Winter"]
seasons_tab[1] = ["Wiosna", "Lato", "Jesień", "Zima"]
seasons_tab[2] = ["Frühling", "Sommer", "Herbst", "Winter"]
seasons_tab[3] = ["Весна", "лето", "осень", "зима"]
seasons_tab[4] = ["Printemps", "Été", "Automne", "Hiver"]
exports.debug = function() {
    console.log(Data);
    console.log(language);
}
exports.language = function(lang)
{
    //language = lang;
    switch (lang) {
        case "en":
        case "0":
        case "EN":
        case 0:
            language = 0;
            console.log(`Language = ${language}`)
            break;
        case "pl":
        case "PL":
        case "1":
        case 1:
            language = 1;
            console.log(`Language = ${language}`)
            break;
        case "de":
        case "DE":
        case "2":
        case 2:
            language = 2;
            console.log(`Language = ${language}`)
            break;
    
        case "ru":
        case "RU":
        case "3":
        case 3:
            language = 3;
            console.log(`Language = ${language}`)
            break;
    
        case "fr":
        case "FR":
        case "4":
        case 4:
            language = 4;
            console.log(`Language = ${language}`)
            break;
        default:
            console.error("Language unsupported, default EN")
            language = 0;
            break;
    }
}
exports.D = function() //today Day Name
{
    return dayOfWeek[language][Data.getDay()]
}
exports.D_given_date = function(date) //from object Date
{
    return dayOfWeek[language][date.getDay()]
}
exports.D_given_number = function(day_number) //Day of week, from 1
{
    if (day_number == 7) {
        day_number = 0
    }
    console.log(language + " " + day_number)
    return dayOfWeek[language][day_number]
}
exports.M = function() //today month Name
{
    return monthOfWeek[language][Data.getMonth()]
}
exports.M_given_date = function(date) //from object Date
{
    return monthOfWeek[language][date.getMonth()]
}
exports.M_given_number = function(month_number) //month, from 1
{
    month_number = month_number - 1;
    return monthOfWeek[language][month_number]
}
exports.DDMMYYYY = function(char = "-")//Char between dayXmonthXyear
{
    return Data.getDate() + char + (Data.getMonth() + 1) + char + Data.getFullYear()
}
exports.MMDDYYYY = function(char = "-")//Char between monthXdayXyear
{
    return (Data.getMonth() + 1) + char + Data.getDate() + char + Data.getFullYear()
}
exports.DDMMYYYY_given_date = function(date, char = "-")//Char between dayXmonthXyear
{
    return date.getDate() + char + (date.getMonth() + 1) + char + date.getFullYear()
}
exports.MMDDYYYY_given_date = function(date, char = "-")//Char between monthXdayXyear
{
    return (date.getMonth() + 1) + char + date.getDate() + char + date.getFullYear()
}
exports.YYYYMMDD = function(char = "-")
{
    return Data.getFullYear() + char + (Data.getMonth() + 1) + char + Data.getDate()
}
exports.YYYYMMDD_given_date = function(date, char = "-")
{
    return date.getFullYear() + char + (date.getMonth() + 1) + char + date.getDate()
}
exports.YYYYDDMM = function(char = "-")
{
    return Data.getFullYear() + char + Data.getDate() + char + (Data.getMonth() + 1)
}
exports.YYYYDDMM_given_date = function(date, char = "-")
{
    return date.getFullYear() + char + date.getDate() + char + (date.getMonth() + 1)
}

exports.DDMMYY = function(char = "-")//Char between dayXmonthXyear
{
    return Data.getDate() + char + (Data.getMonth() + 1) + char + (Data.getFullYear() % 100)
}
exports.MMDDYY = function(char = "-")//Char between monthXdayXyear
{
    return (Data.getMonth() + 1) + char + Data.getDate() + char + (Data.getFullYear() % 100)
}
exports.DDMMYY_given_date = function(date, char = "-")//Char between dayXmonthXyear
{
    return date.getDate() + char + (date.getMonth() + 1) + char + (date.getFullYear() % 100)
}
exports.MMDDYY_given_date = function(date, char = "-")//Char between monthXdayXyear
{
    return (date.getMonth() + 1) + char + date.getDate() + char + (date.getFullYear() % 100)
}
exports.YYMMDD = function(char = "-")
{
    return (Data.getFullYear() % 100) + char + (Data.getMonth() + 1) + char + Data.getDate()
}
exports.YYMMDD_given_date = function(date, char = "-")
{
    return (date.getFullYear() % 100) + char + (date.getMonth() + 1) + char + date.getDate()
}
exports.YYDDMM = function(char = "-")
{
    return (Data.getFullYear() % 100) + char + Data.getDate() + char + (Data.getMonth() + 1)
}
exports.YYDDMM_given_date = function(date, char = "-")
{
    return (date.getFullYear() % 100) + char + date.getDate() + char + (date.getMonth() + 1)
}

exports.HHMM24 = function(char=":")
{
    var hours = Data.getHours();
    var minutes = Data.getMinutes();
    minutes = minutes < 10 ? '0'+minutes : minutes;
    return hours + char + minutes
}
exports.HHMM12 = function(char=":", am="AM", pm="PM")
{
    var hours = Data.getHours();
    var minutes = Data.getMinutes();
    var ampm = hours >= 12 ? pm : am;
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    return hours + char + minutes + " " + ampm
}
exports.HHMM24_given_date = function(date, char=":")
{
    var hours = date.getHours();
    var minutes = date.getMinutes();
    minutes = minutes < 10 ? '0'+minutes : minutes;

    return hours + char + minutes
}
exports.HHMM12_given_date = function(date, char=":", am="AM", pm="PM")
{
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? pm : am;
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    return hours + char + minutes + " " + ampm
}
exports.HHMMSS24 = function(char=":")
{
    var hours = Data.getHours();
    var minutes = Data.getMinutes();
    var seconds = Data.getSeconds();
    minutes = minutes < 10 ? '0'+minutes : minutes;
    seconds = seconds < 10 ? '0'+seconds : seconds;
    return hours + char + minutes + char + seconds
}
exports.HHMMSS12 = function(char=":", am="AM", pm="PM")
{
    var hours = Data.getHours();
    var minutes = Data.getMinutes();
    var seconds = Data.getSeconds();
    var ampm = hours >= 12 ? pm : am;
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    seconds = seconds < 10 ? '0'+seconds : seconds;
    return hours + char + minutes + char + seconds + " " + ampm
}
exports.HHMMSS24_given_date = function(date, char=":")
{
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    minutes = minutes < 10 ? '0'+minutes : minutes;
    seconds = seconds < 10 ? '0'+seconds : seconds;
    return hours + char + minutes + char + seconds
}
exports.HHMMSS12_given_date = function(date, char=":", am="AM", pm="PM")
{
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var ampm = hours >= 12 ? pm : am;
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    seconds = seconds < 10 ? '0'+seconds : seconds;
    return hours + char + minutes + char + seconds + " " + ampm
}
exports.HHMMSSMs24 = function(char=":")
{
    var hours = Data.getHours();
    var minutes = Data.getMinutes();
    var seconds = Data.getSeconds();
    var ms = Data.getMilliseconds();
    minutes = minutes < 10 ? '0'+minutes : minutes;
    seconds = seconds < 10 ? '0'+seconds : seconds;
    return hours + char + minutes + char + seconds + char + ms 
}
exports.HHMMSSMs12 = function(char=":", am="AM", pm="PM")
{
    var hours = Data.getHours();
    var minutes = Data.getMinutes();
    var seconds = Data.getSeconds();
    var ms = Data.getMilliseconds();
    var ampm = hours >= 12 ? pm : am;
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    seconds = seconds < 10 ? '0'+seconds : seconds;
    return hours + char + minutes + char + seconds + char + ms  + " " + ampm
}
exports.HHMMSSMs24_given_date = function(date, char=":")
{
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var ms = date.getMilliseconds();
    minutes = minutes < 10 ? '0'+minutes : minutes;
    seconds = seconds < 10 ? '0'+seconds : seconds;
    return hours + char + minutes + char + seconds + char + ms 
}
exports.HHMMSSMs12_given_date = function(date, char=":", am="AM", pm="PM")
{
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var ms = date.getMilliseconds();
    var ampm = hours >= 12 ? pm : am;
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    seconds = seconds < 10 ? '0'+seconds : seconds;
    return hours + char + minutes + char + seconds + char + ms + " " + ampm
}
exports.TimeMS = function()
{
    return Data.getTime()
}
exports.TimeMS_given_date = function(date)
{
    return date.getTime()
}
exports.MS = function()
{
    return Data.getMilliseconds()
}
exports.MS_given_date = function(date)
{
    return date.getMilliseconds()
}
exports.SS = function()
{
    return Data.getSeconds()
}
exports.SS_given_date = function(date)
{
    return date.getSeconds()
}
exports.MM = function()
{
    return Data.getMinutes()
}
exports.MM_given_date = function(date)
{
    return date.getMinutes()
}
exports.HH = function()
{
    return Data.getHours()
}
exports.HH_given_date = function(date)
{
    return date.getHours()
}
exports.Day = function()
{
    if(Data.getDate() == 0)
    {
        return 7
    }
    return Data.getDate()
}
exports.Day_given_date = function(date)
{
    if(date.getDate() == 0)
    {
        return 7
    }
    return date.getDate()
}
exports.Month = function()
{
    return (Data.getMonth() + 1)
}
exports.Month_given_date = function(date)
{
    return (date.getMonth() + 1)
}
exports.Year = function()
{
    return Data.getFullYear()
}
exports.Year_given_date = function(date)
{
    return date.getFullYear()
}
exports.seasons = function(northern_hemisphere = true)
{
    var month = Data.getMonth() +1;
    var day = Data.getDay();
    if(northern_hemisphere)
    {
        if (month == 1 || month == 2) {
            return {seasons_nr: 4, seasons: seasons_tab[language][3]}
        }
        if (month == 3) {
            if(day < 21)
            {
                return {seasons_nr: 4, seasons: seasons_tab[language][3]}
            }
            else
            {
                return {seasons_nr: 1, seasons: seasons_tab[language][0]}
            }
        }
        if (month == 4 || month == 5) {
            return {seasons_nr: 1, seasons: seasons_tab[language][0]}
        }
        if (month == 6) {
            if(day < 22)
            {
                return {seasons_nr: 1, seasons: seasons_tab[language][0]}
            }
            else
            {
                return {seasons_nr: 2, seasons: seasons_tab[language][1]}
            }
        }
        if (month == 7 || month == 8) {
            return {seasons_nr: 2, seasons: seasons_tab[language][1]}
        }
        if (month == 9) {
            if(day < 23)
            {
                return {seasons_nr: 2, seasons: seasons_tab[language][1]}
            }
            else
            {
                return {seasons_nr: 3, seasons: seasons_tab[language][2]}
            }
        }
        if (month == 10 || month == 11) {
            return {seasons_nr: 3, seasons: seasons_tab[language][2]}
        }
        if (month == 12) {
            if(day < 22)
            {
                return {seasons_nr: 3, seasons: seasons_tab[language][2]}
            }
            else
            {
                return {seasons_nr: 4, seasons: seasons_tab[language][3]}
            }
        }
    }
    else
    {
        if (month == 1 || month == 2) {
            return {seasons_nr: 2, seasons: seasons_tab[language][1]}
        }
        if (month == 3) {
            if(day < 21)
            {
                return {seasons_nr: 2, seasons: seasons_tab[language][1]}
            }
            else
            {
                return {seasons_nr: 3, seasons: seasons_tab[language][2]}
            }
        }
        if (month == 4 || month == 5) {
            return {seasons_nr: 3, seasons: seasons_tab[language][2]}
        }
        if (month == 6) {
            if(day < 22)
            {
                return {seasons_nr: 3, seasons: seasons_tab[language][2]}
            }
            else
            {
                return {seasons_nr: 4, seasons: seasons_tab[language][3]}
            }
        }
        if (month == 7 || month == 8) {
            return {seasons_nr: 4, seasons: seasons_tab[language][3]}
        }
        if (month == 9) {
            if(day < 23)
            {
                return {seasons_nr: 4, seasons: seasons_tab[language][3]}
            }
            else
            {
                return {seasons_nr: 1, seasons: seasons_tab[language][0]}
            }
        }
        if (month == 10 || month == 11) {
            return {seasons_nr: 1, seasons: seasons_tab[language][0]}
        }
        if (month == 12) {
            if(day < 22)
            {
                return {seasons_nr: 1, seasons: seasons_tab[language][0]}
            }
            else
            {
                return {seasons_nr: 2, seasons: seasons_tab[language][1]}
            }
        }
    }
}
exports.seasons_given_date = function(date, northern_hemisphere = true)
{
    console.log("AAAA")
    var month = date.getMonth() +1;
    var day = date.getDay();
    if(northern_hemisphere)
    {
        if (month == 1 || month == 2) {
            return {seasons_nr: 4, seasons: seasons_tab[language][3]}
        }
        if (month == 3) {
            if(day < 21)
            {
                return {seasons_nr: 4, seasons: seasons_tab[language][3]}
            }
            else
            {
                return {seasons_nr: 1, seasons: seasons_tab[language][0]}
            }
        }
        if (month == 4 || month == 5) {
            return {seasons_nr: 1, seasons: seasons_tab[language][0]}
        }
        if (month == 6) {
            if(day < 22)
            {
                return {seasons_nr: 1, seasons: seasons_tab[language][0]}
            }
            else
            {
                return {seasons_nr: 2, seasons: seasons_tab[language][1]}
            }
        }
        if (month == 7 || month == 8) {
            return {seasons_nr: 2, seasons: seasons_tab[language][1]}
        }
        if (month == 9) {
            if(day < 23)
            {
                return {seasons_nr: 2, seasons: seasons_tab[language][1]}
            }
            else
            {
                return {seasons_nr: 3, seasons: seasons_tab[language][2]}
            }
        }
        if (month == 10 || month == 11) {
            return {seasons_nr: 3, seasons: seasons_tab[language][2]}
        }
        if (month == 12) {
            if(day < 22)
            {
                return {seasons_nr: 3, seasons: seasons_tab[language][2]}
            }
            else
            {
                return {seasons_nr: 4, seasons: seasons_tab[language][3]}
            }
        }
    }
    else
    {
        if (month == 1 || month == 2) {
            return {seasons_nr: 2, seasons: seasons_tab[language][1]}
        }
        if (month == 3) {
            if(day < 21)
            {
                return {seasons_nr: 2, seasons: seasons_tab[language][1]}
            }
            else
            {
                return {seasons_nr: 3, seasons: seasons_tab[language][2]}
            }
        }
        if (month == 4 || month == 5) {
            return {seasons_nr: 3, seasons: seasons_tab[language][2]}
        }
        if (month == 6) {
            if(day < 22)
            {
                return {seasons_nr: 3, seasons: seasons_tab[language][2]}
            }
            else
            {
                return {seasons_nr: 4, seasons: seasons_tab[language][3]}
            }
        }
        if (month == 7 || month == 8) {
            return {seasons_nr: 4, seasons: seasons_tab[language][3]}
        }
        if (month == 9) {
            if(day < 23)
            {
                return {seasons_nr: 4, seasons: seasons_tab[language][3]}
            }
            else
            {
                return {seasons_nr: 1, seasons: seasons_tab[language][0]}
            }
        }
        if (month == 10 || month == 11) {
            return {seasons_nr: 1, seasons: seasons_tab[language][0]}
        }
        if (month == 12) {
            if(day < 22)
            {
                return {seasons_nr: 1, seasons: seasons_tab[language][0]}
            }
            else
            {
                return {seasons_nr: 2, seasons: seasons_tab[language][1]}
            }
        }
    }
}
exports.timestampSQL = function()
{
    var timestamp = Data.getUTCFullYear() + '-' +
    ('00' + (Data.getUTCMonth()+1)).slice(-2) + '-' +
    ('00' + Data.getUTCDate()).slice(-2) + ' ' + 
    ('00' + Data.getUTCHours()).slice(-2) + ':' + 
    ('00' + Data.getUTCMinutes()).slice(-2) + ':' + 
    ('00' + Data.getUTCSeconds()).slice(-2);
    return (timestamp)
}
exports.timestampSQL_given_date = function(date)
{
    var timestamp = date.getUTCFullYear() + '-' +
    ('00' + (date.getUTCMonth()+1)).slice(-2) + '-' +
    ('00' + date.getUTCDate()).slice(-2) + ' ' + 
    ('00' + date.getUTCHours()).slice(-2) + ':' + 
    ('00' + date.getUTCMinutes()).slice(-2) + ':' + 
    ('00' + date.getUTCSeconds()).slice(-2);
    return (timestamp)
}
exports.r0_9 = function()
{
    return crypto.randomInt(0, 9);
}
exports.r0_10 = function()
{
    return crypto.randomInt(0, 10);
}
exports.r1_10 = function()
{
    return crypto.randomInt(1, 10);
}
exports.r0_99 = function()
{
    return crypto.randomInt(0, 99);
}
exports.r0_100 = function()
{
    return crypto.randomInt(0, 100);
}
exports.r1_100 = function()
{
    return crypto.randomInt(1, 100);
}