const fs = require('fs');
const inquirer = require('inquirer');

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const mainHtml = require('./src/mainHtml.js');
const card = require('./src/card.js');

const getManager = () => {
    const questions = [].concat(inputs_manager, inputs_generic);
    return inquirer.prompt(questions);
}

const getEngineer = () => {
    const questions = [].concat(inputs_engineer, inputs_generic);
    return inquirer.prompt(questions);
}

const getIntern = () => {
    const questions = [].concat(inputs_intern, inputs_generic);
    return inquirer.prompt(questions);
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
        message: 'Manager of department:'
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
        message: 'Engineer Github profile:'
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
        message: 'School intern is attending:'
    }
]

const inputs_options = [
    {
        type: 'list',
        name: 'options',
        message: 'Select an option:',
        choices: ['Done', 'Engineer', 'Intern'],
    }
]

const team = [];
let addMore = true;
const init = () => {
    getManager().then((response) => {
        const manager = new Manager(response.name, response.department, response.email, response.id);
        team.push(card(manager));
        console.log('-----------------------------------');
        console.log(`Added manager: ${response.name}`);
        console.log('-----------------------------------');
    }).then(() => {
        checkOptions();
    });
}

const checkOptions = () => {
    inquirer.prompt(inputs_options).then((response) => {
        if (response.options === 'Engineer') {
            getEngineer().then((response) => {
                const engineer = new Engineer(response.name, response.email, response.id, response.github);
                team.push(card(engineer));
                console.log('-----------------------------------');
                console.log(`Added engineer: ${response.name}`);
                console.log('-----------------------------------');
                checkOptions();
            });
        }
        else if (response.options === 'Intern') {
            getIntern().then((response) => {
                const intern = new Intern(response.name, response.email, response.id, response.school);
                team.push(card(intern));
                console.log('-----------------------------------');
                console.log(`Added intern: ${response.name}`);
                console.log('-----------------------------------');
                checkOptions();
            });
        }
        else {
            done();
        }
    });
}

const done = () => {
    console.log('Done!!!');console.log(team);
    fs.writeFileSync('index2.html', mainHtml(team), 'utf-8');
}

init();
