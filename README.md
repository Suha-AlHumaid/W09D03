# W09D03
It's todos list project frontend with authentication and authorization. It's includes signin and register also control panel for admin.


# FRONT-END

## LOGIN FORM:

![login img](https://github.com/Suha-AlHumaid/W09D03/blob/main/img/login.png)

## REGISTER FORM:

![register img](https://github.com/Suha-AlHumaid/W09D03/blob/main/img/register.png)

## TODOS LIST :

![todos img](https://github.com/Suha-AlHumaid/W09D03/blob/main/img/todos.png)

## CONTROL PANEL:

![control panel img](https://github.com/Suha-AlHumaid/W09D03/blob/main/img/cotrolPanel.png)



# BACK-END

# Todos Api With Auths
It's simple todos list project with authentication and authorization. It's includes signin and register system useing bcrybt and jwt. Give only permission for admin to delete or see users information and create custom role.

ّIndex:
* [Instructions](#Instructions)
* [Technologies](#technologies)
* [Schemas](#Schemas)
* [Routers](#Routers)

## Instructions for useing this project:
```
npm i  
 ```
create .env file and set your own values:
```
PORT=your own port
DB_URI= url on mongodb
SALT=salt value
secert_key=any secrt value
```

## Technologies:
* Mongoose
* Mongo DB
* express
* node js
* bcrybt
* jwt


## Schemas:
 * Role schema
    <br>  contains this information: role and permessions
 * user schema
   <br>  contains this information: email , password and role
  * Task schema
    <br> contains this information: email , password and role

 ## Routers:
### Role Routers

 * Create role api
      <br> To create new user role like: admin and user.
      only admin can create a role
      
 * Get all role api
      <br> List all roles in the DB like: Admin and user.
      only admin can see rools

        
 ### User Routers
   * Register api: 
Create new user with particuler role (email , passsword , role). Password hashed by bcrypt.
   * Login api: <br>
Login user via compare email and password that enters by user with email and hashed password (by bcrypt). Also get exist token validation which finsh in 60 minuts.
   * Delete user api. 
   <br> only work for admin who has exist token.
Get all users router.
<br> only work for admin who has exist token.
          
          
 ### Tasks Routers 
   * Create task api.
   * Update task api.
   * Delete task api.
   * Get all task api.
   * Get specific task api.
Tasks Routers only work for user who has exist token.

   
