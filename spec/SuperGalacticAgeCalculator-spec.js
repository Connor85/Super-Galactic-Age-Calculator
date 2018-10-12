import { SuperGalacticAgeCalculator } from "../src/SuperGalacticAgeCalculator.js";
describe("SuperGalacticAgeCalculator", function() {
  let globalTestAge = new SuperGalacticAgeCalculator("1992-10-12", 26);
  // it("returns the users age on earth in seconds", function() {
  //   expect(globalTestAge.ageInSeconds()).toEqual(
  //     Math.floor((Date.now() - userBirthday.getTime()) / 1000)
  //   );
  // });
  it("returns the users age in earth years", function() {
    expect(globalTestAge.ageOnEarth()).toEqual(26);
  });

  it("returns the users age on Mercury", function() {
    expect(globalTestAge.ageOnMercury()).toEqual(108);
  });

  it("returns the users age on Venus", function() {
    expect(globalTestAge.ageOnVenus()).toEqual(42);
  });

  it("returns the users age on Mars", function() {
    expect(globalTestAge.ageOnMars()).toEqual(14);
  });

  it("returns the users age on Jupiter", function() {
    expect(globalTestAge.ageOnJupiter()).toEqual(2);
  });
});