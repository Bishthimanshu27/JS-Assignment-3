describe("App", () => {
  describe("Counter", () => {
    it("is set to 120 when the button is clicked", () => {
      button.click()
      expect(counter.innerHTML).toBe('120')
    })
  })

  describe("Button", () => {
    it("has an ID of 'click-me'", () => {
      expect(button.getAttribute('id')).toBe('click-me');

    })
  })

  describe("Factorial", () => {
    it("returns the factorial of positive numbers", () => {
      expect(factorial(5)).toBe(120);

    })

    it("returns 1 if the provided number is less than 1 ", () => {
      expect(factorial(-100)).toBe(1);

    })
  })

  describe("Computer", () => {
    let computer = new Computer()
    it("is created with a hard drive size of 512", () => {
      expect(computer.hardDriveSpace).toBe(512)

    })

    describe("installProgram", () => {
      let computer = new Computer();
      beforeEach(function (done) {
        computer.installProgram(35, function () {
          done();
        })
      })
      it("can install a program if there is sufficient space", (done) => {
        expect(computer.hardDriveSpace).toBe(477);
        done();
      })
      
      })
describe('installProgram', () => {
  let computer = new Computer();
  beforeEach(function(done) {
    computer.installProgram(518,function () {
      done()
    })
  })
  it("will not install the program if there is insufficient space", (done) => {
    expect(computer.hardDriveSpace).toBe(512);
    done()
  })
})

})
     
    describe("format", () => {
    const computer = new Computer();
    it("resets the hard drive to 512, even after programs have been installed", () => {
      computer.hardDriveSpace = 344;
      computer.format();
      expect(computer.hardDriveSpace).toBe(512);
    })
  })
})