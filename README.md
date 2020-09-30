# Docker Development Stack

This is a template for docker-compose. It helps setting up an environment to develop applications with exactly the technology you need. Just comment out or remove services you do not need for the current project.

## Requirements

- Docker (for Windows)

## Usage

1. Create a folder for your project:  
`$ mkdir my_project`  
`$ cd my_project`  
&nbsp;  
1. Clone resources from GitHub into the newly created folder:  
`$ git clone https://github.com/dahas/docker-dev-stack.git .`  
&nbsp;  
1. Run the project:  
`$ docker-compose up`  
&nbsp;  
1. Check it out in the web browser:  
http://localhost:9090  

## Connecting to MySQL database from within another container

The value for the **host** entry must be the name of the **service** as defined in docker-compose.yml.

##### Example 1 - NodeJS

    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host: 'name_of_service',
        user: 'root',
        password: ''
    });

##### Example 2 - PHP

    $connection = mysqli_connect('name_of_service', 'root', '');

## Let´s dive in deeper

##### What is ...

`command: ["./wait-for-it.sh", "db:3306", "--", "npm", "start"]`  
We need this little shell script to ensure that the database container has already been set up before we connect to it. Otherwise our node app would run into an error.  

##### And what is ...
`command: --default-authentication-plugin=mysql_native_password`  
Honestly? No idea. But after I included it, it worked and the error message was gone.
