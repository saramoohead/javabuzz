describe ('Javabuzz', function() {

  var javabuzz;

  describe('knows when a number is', function() {

    it('divisible by 3', function() {
      javabuzz = new Javabuzz();
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);
    });

  });

  describe('knows when a number is NOT', function() {

    it('divisible by 3', function() {
      javabuzz = new Javabuzz();
      expect(javabuzz.isDivisibleByThree(2)).toBe(false);
    });

  });

  describe('knows when a number is', function(){
    it('divisible by 5', function() {
      javabuzz = new Javabuzz();
      expect(javabuzz.isDivisibleByFive(5)).toBe(true);
    });

  });

  describe('knows when a number is NOT', function() {
    it('divisible by 5', function() {
      javabuzz = new Javabuzz();
      expect(javabuzz.divisibleByFive(4)).toBe(false);
    });

  });

});
