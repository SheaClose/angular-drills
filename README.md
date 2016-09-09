## Set 2

``6``
Create an app that has three routes (using ui-router):
* home `/`
* sign up `/signup`
* details `/details`

Create templates for each and a simple menu that allows you to navigate between all three routes.

Use any of the APIs listed in app #4 above.  Get data in the details screen. Show that data on the details state/view. Be sure the call to retrieve the data resides in a service.

``7``
Create a simple element directive that loads in a header from a template using templateUrl

``8``
Create a "login" element directive that includes two text inputs, "username" and "password", and a button ("login"). When the login button is clicked, show an alert.

``9``
Create an attribute directive that will be applied to an input type=text. When clicked, the directive should highlight/select all the text in the input.

``10``
Create an element directive that is passed an image string via an attribute (isolated scope) and renders the img via an HTML img tag.

Example markup
```
<my-directive img-src="https://upload.wikimedia.org/wikipedia/en/f/ff/SuccessKid.jpg"></my-directive>
```
