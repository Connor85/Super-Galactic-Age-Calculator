export class SuperGalacticAgeCalculator {
  constructor(birthday, age) {
    this.birthday = birthday;
    this.age = age;
    this.lifeExpectancy = 75;
  }

  ageInSeconds() {
    let userBirthday = new Date(this.birthday);
    return Math.floor((Date.now() - userBirthday.getTime()) / 1000);
  }

  ageOnEarth() {
    let earthYears = this.age;
    return earthYears;
  }

  ageOnMercury() {
    let mercuryYears = Math.round(this.age / 0.24);
    return mercuryYears;
  }

  ageOnVenus() {
    let venusYears = Math.round(this.age / 0.62);
    return venusYears;
  }

  ageOnMars() {
    let marsYears = Math.round(this.age / 1.88);
    return marsYears;
  }

  ageOnJupiter() {
    let jupiterYears = Math.round(this.age / 11.86);
    return jupiterYears;
  }
}
