### SparkEd Mobile  

To run the  mobile, a server will need to be running, 

>`cd SparkEd-Mobile`  
`yarn install`  
`yarn run ios` ==> to run on an IOS Device  
`yarn run android` ==> to run on an Android  

in App.js

```
    Meteor.connect('ws://localhost:3000/websocket'); 
    
``` 
Change the address above to point to your SparkEd server.



