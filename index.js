const fs = require('fs');
const inquirer = require('inquirer');

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

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
        team.push(manager);
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
                team.push(engineer);
                console.log('-----------------------------------');
                console.log(`Added engineer: ${response.name}`);
                console.log('-----------------------------------');
                checkOptions();
            });
        }
        else if (response.options === 'Intern') {
            getIntern().then((response) => {
                const intern = new Intern(response.name, response.email, response.id, response.school);
                team.push(intern);
                console.log('-----------------------------------');
                console.log(`Added intern: ${response.name}`);
                console.log('-----------------------------------');
                checkOptions();
            });
        }
        else {
            console.log('Done!!!');console.log(team);
            // let cards = '';
            // for (let i = 0; i < team.length; i++) {console.log(team[i]);
            // cards += `
            //     <section>
            //         <header>
            //             <h3>${team[i].name}</h3>
            //             <h4>${team[i].title}</h4>
            //         </header>
            //         <ul>
            //             <li>${team[i].id}</li>
            //             <li>${team[i].email}</li>
            //             <li>${team[i].department || team[i].github || team[i].school}</li>
            //         </ul>
            //     </section>`;
            // }
            // console.log(cards);
            // writeHtml(cards);
        }
    });
}

const injectCards = (cards) => {
    console.log(cards);
}

const writeHtml = (cards) => {console.log(cards);
    // const data = injectCards(cards)();
    // fs.writeFile('./dist/index.html', data, 'utf-8', function (err) {
    //     if (err) throw err;
    //     console.log('File created successfully.');
    // });
}



// function injectCards(cards) {
//     return `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <style>
//         * {
//             box-sizing: border-box;
//         }
//         body, html {
//             font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
//             height: 100%;
//             margin: 0;
//         }
//         header {
//             background-color: #444;
//             padding: 3%;
//         }
//         h1, h3, h4 {
//             color: #fff;
//             margin: 0;
//             padding: 0;
//         }
//         main {
//             display: flex;
//             flex-wrap: wrap;
//             justify-content: center;
//         }
//         section {
//             background-color: #f2f2f2;
//             border: 1px solid #666;
//             border-radius: 5px;
//             box-shadow: 5px 5px 10px rgb(0 0 0 / 75%);
//             flex-basis: 25%;
//             margin: 15px;
//             min-width: 300px;
//         }
//         section header {
//             background-color: #666;
//             border-top-left-radius: 4px;
//             border-top-right-radius: 4px;
//         }
//         section header h4 {
//             margin-top: 10px;
//         }
//         section ul {
//             border: 1px solid #ccc;
//             border-radius: 5px;
//             list-style: none;
//             margin: 20px 15px;
//             padding: 0;
//         }
//         section li {
//             background-color: #fff;
//             border-bottom: 1px solid #ccc;
//             padding: 10px;
//         }
//         section li:first-child {
//             border-top-left-radius: 5px;
//             border-top-right-radius: 5px;
//         }
//         section li:last-child {
//             border: none;
//             border-bottom-left-radius: 5px;
//             border-bottom-right-radius: 5px;
//         }
//     </style>
// </head>
// <body>
//     <header>
//         <h1>Team Profile Generator</h1>
//     </header>
//     <main>
//         ${cards}
//     </main>
// </body>
// </html>
// `;
// }

init();
