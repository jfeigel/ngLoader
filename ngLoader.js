/**!
 * AngularJS Loader animation
 * @author  James Feigel <james.feigel@gmail.com>
 * @version 1.0.0
 */
angular.module('ngLoaderTemplates', ['template/ngLoader/ngLoaderTemplate1.html', 'template/ngLoader/ngLoaderTemplate2.html', 'template/ngLoader/ngLoaderTemplate3.html', 'template/ngLoader/ngLoaderTemplate4.html', 'template/ngLoader/ngLoaderTemplate5.html', 'template/ngLoader/ngLoaderTemplate6.html', 'template/ngLoader/ngLoaderTemplate7.html', 'template/ngLoader/ngLoaderTemplate8.html', 'template/ngLoader/ngLoaderTemplate9.html']);

angular.module('template/ngLoader/ngLoaderTemplate1.html', []).run(['$templateCache',
  function($templateCache) {
    $templateCache.put('template/ngLoader/ngLoaderTemplate1.html',
      "<div class=\"loader\" data-ng-show=\"working\" style=\"position: absolute;top: 0px;bottom: 0px;left: 0px;right: 0px;height: 100% !important;width: 100% !important;\">\n" +
      "  <div class=\"loader-content\" style=\"position: absolute;top: 50%;left: 50%;line-height: 1;max-width: 50%;padding: 7px;-o-border-radius: 5px;border-radius: 5px;background-color: rgba(0, 0, 0, 0.5);color: #ffffff;text-transform: uppercase;text-align: center;word-break: break-word;z-index: 1;\">\n" +
      "    <svg version=\"1.1\" id=\"loader_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n" +
      "   width=\"30px\" height=\"30px\" viewBox=\"0 0 40 40\" enable-background=\"new 0 0 40 40\" xml:space=\"preserve\">\n" +
      "      <path opacity=\"0.2\" fill=\"#FFFFFF\" d=\"M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946\n" +
      "        s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634\n" +
      "        c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z\"/>\n" +
      "      <path fill=\"#FFFFFF\" d=\"M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0\n" +
      "        C22.32,8.481,24.301,9.057,26.013,10.047z\">\n" +
      "        <animateTransform attributeType=\"xml\"\n" +
      "          attributeName=\"transform\"\n" +
      "          type=\"rotate\"\n" +
      "          from=\"0 20 20\"\n" +
      "          to=\"360 20 20\"\n" +
      "          dur=\"0.5s\"\n" +
      "          repeatCount=\"indefinite\"/>\n" +
      "      </path>\n" +
      "    </svg>\n" +
      "    <p style=\"margin: 5px 0 -5px;color: #ccc;\" data-ng-bind-html=\"message\" data-ng-cloak data-ng-show=\"message\"></p>\n" +
      "    <p style=\"margin: 5px 0 -5px;color: #ccc;\" data-ng-bind=\"progressPercentage + '%'\" data-ng-cloak data-ng-show=\"progressPercentage !== undefined && progressPercentage !== null\"></p>\n" +
      "  </div>\n" +
      "</div>");
}]);
angular.module('template/ngLoader/ngLoaderTemplate2.html', []).run(['$templateCache',
  function($templateCache) {
    $templateCache.put('template/ngLoader/ngLoaderTemplate2.html',
      "<div class=\"loader\" data-ng-show=\"working\" style=\"position: absolute;top: 0px;bottom: 0px;left: 0px;right: 0px;height: 100% !important;width: 100% !important;\">\n" +
      "  <div class=\"loader-content\" style=\"position: absolute;top: 50%;left: 50%;line-height: 1;max-width: 50%;padding: 7px;-o-border-radius: 5px;border-radius: 5px;background-color: rgba(0, 0, 0, 0.5);color: #ffffff;text-transform: uppercase;text-align: center;word-break: break-word;z-index: 1;\">\n" +
      "    <svg version=\"1.1\" id=\"loader_2\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n" +
      "     width=\"30px\" height=\"30px\" viewBox=\"0 0 50 50\" style=\"enable-background:new 0 0 50 50;\" xml:space=\"preserve\">\n" +
      "      <path fill=\"#FFFFFF\" d=\"M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z\">\n" +
      "        <animateTransform attributeType=\"xml\"\n" +
      "          attributeName=\"transform\"\n" +
      "          type=\"rotate\"\n" +
      "          from=\"0 25 25\"\n" +
      "          to=\"360 25 25\"\n" +
      "          dur=\"0.6s\"\n" +
      "          repeatCount=\"indefinite\"/>\n" +
      "      </path>\n" +
      "    </svg>\n" +
      "    <p style=\"margin: 5px 0 -5px;color: #ccc;\" data-ng-bind-html=\"message\" data-ng-cloak data-ng-show=\"message\"></p>\n" +
      "    <p style=\"margin: 5px 0 -5px;color: #ccc;\" data-ng-bind=\"progressPercentage + '%'\" data-ng-cloak data-ng-show=\"progressPercentage !== undefined && progressPercentage !== null\"></p>\n" +
      "  </div>\n" +
      "</div>");
}]);
angular.module('template/ngLoader/ngLoaderTemplate3.html', []).run(['$templateCache',
  function($templateCache) {
    $templateCache.put('template/ngLoader/ngLoaderTemplate3.html',
      "<div class=\"loader\" data-ng-show=\"working\" style=\"position: absolute;top: 0px;bottom: 0px;left: 0px;right: 0px;height: 100% !important;width: 100% !important;\">\n" +
      "  <div class=\"loader-content\" style=\"position: absolute;top: 50%;left: 50%;line-height: 1;max-width: 50%;padding: 7px;-o-border-radius: 5px;border-radius: 5px;background-color: rgba(0, 0, 0, 0.5);color: #ffffff;text-transform: uppercase;text-align: center;word-break: break-word;z-index: 1;\">\n" +
      "    <svg version=\"1.1\" id=\"loader_3\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n" +
      "     width=\"30px\" height=\"30px\" viewBox=\"0 0 50 50\" style=\"enable-background:new 0 0 50 50;\" xml:space=\"preserve\">\n" +
      "      <path fill=\"#FFFFFF\" d=\"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z\">\n" +
      "        <animateTransform attributeType=\"xml\"\n" +
      "          attributeName=\"transform\"\n" +
      "          type=\"rotate\"\n" +
      "          from=\"0 25 25\"\n" +
      "          to=\"360 25 25\"\n" +
      "          dur=\"0.6s\"\n" +
      "          repeatCount=\"indefinite\"/>\n" +
      "      </path>\n" +
      "    </svg>\n" +
      "    <p style=\"margin: 5px 0 -5px;color: #ccc;\" data-ng-bind-html=\"message\" data-ng-cloak data-ng-show=\"message\"></p>\n" +
      "    <p style=\"margin: 5px 0 -5px;color: #ccc;\" data-ng-bind=\"progressPercentage + '%'\" data-ng-cloak data-ng-show=\"progressPercentage !== undefined && progressPercentage !== null\"></p>\n" +
      "  </div>\n" +
      "</div>");
}]);
angular.module('template/ngLoader/ngLoaderTemplate4.html', []).run(['$templateCache',
  function($templateCache) {
    $templateCache.put('template/ngLoader/ngLoaderTemplate4.html',
      "<div class=\"loader\" data-ng-show=\"working\" style=\"position: absolute;top: 0px;bottom: 0px;left: 0px;right: 0px;height: 100% !important;width: 100% !important;\">\n" +
      "  <div class=\"loader-content\" style=\"position: absolute;top: 50%;left: 50%;line-height: 1;max-width: 50%;padding: 7px;-o-border-radius: 5px;border-radius: 5px;background-color: rgba(0, 0, 0, 0.5);color: #ffffff;text-transform: uppercase;text-align: center;word-break: break-word;z-index: 1;\">\n" +
      "    <svg version=\"1.1\" id=\"loader_4\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n" +
      "     width=\"16px\" height=\"16px\" viewBox=\"0 0 24 24\" style=\"enable-background:new 0 0 50 50;\" xml:space=\"preserve\">\n" +
      "      <rect x=\"0\" y=\"0\" width=\"4\" height=\"7\" fill=\"#FFFFFF\">\n" +
      "        <animateTransform  attributeType=\"xml\"\n" +
      "          attributeName=\"transform\" type=\"scale\"\n" +
      "          values=\"1,1; 1,3; 1,1\"\n" +
      "          begin=\"0s\" dur=\"0.6s\" repeatCount=\"indefinite\" />       \n" +
      "      </rect>\n" +
      "      <rect x=\"10\" y=\"0\" width=\"4\" height=\"7\" fill=\"#FFFFFF\">\n" +
      "        <animateTransform  attributeType=\"xml\"\n" +
      "          attributeName=\"transform\" type=\"scale\"\n" +
      "          values=\"1,1; 1,3; 1,1\"\n" +
      "          begin=\"0.2s\" dur=\"0.6s\" repeatCount=\"indefinite\" />       \n" +
      "      </rect>\n" +
      "      <rect x=\"20\" y=\"0\" width=\"4\" height=\"7\" fill=\"#FFFFFF\">\n" +
      "        <animateTransform  attributeType=\"xml\"\n" +
      "          attributeName=\"transform\" type=\"scale\"\n" +
      "          values=\"1,1; 1,3; 1,1\"\n" +
      "          begin=\"0.4s\" dur=\"0.6s\" repeatCount=\"indefinite\" />       \n" +
      "      </rect>\n" +
      "    </svg>\n" +
      "    <p style=\"margin: 5px 0 -5px;color: #ccc;\" data-ng-bind-html=\"message\" data-ng-cloak data-ng-show=\"message\"></p>\n" +
      "    <p style=\"margin: 5px 0 -5px;color: #ccc;\" data-ng-bind=\"progressPercentage + '%'\" data-ng-cloak data-ng-show=\"progressPercentage !== undefined && progressPercentage !== null\"></p>\n" +
      "  </div>\n" +
      "</div>");
}]);
angular.module('template/ngLoader/ngLoaderTemplate5.html', []).run(['$templateCache',
  function($templateCache) {
    $templateCache.put('template/ngLoader/ngLoaderTemplate5.html',
      "<div class=\"loader\" data-ng-show=\"working\" style=\"position: absolute;top: 0px;bottom: 0px;left: 0px;right: 0px;height: 100% !important;width: 100% !important;\">\n" +
      "  <div class=\"loader-content\" style=\"position: absolute;top: 50%;left: 50%;line-height: 1;max-width: 50%;padding: 7px;-o-border-radius: 5px;border-radius: 5px;background-color: rgba(0, 0, 0, 0.5);color: #ffffff;text-transform: uppercase;text-align: center;word-break: break-word;z-index: 1;\">\n" +
      "    <svg version=\"1.1\" id=\"loader_5\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n" +
      "     width=\"16px\" height=\"20px\" viewBox=\"0 0 24 30\" style=\"enable-background:new 0 0 50 50;\" xml:space=\"preserve\">\n" +
      "      <rect x=\"0\" y=\"0\" width=\"4\" height=\"10\" fill=\"#FFFFFF\">\n" +
      "        <animateTransform attributeType=\"xml\"\n" +
      "          attributeName=\"transform\" type=\"translate\"\n" +
      "          values=\"0 0; 0 20; 0 0\"\n" +
      "          begin=\"0\" dur=\"0.6s\" repeatCount=\"indefinite\" />\n" +
      "      </rect>\n" +
      "      <rect x=\"10\" y=\"0\" width=\"4\" height=\"10\" fill=\"#FFFFFF\">\n" +
      "        <animateTransform attributeType=\"xml\"\n" +
      "          attributeName=\"transform\" type=\"translate\"\n" +
      "          values=\"0 0; 0 20; 0 0\"\n" +
      "          begin=\"0.2s\" dur=\"0.6s\" repeatCount=\"indefinite\" />\n" +
      "      </rect>\n" +
      "      <rect x=\"20\" y=\"0\" width=\"4\" height=\"10\" fill=\"#FFFFFF\">\n" +
      "        <animateTransform attributeType=\"xml\"\n" +
      "          attributeName=\"transform\" type=\"translate\"\n" +
      "          values=\"0 0; 0 20; 0 0\"\n" +
      "          begin=\"0.4s\" dur=\"0.6s\" repeatCount=\"indefinite\" />\n" +
      "      </rect>\n" +
      "    </svg>\n" +
      "    <p style=\"margin: 5px 0 -5px;color: #ccc;\" data-ng-bind-html=\"message\" data-ng-cloak data-ng-show=\"message\"></p>\n" +
      "    <p style=\"margin: 5px 0 -5px;color: #ccc;\" data-ng-bind=\"progressPercentage + '%'\" data-ng-cloak data-ng-show=\"progressPercentage !== undefined && progressPercentage !== null\"></p>\n" +
      "  </div>\n" +
      "</div>");
}]);
angular.module('template/ngLoader/ngLoaderTemplate6.html', []).run(['$templateCache',
  function($templateCache) {
    $templateCache.put('template/ngLoader/ngLoaderTemplate6.html',
      "<div class=\"loader\" data-ng-show=\"working\" style=\"position: absolute;top: 0px;bottom: 0px;left: 0px;right: 0px;height: 100% !important;width: 100% !important;\">\n" +
      "  <div class=\"loader-content\" style=\"position: absolute;top: 50%;left: 50%;line-height: 1;max-width: 50%;padding: 7px;-o-border-radius: 5px;border-radius: 5px;background-color: rgba(0, 0, 0, 0.5);color: #ffffff;text-transform: uppercase;text-align: center;word-break: break-word;z-index: 1;\">\n" +
      "    <svg version=\"1.1\" id=\"loader_6\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n" +
      "     width=\"16px\" height=\"20px\" viewBox=\"0 0 24 30\" style=\"enable-background:new 0 0 50 50;\" xml:space=\"preserve\">\n" +
      "      <rect x=\"0\" y=\"13\" width=\"4\" height=\"5\" fill=\"#FFFFFF\">\n" +
      "        <animate attributeName=\"height\" attributeType=\"XML\"\n" +
      "          values=\"5;21;5\" \n" +
      "          begin=\"0s\" dur=\"0.6s\" repeatCount=\"indefinite\" />\n" +
      "        <animate attributeName=\"y\" attributeType=\"XML\"\n" +
      "          values=\"13; 5; 13\"\n" +
      "          begin=\"0s\" dur=\"0.6s\" repeatCount=\"indefinite\" />\n" +
      "      </rect>\n" +
      "      <rect x=\"10\" y=\"13\" width=\"4\" height=\"5\" fill=\"#FFFFFF\">\n" +
      "        <animate attributeName=\"height\" attributeType=\"XML\"\n" +
      "          values=\"5;21;5\" \n" +
      "          begin=\"0.15s\" dur=\"0.6s\" repeatCount=\"indefinite\" />\n" +
      "        <animate attributeName=\"y\" attributeType=\"XML\"\n" +
      "          values=\"13; 5; 13\"\n" +
      "          begin=\"0.15s\" dur=\"0.6s\" repeatCount=\"indefinite\" />\n" +
      "      </rect>\n" +
      "      <rect x=\"20\" y=\"13\" width=\"4\" height=\"5\" fill=\"#FFFFFF\">\n" +
      "        <animate attributeName=\"height\" attributeType=\"XML\"\n" +
      "          values=\"5;21;5\" \n" +
      "          begin=\"0.3s\" dur=\"0.6s\" repeatCount=\"indefinite\" />\n" +
      "        <animate attributeName=\"y\" attributeType=\"XML\"\n" +
      "          values=\"13; 5; 13\"\n" +
      "          begin=\"0.3s\" dur=\"0.6s\" repeatCount=\"indefinite\" />\n" +
      "      </rect>\n" +
      "    </svg>\n" +
      "    <p style=\"margin: 5px 0 -5px;color: #ccc;\" data-ng-bind-html=\"message\" data-ng-cloak data-ng-show=\"message\"></p>\n" +
      "    <p style=\"margin: 5px 0 -5px;color: #ccc;\" data-ng-bind=\"progressPercentage + '%'\" data-ng-cloak data-ng-show=\"progressPercentage !== undefined && progressPercentage !== null\"></p>\n" +
      "  </div>\n" +
      "</div>");
}]);
angular.module('template/ngLoader/ngLoaderTemplate7.html', []).run(['$templateCache',
  function($templateCache) {
    $templateCache.put('template/ngLoader/ngLoaderTemplate7.html',
      "<div class=\"loader\" data-ng-show=\"working\" style=\"position: absolute;top: 0px;bottom: 0px;left: 0px;right: 0px;height: 100% !important;width: 100% !important;\">\n" +
      "  <div class=\"loader-content\" style=\"position: absolute;top: 50%;left: 50%;line-height: 1;max-width: 50%;padding: 7px;-o-border-radius: 5px;border-radius: 5px;background-color: rgba(0, 0, 0, 0.5);color: #ffffff;text-transform: uppercase;text-align: center;word-break: break-word;z-index: 1;\">\n" +
      "    <svg version=\"1.1\" id=\"loader_7\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n" +
      "     width=\"15px\" height=\"18px\" viewBox=\"0 0 25 30\" style=\"enable-background:new 0 0 50 50;\" xml:space=\"preserve\">\n" +
      "      <rect x=\"0\" y=\"8\" width=\"4\" height=\"20\" fill=\"#FFFFFF\">\n" +
      "        <animate attributeName=\"opacity\" attributeType=\"XML\"\n" +
      "          values=\"1; .2; 1\" \n" +
      "          begin=\"0s\" dur=\"0.6s\" repeatCount=\"indefinite\" />\n" +
      "      </rect>\n" +
      "      <rect x=\"7\" y=\"8\" width=\"4\" height=\"20\" fill=\"#FFFFFF\">\n" +
      "        <animate attributeName=\"opacity\" attributeType=\"XML\"\n" +
      "          values=\"1; .2; 1\" \n" +
      "          begin=\"0.2s\" dur=\"0.6s\" repeatCount=\"indefinite\" />\n" +
      "      </rect>\n" +
      "      <rect x=\"14\" y=\"8\" width=\"4\" height=\"20\" fill=\"#FFFFFF\">\n" +
      "        <animate attributeName=\"opacity\" attributeType=\"XML\"\n" +
      "          values=\"1; .2; 1\" \n" +
      "          begin=\"0.4s\" dur=\"0.6s\" repeatCount=\"indefinite\" />\n" +
      "      </rect>\n" +
      "      <rect x=\"21\" y=\"8\" width=\"4\" height=\"20\" fill=\"#FFFFFF\">\n" +
      "        <animate attributeName=\"opacity\" attributeType=\"XML\"\n" +
      "          values=\"1; .2; 1\" \n" +
      "          begin=\"0.4s\" dur=\"0.6s\" repeatCount=\"indefinite\" />\n" +
      "      </rect>\n" +
      "    </svg>\n" +
      "    <p style=\"margin: 5px 0 -5px;color: #ccc;\" data-ng-bind-html=\"message\" data-ng-cloak data-ng-show=\"message\"></p>\n" +
      "    <p style=\"margin: 5px 0 -5px;color: #ccc;\" data-ng-bind=\"progressPercentage + '%'\" data-ng-cloak data-ng-show=\"progressPercentage !== undefined && progressPercentage !== null\"></p>\n" +
      "  </div>\n" +
      "</div>");
}]);
angular.module('template/ngLoader/ngLoaderTemplate8.html', []).run(['$templateCache',
  function($templateCache) {
    $templateCache.put('template/ngLoader/ngLoaderTemplate8.html',
      "<div class=\"loader\" data-ng-show=\"working\" style=\"position: absolute;top: 0px;bottom: 0px;left: 0px;right: 0px;height: 100% !important;width: 100% !important;\">\n" +
      "  <div class=\"loader-content\" style=\"position: absolute;top: 50%;left: 50%;line-height: 1;max-width: 50%;padding: 7px;-o-border-radius: 5px;border-radius: 5px;background-color: rgba(0, 0, 0, 0.5);color: #ffffff;text-transform: uppercase;text-align: center;word-break: break-word;z-index: 1;\">\n" +
      "    <svg version=\"1.1\" id=\"loader_8\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n" +
      "     width=\"16px\" height=\"20px\" viewBox=\"0 0 24 30\" style=\"enable-background:new 0 0 50 50;\" xml:space=\"preserve\">\n" +
      "      <rect x=\"0\" y=\"10\" width=\"4\" height=\"10\" fill=\"#FFFFFF\" opacity=\"0.2\">\n" +
      "        <animate attributeName=\"opacity\" attributeType=\"XML\" values=\"0.2; 1; .2\" begin=\"0s\" dur=\"0.6s\" repeatCount=\"indefinite\" />\n" +
      "        <animate attributeName=\"height\" attributeType=\"XML\" values=\"10; 20; 10\" begin=\"0s\" dur=\"0.6s\" repeatCount=\"indefinite\" />\n" +
      "        <animate attributeName=\"y\" attributeType=\"XML\" values=\"10; 5; 10\" begin=\"0s\" dur=\"0.6s\" repeatCount=\"indefinite\" />\n" +
      "      </rect>\n" +
      "      <rect x=\"10\" y=\"10\" width=\"4\" height=\"10\" fill=\"#FFFFFF\"  opacity=\"0.2\">\n" +
      "        <animate attributeName=\"opacity\" attributeType=\"XML\" values=\"0.2; 1; .2\" begin=\"0.15s\" dur=\"0.6s\" repeatCount=\"indefinite\" />\n" +
      "        <animate attributeName=\"height\" attributeType=\"XML\" values=\"10; 20; 10\" begin=\"0.15s\" dur=\"0.6s\" repeatCount=\"indefinite\" />\n" +
      "        <animate attributeName=\"y\" attributeType=\"XML\" values=\"10; 5; 10\" begin=\"0.15s\" dur=\"0.6s\" repeatCount=\"indefinite\" />\n" +
      "      </rect>\n" +
      "      <rect x=\"20\" y=\"10\" width=\"4\" height=\"10\" fill=\"#FFFFFF\"  opacity=\"0.2\">\n" +
      "        <animate attributeName=\"opacity\" attributeType=\"XML\" values=\"0.2; 1; .2\" begin=\"0.3s\" dur=\"0.6s\" repeatCount=\"indefinite\" />\n" +
      "        <animate attributeName=\"height\" attributeType=\"XML\" values=\"10; 20; 10\" begin=\"0.3s\" dur=\"0.6s\" repeatCount=\"indefinite\" />\n" +
      "        <animate attributeName=\"y\" attributeType=\"XML\" values=\"10; 5; 10\" begin=\"0.3s\" dur=\"0.6s\" repeatCount=\"indefinite\" />\n" +
      "      </rect>\n" +
      "    </svg>\n" +
      "    <p style=\"margin: 5px 0 -5px;color: #ccc;\" data-ng-bind-html=\"message\" data-ng-cloak data-ng-show=\"message\"></p>\n" +
      "    <p style=\"margin: 5px 0 -5px;color: #ccc;\" data-ng-bind=\"progressPercentage + '%'\" data-ng-cloak data-ng-show=\"progressPercentage !== undefined && progressPercentage !== null\"></p>\n" +
      "  </div>\n" +
      "</div>");
}]);
angular.module('template/ngLoader/ngLoaderTemplate9.html', []).run(['$templateCache',
  function($templateCache) {
    $templateCache.put('template/ngLoader/ngLoaderTemplate9.html',
      "<div class=\"loader\" data-ng-show=\"working\" style=\"position: absolute;top: 0px;bottom: 0px;left: 0px;right: 0px;height: 100% !important;width: 100% !important;\">\n" +
      "  <div class=\"loader-content\" style=\"position: absolute;top: 50%;left: 50%;line-height: 1;max-width: 50%;padding: 7px;-o-border-radius: 5px;border-radius: 5px;background-color: rgba(0, 0, 0, 0.5);color: #ffffff;text-transform: uppercase;text-align: center;word-break: break-word;z-index: 1;\">\n" +
      "    <div class=\"loader-bars\">\n" +
      "      <span class=\"bar1 bar\"></span>\n" +
      "      <span class=\"bar2 bar\"></span>\n" +
      "      <span class=\"bar3 bar\"></span>\n" +
      "    </div>\n" +
      "    <p style=\"margin: 5px 0 -5px;color: #ccc;\" data-ng-bind-html=\"message\" data-ng-cloak data-ng-show=\"message\"></p>\n" +
      "    <p style=\"margin: 5px 0 -5px;color: #ccc;\" data-ng-bind=\"progressPercentage + '%'\" data-ng-cloak data-ng-show=\"progressPercentage !== undefined && progressPercentage !== null\"></p>\n" +
      "  </div>\n" +
      "</div>");
}]);

angular.module('ngLoader', ['ngLoaderTemplates'])
.directive('loader', ['$timeout',
  function($timeout) {
    return {
      scope: {
        working: '=',
        progressPercentage: '=?',
        message: '=?',
        disableBackground: '@?'
      },
      restrict: 'AE',
      replace: true,
      templateUrl: function(tElem, tAttrs) {
        if (tAttrs.template !== undefined) {
          if (isNaN(parseInt(tAttrs.template))) {
            console.error('Directive Error! Attribute \'template\' must be a number. Found \'' + tAttrs.template + '\'');
          }
          else if (parseInt(tAttrs.template) < 1 || parseInt(tAttrs.template) > 9) {
            console.error('Directive Error! Attribute \'template\' must be a number between 1 and 9. Found \'' + tAttrs.template + '\'');
          }
          else {
            return 'template/ngLoader/ngLoaderTemplate' + tAttrs.template + '.html';
          }
        }
        return 'template/ngLoader/ngLoaderTemplate9.html';
      },
      link: function(scope, elem, attrs) {
        scope.disableBackground = scope.$eval(scope.disableBackground);

        if (scope.disableBackground === true) {
          elem.css({
            'background': 'rgba(0,0,0,0.225)',
            'z-index': '9999'
          });
        } else if (scope.disableBackground === undefined) {

        } else {
          console.error('Directive Error! Attribute \'disable-background\' must be \'true\' for \'false\'. Found \'' + scope.disableBackground + '\'');
        }

        var content = elem.find('div')[0];

        function positionLoader(watchFunction) {
          $timeout(function() {
            content.style.marginTop = -(content.offsetHeight / 2)+'px';
            content.style.marginLeft = -(content.offsetWidth / 2)+'px';
          });
        }

        var positionWatch = scope.$watch('working', function(newValue, oldValue) {
          if (newValue === true) {
            positionLoader(positionWatch);
          }
        });

        var messageWatch = scope.$watch('message', function(newValue, oldValue) {
          if (newValue != oldValue) {
            positionLoader(messageWatch);
          }
        });
      }
    };
}]);
