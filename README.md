# MySQLburger

#### A restaurant application that lets users input the names of burgers they'd like to eat!

## About 
This app utilizes GET, POST, PUT and DELETE routes to log burgers into a MySQL database. 

When a user submits a burger's name, the app displays the burger at the top of the page. The new burger is not only created on the front-end, it is newly created in the database with an "id", "burger_name" and "devoured" boolean value.

![MySQLBurger](/assets/images/mySQLBurger.png)

The newly created burger now also has an associated button. This button invites the user to "Devour" it. When the user clicks "Devour", the burger moves to the bottom of the page. The boolean value has now been updated from "false" (or 0) to "true" (or 1). 

Once the "Devoured" burger has been updated and rendered at the bottom of the page, a new button appears. This button offers the user a chance to "Delete" the burger. If the user chooses to delete the burger, the burger is removed from the front-end and disappears from view. It is also deleted from the database. 

This application follows an MVC design pattern and is built with **MySQL**, **Node**, **Express**, **Handlebars** and a homemade **ORM**.