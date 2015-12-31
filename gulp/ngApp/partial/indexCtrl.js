/**
 * Created by Guoxing.han on 2015/10/01.
 */
angular.module('ngApp')
    .controller('indexCtrl', ['$scope', '$rootScope', '$state', 'ngService', function ($scope, $rootScope, $state, servics) {
        //逻辑js
        //……
        input = {
            cuid: $state.params.id
        };
        console.log(input.cuid);
        $scope.ID = input.cuid;
        $rootScope.title = '这个是title';
        $rootScope.content = '这个是描述';
        //获取数据
        var data={
            id:1,
            name:'han'
        }
        servics.recruit.get(data, function (data) {
            console.log(data.data)

        }, function (error) {
            console.log('error');
        });

        //代码加载完执行
        $scope.$on('$viewContentLoaded', function () {

            console.log(typeof $);
            //……
        });
    }]);