```
docker run -dti -p3306:3306 --name wp-mysql --hostname wp-mysql -e MYSQL_ROOT_PASSWORD=yipiImASqlDeveloper -v wp-data:/var/lib/mysql mysql
```