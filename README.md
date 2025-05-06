# restaurant-app 🍔
This project is a technical interview challenge built with Angular (frontend) and Spring Boot (backend). Follow the instructions below to set up and run the project locally!

<hr></hr>

# 1. Prerequisites

These are the tools and respective versions that I've used. You may not need the exact versions, but try not to stray too far.
- Node.js, v22.6.0
- Npm, 10.8.2
- JDK, 21.0.6
- IntelliJ IDEA, 2024.3.3
- Maven, integrated in IntelliJ
- Angular CLI, 17.3.17
- PostgreSQL, 16.8 
<hr></hr>

# 2. Clone the project

```
git clone https://github.com/LucasImamura/restaurant-app.git
cd restaurant-app
```
<hr></hr>

# 3. Backend Setup

Navigate to the backend directory:  

```
cd backend
```

Create a PostgreSQL database (called, restaurant-app, for example).
(You may achieve this through the command line, but I'd rather use pgadmin 4)

Create a new file to store the database connection details. The file should be named application.properties and located at src/main/resources
It should look like this:

```
spring.application.name=rest-service

spring.datasource.url=jdbc:postgresql://localhost:5433/restaurant-db
spring.datasource.username=your_username
spring.datasource.password=your_password
```
Don't forget to check if your database is indeed at port 5433.

Now, please apply the database migrations located at /backend/src/main/resources/db/migration. There are seven of them.
I personally used flyway through a maven plugin, which can be simply obtained by adding this to the pom.xml:
```
<plugin>
  <groupId>org.flywaydb</groupId>
  <artifactId>flyway-maven-plugin</artifactId>
  <version>6.5.7</version>
  <configuration>
    <url>jdbc:postgresql://localhost:5433/restaurant-app</url>
    <user>your_username_goes_here</user>
    <password>your_password_goes_here</password>
  </configuration>
</plugin>
```
This should ensure that your maven plugin at IntelliJ works with Flyway. All you have to do is double-click "flyway:migrate":
![image](https://github.com/user-attachments/assets/5dde6227-4856-4cb3-af10-ebf830c00f7b)


Next, build and run the backend:

```
mvn clean install
mvn spring-boot:run
```
It should start on http://localhost:8080.

<hr></hr>

# 4. Frontend Setup

Navigate to the backend directory:  

```
cd ..
cd frontend
```

Install the dependencies:

```
npm install
```

Start angular:

```
ng serve
```

<hr></hr>

# 5. Last step 🎉

Check if the backend is running normally on http://localhost:8080 <br />
And finally, open the frontend at http://localhost:4200

<hr></hr>






