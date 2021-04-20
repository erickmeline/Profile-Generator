const mainHtml = (data) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            box-sizing: border-box;
        }
        body, html {
            font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
            height: 100%;
            margin: 0;
        }
        header {
            background-color: #444;
            padding: 3%;
        }
        h1, h3, h4 {
            color: #fff;
            margin: 0;
            padding: 0;
        }
        main {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }
        section {
            background-color: #f2f2f2;
            border: 1px solid #666;
            border-radius: 5px;
            box-shadow: 5px 5px 10px rgb(0 0 0 / 75%);
            flex-basis: 25%;
            margin: 15px;
            min-width: 300px;
        }
        section header {
            background-color: #666;
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
        }
        section header h4 {
            margin-top: 10px;
        }
        section ul {
            border: 1px solid #ccc;
            border-radius: 5px;
            list-style: none;
            margin: 20px 15px;
            padding: 0;
        }
        section li {
            background-color: #fff;
            border-bottom: 1px solid #ccc;
            padding: 10px;
        }
        section li:first-child {
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
        }
        section li:last-child {
            border: none;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
        }
    </style>
</head>
<body>
    <header>
        <h1>Team Profile Generator</h1>
    </header>
    <main>
        ${data}
    </main>
</body>
</html>
`;
}
module.exports = mainHtml;
