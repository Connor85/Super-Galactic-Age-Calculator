export class SuperGalacticAgeCalculator {
  constructor(birthday, age) {
    this.birthday = birthday;
    this.age = age;
    this.lifeExpectancy = 80;
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

  yearsLeftOnEarth() {
    let yearsOnEarth = this.lifeExpectancy - this.age;
    return yearsOnEarth;
  }

  yearsLeftOnMercury() {
    let yearsOnMercury = (this.lifeExpectancy - this.age) / 0.24;
    return yearsOnMercury;
  }

  yearsLeftOnVenus() {
    let yearsOnVenus = Math.round((this.lifeExpectancy - this.age) / 0.62);
    return yearsOnVenus;
  }

  yearsLeftOnMars() {
    let yearsOnMars = Math.round((this.lifeExpectancy - this.age) / 1.88);
    return yearsOnMars;
  }
  yearsLeftOnJupiter() {
    let yearsOnJupiter = Math.round((this.lifeExpectancy - this.age) / 11.86);
    return yearsOnJupiter;
  }
}
