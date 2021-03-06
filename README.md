# Date Functions
GitHub:
![GitHub pull requests](https://img.shields.io/github/issues-pr-raw/kry008/functions-date) ![GitHub package.json version](https://img.shields.io/github/package-json/v/kry008/functions-date) ![GitHub Repo stars](https://img.shields.io/github/stars/kry008/functions-date?style=social)  
Errors (Bugs): ![GitHub issues by-label](https://img.shields.io/github/issues/kry008/functions-date/Error)/![GitHub closed issues by-label](https://img.shields.io/github/issues-closed/kry008/functions-date/Errors)  
New feature request: ![GitHub issues by-label](https://img.shields.io/github/issues/kry008/functions-date/New%20feature)


NPM:
![NPM](https://img.shields.io/npm/l/functions-date) ![npm](https://img.shields.io/npm/dw/functions-date) ![npm](https://img.shields.io/npm/v/functions-date)
  

This package was created to speed up application development by reducing the amount of code a developer would have to write, and so it has it all in one package.

## Installation
```console
npm i functions-date
```
## Importing package
```js
var df = require("functions-date")
```
or
```js
import { name_of_fuctions } from "functions-date";
```
## Usage example
### require
```js
var df = require("functions-date")
var variable = df.D_given_number(1) //Return: Monday
```
### import
```js
import {D_given_number} from  "functions-date";
D_given_number(1) //Return: Monday
```

## Demo
https://runkit.com/kry008/functions-date-example

## Languages
| Number | Short | Name |
|---|---|---|
| 0 | EN | English |
| 1 | PL | Polish |
| 2 | DE | German |
| 3 | RU | Russian |
| 4 | FR | French |


## Functions
```js
//changing language
language(language_code)
//Today's name according to the set language e.g. Monday
D()
//Day name from object according to the set language e.g. Monday
D_given_date(date_object)
//Name of day from number (1 - Monday, 7 - Sunday) according to the set language
D_given_number(day_number_from_zero)
//The name of the current month in the set language.
M() 
//The name of the month from the Date object in the set language.
M_given_date(date_object)
//Month name as an argument of the month number, result e.g. 1 - January
M_given_number(month_number)
//Shows today's date in the format Day (D) Month (M) Year (Y) (4 or 2 numbers), and optionally you can enter a character between DD MM YYYY as a function value, by default "-"
DDMMYYYY(char = "-")
MMDDYYYY(char = "-")
YYYYMMDD(char = "-")
YYYYDDMM(char = "-")
//Shows the date from the Date object in the Day (D) Month (M) Year (Y) (4 or 2 numbers) format, and optionally you can enter a character between DD MM YYYY as a function value, by default "-"
DDMMYYYY_given_date(date, char = "-")
MMDDYYYY_given_date(date, char = "-")
YYYYMMDD_given_date(date, char = "-")
YYYYDDMM_given_date(date, char = "-")
//Shows actual time (24h), HH MM (SS) (Ms), and optionally you can enter a character between HH MM (SS) as a function value, by default ":"
HHMM24(char=":")
HHMMSS24(char=":")
HHMMSSMs24(char=":")
//Shows time (24h) from Date object, HH MM (SS) (Ms), and optionally you can enter a character between HH MM (and SS) as a function value, by default ":"
HHMM24_given_date(date, char=":")
HHMMSS24_given_date(date, char=":")
HHMMSSMs24_given_date(date, char=":")
//Shows actual time in the 12h pattern, HH MM (and SS) (Ms) optionally you can enter a sign between HH and MM (and SS) and the abbreviation AM and PM
HHMM12(char=":", am="AM", pm="PM")
HHMMSS12(char=":", am="AM", pm="PM")
HHMMSSMs12(char=":", am="AM", pm="PM")
//Shows Date object time in the 12h pattern, optionally you can enter a sign between HH and MM (and SS) (Ms) and the abbreviation AM and PM
HHMM12_given_date(date, char=":", am="AM", pm="PM")
HHMMSS12_given_date(date, char=":", am="AM", pm="PM")
HHMMSSMs12_given_date(date, char=":", am="AM", pm="PM")
//Shows miliseconds since January 1, 1970 till today
TimeMS()
//Shows miliseconds since January 1, 1970 till Date object
TimeMS_given_date(date)
//Now miliscends
MS()
//Miliseconds from Date object
MS_given_date(date)
//Now seconds
SS()
//Seconds from Date object
SS_given_date(date)
//Now Minutes
MM()
//Minutes from Date object
MM_given_date(date)
//Now Hours
HH()
//Hours from Date object
HH_given_date(date)
//Now Day number 1-7
Day()
//Day from Date object number 1-7
Day_given_date(date)
//Now Month number 1-12
Month()
//Month from Date object number 1-7
Month_given_date(date)
//Now Year
Year()
//Year from Date object
Year_given_date(date)
//Prints the number and name of the season in a fixed language, and has the option to accept true / false or refer to the northern hemisphere
seasons(northern_hemisphere = true)
//As above, but with object Date
seasons_given_date(date, northern_hemisphere = true)
//SQL timestamp
timestampSQL()
//SQL timestamp from Date object
timestampSQL_given_date(date)
```
## Extra
### Random numbers
```js
r0_9() //0-9
r0_10() //0-10
r1_10() //1-10
r0_99() //0-99
r0_100() //0-00
r1_100() //1-100
```

## TODO
| Priority* | Expected version | Link/Description |
|---|---|---|
| 0 | 0.1.X | [More types of DD MM YY HH MM SS](https://github.com/kry008/functions-date/issues/3 "GitHub") |
| 2 | 1.X.X | [Transfer the variables with the names of days, months and seasons to the JSON file](https://github.com/kry008/functions-date/issues/5 "GitHub") |
| 3 | X.X.X | More languages |


*1(hight)-3(low), 0 - Done
