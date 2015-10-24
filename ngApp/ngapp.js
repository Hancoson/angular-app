/**
 * Created by Guoxing.han on 15-3-26.
 * state驱动view
 * resolve：在路由到达前预载入一系列依赖或者数据，然后注入到控制器中。
 */
angular.module('ngApp', ['ui.router', 'oc.lazyLoad', 'ngResource']);

angular
    .module('ngApp')
    //.directive('ngEnter', function () {
    //    return function (scope, element, attrs) {
    //        element.bind("keydown keypress", function (event) {
    //            if (event.which === 13) {
    //                scope.$apply(function () {
    //                    scope.$eval(attrs.ngEnter);
    //                });
    //
    //                event.preventDefault();
    //            }
    //        });
    //    };
    //})
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $ocLazyLoadProvider, $compileProvider) {
        $locationProvider.hashPrefix('');
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|kaowo|ftp|mailto|chrome-extension):/);

        $urlRouterProvider.otherwise('/404'); //设置默认路由还需要使用ngRoute来设置

        $stateProvider
            //404
            .state('404', {
                title        : '404',
                url          : '/404',
                defaultParams: {
                    item: 1
                },
                templateUrl  : '404.html'
            })
            //
            .state('test', {
                title        : '这个是title',
                content      : '这个是描述',
                url          : '/test/:id',
                defaultParams: {
                    item: 1
                },
                controller   : 'indexCtrl',
                //views        : {
                //},
                templateUrl  : 'ngApp/partial/test.html',
                resolve      : {
                    loadOcModal: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load(
                            [
                                'ngApp/partial/index.css',
                                //'ngApp/services/ngService.js',
                                'ngApp/partial/indexCtrl.js'
                            ]
                        )
                    }]
                }
            });
//$locationProvider.html5Mode(true);
    })
    .
    run(['$location', '$rootScope', function ($location, $rootScope) {
        $rootScope.$on('$stateChangeStart',
            function (event, toState) {

                $rootScope.title = toState.title;
                $rootScope.content = toState.content;
            })
    }]);
