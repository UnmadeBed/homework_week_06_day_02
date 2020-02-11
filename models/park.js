// A park must have:
//
// A name
// A ticket price
// A collection of dinosaurs

const Park = function (name, ticketPrice) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.collectionOfDinosaurs = [];
}

// A park must be able to:
//
// Add a dinosaur to its collection of dinosaurs
Park.prototype.addDinosaur = function (dinosaur) {
  this.collectionOfDinosaurs.push(dinosaur);
};
// Remove a dinosaur from its collection of dinosaurs
Park.prototype.removeDinosaur = function (dinosaur) {
  this.collectionOfDinosaurs.splice( this.collectionOfDinosaurs.indexOf(dinosaur), 1 );
};

// Find the dinosaur that attracts the most visitors

// Find all dinosaurs of a particular species
// Calculate the total number of visitors per day
// Calculate the total number of visitors per year
// Calculate the total revenue from ticket sales for one year

module.exports = Park;
