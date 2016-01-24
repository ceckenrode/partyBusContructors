var partyBus = require("./partyBus.js");
var passenger = require("./passenger.js");
var bus = new partyBus("Mike", "New York", "Tokyo");
var sara = new passenger("Sara", 25, "female");
bus.addPassenger(sara);
bus.passengerLog();