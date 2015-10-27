/**
 * Created by Guoxing.han on 2015/10/01.
 */
angular.module('ngApp')
    .controller('indexCtrl', ['$scope', '$rootScope', '$state', function ($scope, $rootScope, $state) {
        //逻辑js
        //……
        input = {
            cuid: $state.params.id
        };
        console.log(input.cuid);
        $scope.ID = input.cuid;
        $rootScope.title = '这个是title';
        $rootScope.content = '这个是描述';

        //代码加载完执行
        $scope.$on('$viewContentLoaded', function () {

            //……
        });
    }]);