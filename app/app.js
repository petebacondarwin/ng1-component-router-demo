angular.module('app', ['ngComponentRouter', 'dialog', 'heroes', 'crisis-center'])

.config(function($locationProvider) {
  $locationProvider.html5Mode(true);
})

.run(function($router) {
  $router.config([
    { path: '/...', name: 'App', component: 'app', useAsDefault: true }
  ]);
  $router.navigate(['App']);
})

.component('app', {
  template:
    '<nav>\n' +
    '  <a ng-link="[\'CrisisCenter\']">Crisis Center</a>\n' +
    '  <a ng-link="[\'Heroes\']">Heroes</a>\n' +
    '</nav>\n' +
    '<ng-outlet></ng-outlet>\n',
  $routeConfig: [
    {path: '/crisis-center/...', name: 'CrisisCenter', component: 'crisisCenter', useAsDefault: true},
    {path: '/heroes/...', name: 'Heroes', component: 'heroes'},
    {path: '/disaster', name: 'Asteroid', redirectTo: ['CrisisCenter', 'CrisisDetail', {id:3}]}
  ]
});