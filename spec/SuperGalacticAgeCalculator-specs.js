import { SuperGalacticAgeCalculator } from "../src/SuperGalacticAgeCalculator.js";
src / SuperGalacticAgeCalculator.js;
describe("SuperGalacticAgeCalculator", function() {
  let globalTestAge = new SuperGalacticAgeCalculator("1992-10-12", 26);
  it("returns the users age in earth years", function() {
    expect(globalTestAge.ageOnEarth()).toEqual(26);
  });

  it("returns the users age on Mercury", function() {
    expect(globalTestAge.ageOnMercury()).toEqual(107.9);
  });

  it("returns the users age on Venus", function() {
    expect(globalTestAge.ageOnVenus()).toEqual(42.2);
  });

  it("returns the users age on Venus", function() {
    expect(globalTestAge.ageOnMars()).toEqual(13.8);
  });

  it("returns the users age on Venus", function() {
    expect(globalTestAge.ageOnJupiter()).toEqual(2.2);
  });
});
