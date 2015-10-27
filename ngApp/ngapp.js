/**
 * Created by Guoxing.han on 15-3-26.
 * state驱动view
 * resolve：在路由到达前预载入一系列依赖或者数据，然后注入到控制器中。
 * $stateChangeStart： 当模板开始解析之前触发
 * * $stateChangeSuccess - 当模板解析完成后触发
 * * $stateChangeError - 当模板解析过程中发生错误时触发
 * * $viewContentLoading - 当视图开始加载，DOM渲染完成之前触发，该事件将在$scope链上广播此事件。
 * * $viewContentLoaded - 当视图加载完成，DOM渲染完成之后触发，视图所在的$scope发出该事件。
 * $stateProvider：加载模块到view
 */
angular.module('ngApp', ['ui.router', 'oc.lazyLoad', 'ngResource']);

var ngApp = angular.module('ngApp');
//ngApp.directive('ngEnter', function () {
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
ngApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider, $ocLazyLoadProvider, $compileProvider) {
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
});
ngApp.run(['$location', '$rootScope', function ($location, $rootScope) {
    $rootScope.$on('$stateChangeStart', function (event, toState) {
        var userLogin = 0;
        if (userLogin == 0) {
            $rootScope.title = toState.title;
            $rootScope.content = toState.content;
        }
        else {

            $location.path('/404');
        }

    });

}]);
ngApp.directive('mySharedScope', function () {
    return {
        template: '123<br /> Street: 345'
    };
});
