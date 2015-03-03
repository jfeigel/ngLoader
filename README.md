# ngLoader
Loading animation for AngularJS

Used the SVG loading animations from <a href="http://codepen.io/aurer/pen/jEGbA">this Pen</a> by <a href="http://codepen.io/aurer/">Aurer</a>.

This module can be used in any version of Angular (see the Plunk below). All major browsers, except IE, are <a href="http://caniuse.com/#feat=svg-smil">supported</a>.


##### 1. Install the module via bower.
```
bower install ng-loaders
```

##### 2. Add the module as a dependency
```JavaScript
angular.module('app',['ngLoader']);
```


##### 3. Include the file in your html file
```HTML
<script src="bower_components/ngLoader/ngLoader.min.js"></script>
```

##### 4. Add the loader in your view and ensure the corresponding scope variable is defined
```HTML
<loader
	working="scopeVariable"
	disable-background="true"
	message="Loading..."
	template="1">
</loader>
```

## Example
This loader can be used in many instances, one in which being for AJAX requests using Anuglar's <a href="https://docs.angularjs.org/api/ng/service/$http">$http</a> service.
Set your scope variable to true before the request and in the `finally` condition of the promised returned.

Example plunk can be found <a href="http://plnkr.co/edit/IooEvgf5azTAzDULLLEJ?p=preview">here</a>.
```JavaScript
$scope.working = true;
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
| template           | _1_                      | Any number 1-8           |