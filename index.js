const fs = require('fs');
const inquirer = require('inquirer');

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const getManager = () => {
    inquirer.prompt().then((response) => {

    });
}

const getEngineer = () => {
    inquirer.prompt().then((response) => {

    });
}

const getIntern = () => {
    inquirer.prompt().then((response) => {

    });
}

const inputs_manager = [
    {
        type: 'input',
        name: 'name',
        message: 'Manager name:'
    },
    {
        type: 'input',
        name: 'department',
        message: 'Department Id:'
    }
];

const inputs_generic = [
    {
        type: 'input',
        name: 'email',
        message: 'Email address'
    },
    {
        type: 'input',
        name: 'id',
        message: 'Employee id:'
    }
];

const inputs_engineer = [
     {
        type: 'input',
        name: 'name',
        message: 'Engineer name:'
    },
   {
        type: 'input',
        name: 'github',
        message: 'Github profile:'
    }
];

const inputs_intern = [
    {
        type: 'input',
        name: 'name',
        message: 'Intern name:'
    },
    {
        type: 'input',
        name: 'school',
        message: 'School attending:'
    }
]
