const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let newDinosaur1;
  let newDinosaur2;
  let newDinosaur3;
  let park;

  beforeEach(function () {
    newDinosaur1 = new Dinosaur('Diplodocus', 'herbivore', 25);
    newDinosaur2 = new Dinosaur('Raptor', 'carnivore', 15);
    newDinosaur3 = new Dinosaur('Barney', 'vegan', 1000);
    park = new Park ('Dinoland', 25)

  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Dinoland');
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 25);
  });


  it('should have a collection of dinosaurs', function() {
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, [])
  });


  it('should be able to add a dinosaur to its collection', function() {
    park.addDinosaur(newDinosaur1);
    const expected = [newDinosaur1];
    assert.deepStrictEqual(park.collectionOfDinosaurs, expected)
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur(newDinosaur1);
    park.addDinosaur(newDinosaur2);
    park.addDinosaur(newDinosaur3);
    park.removeDinosaur(newDinosaur2);
    const expected = [newDinosaur1, newDinosaur3];
    assert.deepStrictEqual(park.collectionOfDinosaurs, expected);
  });

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
