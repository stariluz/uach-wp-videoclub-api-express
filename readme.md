# Videoclub Web Application

## Description
This project is an implementation of a Backend Restfull API done with an ODM (mongoose), for a videoclub business.

## Requeriments
```
Node.js
Docker
```

## Initialization of the project
These where the commands executed to initialize the express aplication project:
```
npm install -g express-generator
express --view=pug video-club
cd video-club
npm install
```

## Execution of the project
To run this project execute the next commands.
```sh
git clone git@gitlab.com:Adrigondo/WP-videoclub.git
cd WP-videoclub
git checkout odm
npm install
# Be sure that the container with mongo is currently running, 
npm run dev
```
To create your first models, you will have to create the admin permissions the role `ADMIN` with the admin permissions, and a user with role `ADMIN`.

## Run the database MongoDB
For this project we selected MongoDB as our database manager. With these commands we can run a container with MongoDB.
```sh
docker run -dti -p21000:27017 --name videoclub --hostname videoclub -v videoclub:/data/db mongo
```
We can check tconsole of mongo :
```sh
docker exec -ti videoclub mongosh
```
If the docker container has stopped, you can restart it with:
```sh
docker start videoclub
```
When we run the aplication, mongoose will create the database if not exists, and will create the schemas based on our app models.

## Versioning
Version 1.2.4.

## Authors
Adrian Alejandro González Domínguez [359834]
Jair Delval Aguirre [355274]
Brayan Ricardo Carrete [307746]

## License
This project is licensed under the MIT License - see the [license.md](./license.md) file for details
