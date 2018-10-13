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
    const secodsAYear = 31557600;
    let earthYears = Math.round(this.ageInSeconds() / secodsAYear);
    return earthYears;
  }

  ageOnMercury() {
    let mercuryYears = Math.round(this.ageOnEarth() / 0.24);
    return mercuryYears;
  }

  ageOnVenus() {
    let venusYears = Math.round(this.ageOnEarth() / 0.62);
    return venusYears;
  }

  ageOnMars() {
    let marsYears = Math.round(this.ageOnEarth() / 1.88);
    return marsYears;
  }

  ageOnJupiter() {
    let jupiterYears = Math.round(this.ageOnEarth() / 11.86);
    return jupiterYears;
  }

  yearsLeftOnEarth() {
    let yearsOnEarth = this.lifeExpectancy - this.ageOnEarth();
    return yearsOnEarth;
  }

  yearsLeftOnMercury() {
    let yearsOnMercury = (this.lifeExpectancy - this.ageOnEarth()) / 0.24;
    return yearsOnMercury;
  }

  yearsLeftOnVenus() {
    let yearsOnVenus = Math.round((this.lifeExpectancy - this.ageOnEarth()) / 0.62);
    return yearsOnVenus;
  }

  yearsLeftOnMars() {
    let yearsOnMars = Math.round((this.lifeExpectancy - this.ageOnEarth()) / 1.88);
    return yearsOnMars;
  }
  yearsLeftOnJupiter() {
    let yearsOnJupiter = Math.round((this.lifeExpectancy - this.ageOnEarth()) / 11.86);
    return yearsOnJupiter;
  }
}
