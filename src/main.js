import { SuperGalacticAgeCalculator } from "./SuperGalacticAgeCalculator.js";
import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

$(document).ready(function() {
  $("#formDate").submit(function(event) {
    event.preventDefault();
    let birthday = $("#birthday").val();
    let age = $("#age").val();

    let calc = new SuperGalacticAgeCalculator(birthday, age);

    $("#mercuryAge").text(calc.ageOnMercury());
    $("#venusAge").text(calc.ageOnVenus());
    $("#marsAge").text(calc.ageOnMars());
    $("#jupiterAge").text(calc.ageOnJupiter());
  });
});
