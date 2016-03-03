# ngLoader
Loading animation for AngularJS

Used the SVG loading animations from <a href="http://codepen.io/aurer/pen/jEGbA">this Pen</a> by <a href="http://codepen.io/aurer/">Aurer</a>.

This module can be used in any version of Angular (see the Plunk below). All major browsers, except IE, are supported. Template 9, the default and now using CSS animations, is <a href="http://caniuse.com/#feat=css-animation">supported in IE10+</a> and the other templates are <a href="http://caniuse.com/#feat=svg-smil">not supported in IE</a>.


##### 1. Install the module via bower.
```
bower install ng-loaders
```

##### 2. Add the module as a dependency
```JavaScript
angular.module('app',['ngLoader']);
```

##### 3. Include the CSS file in your HTML file or import it in your CSS
```HTML
<link rel="stylesheet" href="/bower_components/ngLoader/ngLoader.min.css">
```

OR

```CSS
@import "bower_components/ngLoader/ngLoader.min.css";
```

##### 4. Include the JS file in your HTML file
```HTML
<script src="bower_components/ngLoader/ngLoader.min.js"></script>
```

##### 5. Add the loader in your view and ensure the corresponding scope variable is defined
```HTML
<loader
	working="scopeWorkingVariable"
	disable-background="true"
	message="scopeMessageVariable"
	template="9">
</loader>
```

## Example
This loader can be used in many instances, one in which being for AJAX requests using Anuglar's <a href="https://docs.angularjs.org/api/ng/service/$http">$http</a> service.
Set your scope variable to true before the request and in the `finally` condition of the promised returned.

Example plunk can be found <a href="http://plnkr.co/edit/IooEvgf5azTAzDULLLEJ?p=preview">here</a>.
```JavaScript
$scope.working = true;
$scope.message = 'Loading...'
$http.get('<api endpoint>').then(
	function(success) {
		console.log('Success! ' + success);
	},
	function(error) {
		console.error('Error! ' + error);
	}
)['finally'](function() {
	$scope.working = false;
});
```

## Options
Only the `working` attribute is required.

| Attribute          | Default                  | Accepted Values          |
| ------------------ | ------------------------ | ------------------------ |
| working            | _name of scope variable_ | Any valid scope variable |
| disable-background | _false_                  | true or false            |
| message            | _undefined_              | Any string               |
| template           | _9_                      | Any number 1-9           |

## Notes
Styles of the loader can be updated / modified by targeting the `loader-content` class.
