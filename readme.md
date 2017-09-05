NODE VOLUME
===========

Small server to control the volume of my computer from my smartphone.  
For now, proof of concept for fun, but may be useful !

Should not work on windows, only linux and mac (`loudness` js module)

How it works
------------

On the PC :
* express server is running (on port 3000)
* one route for volume UP (+5)
* one route for volume DOWN (-5)
* one route to load an html page

On the phone :
* load the page on the server
* one button + makes an http request to `/up` route on the server, same with - button, etc

Todo
----

[] Make html page nice
[] Update phone if volumes changes from the computer buttons
