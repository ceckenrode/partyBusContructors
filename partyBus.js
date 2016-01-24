// include party bus file

// create a party PartyBus(driverName, startLocation, destination)

// Log to the console who is on the bus // No passengers

// Add Sarah, female, 25. Print to the command line Sarah's Info

// Add 5 more people

// Print out the destination and who is on the bus

module.exports = function(driverName, startLocation, destination) {
  this.driverName = driverName,
    this.startLocation = startLocation,
    this.destination = destination,
    this.passengers = [],
    this.addPassenger = function(passnger) {
      this.passengers.push(passnger);
    },
    this.passengerLog = function() {
      if (this.passengers.length < 1) {
        console.log("There are no passengers on the bus.");
      } else {
        var passengerArr = [];
        for (var i = 0; i < this.passengers.length; i++) {
          passengerArr.push(this.passengers[i].name);
        };
        console.log("We have " + this.passengers.length + " passenger(s)! They are: " + passengerArr.join(', ') + ".");
      }

    }
}
