# React / Redux Login Page 
 
#### This is a login page app written in React / Redux, bind with mongodb express app to perform methods like user-login, new-user-create, and user info storage.     

#### The project used a nice boilerplate from*Stephen Grider*'s fabulous Udemy course, https://www.udemy.com/react-redux/

 
### Requirements
 
 * **docker** 
 * **node.js**
 * **npm**
 
### Getting Started

#### 1. Download mongodb image from 
    
https://github.com/dockerfile/mongodb

#### 2. Clone mongodb express app project from 

https://github.com/YuHuaCheng/mongoExpress
        
#### 3. Build mongodb express app's docker image from the project you just cloned in step 2
    cd mongoExpress
    docker build -t mongodb_express_app:latest .
    
#### 4. Use docker-compose to wrap the whole project
    # cd to LoginPage directory fisrt
    docker-compose up
    
#### 5. Start playing!   
    # The app by default will be running at 
    http://localhost:8080/login