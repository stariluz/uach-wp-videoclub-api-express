# Videoclub Web Application

## Description
This project is an implementation of a Backend Restfull API done with an ORM (Sequelize), for a videoclub business.

## Requeriments
```
Node.js
Docker
```


## Instructions to initialize the project
These where the commands executed to initialize the express aplication project:
```
npm install -g express-generator
express --view=pug video-club
cd video-club
npm install

```
## Run the database MySQL
For this project we selected MySQL for our database. With these commands we can run a container.
```sh
docker run -dti -p3306:3306 --name wp-mysql --hostname wp-mysql -e MYSQL_ROOT_PASSWORD=******** -v wp-data:/var/lib/mysql mysql
```
This will run the enviroment for mysql but, the database that our app is using not exists, then we'll create it:
```sh
docker exec -ti wp-mysql bash
# Inside the bash of our container
mysql -u=root
# This will ask us for the password
CREATE DATABASE video-club;
USE DATABASE video-club;
```
And it is.

## Versioning
Version 1.0.0

## Authors
```
Adrian Alejandro González Domínguez [359834]
```
## License
This project is licensed under the MIT License - see the [license.md](./license.md) file for details
