// Requirements and Imports
// const inquirer = require("inquirer")
// const fs = require('fs');
import fs from 'fs'
import inquirer from 'inquirer';
import Employee from "./src/Employee.js";
import Manager from "./src/Manager.js";
import Intern from "./src/Intern.js";
import Engineer from "./src/Engineer.js";

inquirer
    .prompt([
        {
        type: "input",
        name: "managerName",
        default: "Bob Robert Robertson",
        message: "Welcome to the Team Generator! Please provide the requested information to generate your team. \n Team Manager's name:"
        },
        {
        type: "input",
        name: "managerID",
        default: "M01",
        message: "Team Manager's ID:"
        },
        {
        type: "input",
        name: "managerEmail",
        default: "bobrobrobert@gmail.com",
        message: "Team Manager's E-Mail:"
        },
        {
        type: "input",
        name: "managerOffice",
        default: "1",
        message: "Team Manager's Office Number"
        },
        {
        type: "list",
        name: "employeeType",
        message: "Thank you! Would you like to add an employee, or do you want to go ahead and generate the team?",
        choices: ["Add Engineer", "Add Intern", "Finish "]
        },
        // This branch will run if the user selects, "Add Engineer"
        // {
        // type: "input"
        // }
    ])
    .then((answers) => {
        var teamManager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOffice)
        var team = {teamManager}

        fs.writeFile("employeeList.html", JSON.stringify(team, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Team Generated!'))
    })

// var testManager = new Manager("Bob Robertson", "M01", "bobrobrobert@gmail.com", "1",)
// var testIntern = new Intern("Shelly Belder", "I02", "shelly@shelbel.com", "GA Tech")
// var testEngineer = new Engineer("Allison Gearsprocket", "E52", "AllyGears@gmail.com", "AllyGears57")
// console.log(testManager)
// console.log(testManager.getRole())

// console.log(testEngineer)
// console.log(testEngineer.getRole())

// console.log(testIntern)
// console.log(testIntern.getRole())