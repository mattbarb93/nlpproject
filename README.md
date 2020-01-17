I'm finally able to send the API data from the server to the client side, however it takes me two calls to display the first one I made.

Example: 
1st call - server sends "hello!", client retrieves undefined
//
2nd call - server sends "2nd hello!", client retrieves "hello!"(info from the previous call)
