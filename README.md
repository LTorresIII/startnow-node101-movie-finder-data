*Movie Finder Data*

Dscription-
	Create a server using the Express framework
	Log all incoming requests with the morgan logging library
	Accept requests for the Open Movie DataBase (OMDB) API
	Make the requests to the OMDB using the axios library
	Cache, or store, the responses for subsequent requests
	Ensure the data is updated at least once a day

Instructions-
	Build a web server that will respond to GET requests for http://localhost:3000/ and return the data from the OMDb API.
	When making a second request to the same endpoint http://localhost:3000/?i=tt3896198, 
	the server should not return data from the OMDB API, but instead from some object or array.

	Open a terminal
	Open the project folder in VS Code using the following command: code ~/oca/startnow-movie-finder-data
	Run: npm install.

	You'll notice the OMDb API requires an apikey When making calls to the OMDB API make sure to append the '&apikey=8730e0e' parameter
	
	Install the express, morgan, and axios module using npm.

Results-
	Server should log each request using morgan's dev format
	Server should indicate when it is listening and on which port
	Server should respond to GET requests to /?i=tt3896198 with movie data
	Server should respond to GET requests to /?i=tt3896198 with movie data without fetching from the OMDb api