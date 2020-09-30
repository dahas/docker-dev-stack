# Docker Development Stack

This is a template for docker-compose. It helps setting up an environment to develop applications with exactly the technology you need. Just comment out or remove services you do not need for the current project.

## Requirements

- Docker (for Windows)

## Usage

1. Create a folder for your project:
`mkdir my_project`
`cd my_project`
&nbsp;
1. Clone resources from GitHub into the newly created folder:
`$ git clone https://github.com/dahas/docker-dev-stack.git .`
&nbsp;
1. Run the project:
`$ docker-compose up`
&nbsp;
1. Check it out in the web browser:
`localhost:9090`

## Connect to MySQL database within another continer

##### Example 1 - NodeJS

    var mysql = require('mysql');
    var db = mysql.createConnection({
        host: 'db', // <-- Name of the service in docker-compose.yml
        user: 'root',
        password: ''
    });

##### Example 2 - PHP

    $db = mysqli_connect('db', 'root', '');
