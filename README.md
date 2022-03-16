<!-- # Project REST-Rant

REST-Rant is an app where users can review restaurants.

*Method*  *Path*	                *Purpose*
GET	      /	                        Home page
GET	      /places	                Places index page
POST	  /places	                Create new place
GET	      /places/new	            Form page for creating a new place
GET	      /places/:id	            Details about a particular place
PUT	      /places/:id	            Update a particular place
GET	      /places/:id/edit       	Form page for editing an existing place
DELETE	  /places/:id	            Delete a particular place
POST	  /places/:id/rant       	Create a rant (comment) about a particular place
DELETE	  /places/:id/rant/:rantId	Delete a rant (comment) about a particular place
GET	      *	                        404 page (matches any route not defined above)

*Places*
*Field*    *Type*
-id        Object ID
name       String
city       String
state      String
cuisines   String
pic        String

*Rants*
*Field*    *Type*
-id        Object ID
place-id   ref(places) Object-id
rant       Boolean
rating     Number
comment    String
reviewer   String -->

Project REST-Rant
TBD - SUMMARY

Tech Usage
CSS Framework: Bootstrap

Stack: MongoDB, Express, NodeJS

Server-Side Rendering: JSX

Node Modules: method-override, dotenv, express-react-views

Routes
Method	Path	Purpose
GET	/	The home page
GET	/places	Index page listing all places
GET	/places/new	New form for a place
POST	/places	Create a new place
GET	/places/:id	Show one place in detail (Associated rants, new rant form, delete rant button)
GET	/places/:id/edit	Edit form for a place
PUT	/places/:id	Make changes to existing place
DELETE	/places/:id	Delete a place
POST	/places/:id/rant	Add rant to a place
DELETE	/places/:id/rant/:rantId	Delete a rant
Database
places

Field	Type
_id	Object ID
name	String
city	String
state	String
cuisines	String
pic	String
rants

Field	Type
_id	Object ID
place_id	ref(places) Object_Id
rant	Boolean
rating	Number
comment	String
reviewer	String
Planning
User Stories
TBD

Wireframes
TBD

Notes
Possible bonus ideas:

Update for comments
Aggregate rating for a place
Auto-complete state dropdown