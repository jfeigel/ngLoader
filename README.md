# ngLoader
Loading animation for AngularJS

Used the SVG loading animations from <a href="http://codepen.io/aurer/pen/jEGbA">this Pen</a> by <a href="http://codepen.io/aurer/">Aurer</a>.


##### 1. Install the module via bower.
```
bower install ngLoader
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

Only the `working` attribute is required.
- `disable-background` defaults to `false`
- `message` defaults to `undefined`
- `template` defaults to `1` (Can be 1-8)

Example plunk can be found at http://plnkr.co/edit/IooEvgf5azTAzDULLLEJ?p=preview