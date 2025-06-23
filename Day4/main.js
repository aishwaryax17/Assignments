const { DateTime } = require("luxon");

// DST starts: March 10, 2024 (Spring forward)
// DST ends:   November 3, 2024 (Fall back)

const utcSpring = DateTime.fromISO("2024-03-10T09:00:00Z", { zone: "utc" }); 
const utcFall = DateTime.fromISO("2024-11-03T09:00:00Z", { zone: "utc" });   
//utc to pacific
const PacificSpring= utcSpring.setZone("America/Los_Angeles");
const PacificFall = utcFall.setZone("America/Los_Angeles");

console.log("UTC TO PACIFIC CONVERSION");
console.log("utc to Spring PT:", PacificSpring.toString()); 
console.log("utc to Fall PT:",  PacificFall.toString());   


//pacific to indian time
const springToIndia = PacificSpring.setZone("Asia/Kolkata");
const fallToIndia = PacificFall.setZone("Asia/Kolkata");

console.log("PACIFIC TO INDIA CONVERSION");
console.log("Spring PT to IST:", springToIndia.toString());
console.log("Fall PT  to IST:  ", fallToIndia.toString());
