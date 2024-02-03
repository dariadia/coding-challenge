/* 
From https://www.codewars.com/kata/540954232a3259755d000039

Create the function fridayTheThirteenths that accepts a start year and an end year (inclusive), and returns all of the dates where the 13th of a month lands on a Friday in the given range of year(s).
The return value should be a string where each date is seperated by a space. The date should be formatted like 9/13/2014 where months do not have leading zeroes and are separated with forward slashes.
If no end year is given, only return friday the thirteenths during the start year. 

*/

const fridayTheThirteenths = ( y1, y2 ) => {
    let answer = [], start, fin
    start = y1 - y2 > 0 ? y2 : y1
    fin = y1 - y2 > 0 ? y1 : y2

    const checkMonths = (year) => {
        for (let month = 0; month <= 12; month++) {
          const date = new Date(year, month, 13)
          if (date.getDay() === 5) // is a Friday
              answer.push(date.toLocaleDateString())
        }
    }

    for (let year = start; year <= fin; year++) checkMonths(year)
    
    return answer.join(" ")
}

// recursive, m * 12
