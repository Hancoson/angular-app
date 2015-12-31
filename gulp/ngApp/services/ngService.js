/**
 * Created by han on 15-8-24.
 * $location 暴露当前地址栏的
 * $location 是一个创建资源对象的工厂，用来创建同服务端交互的对象
 */
angular.module('ngApp')
    .factory('ngService',['$resource', '$location', function ($resource, $location) {

        var
            domain = $location.host(),
            env, host,
            hosts = {
                'dev' : 'http://127.0.0.1:7001/src',
                'main': 'http://api.baidu.com/v1'
            },

            mshosts = {
                'dev' : 'http://127.0.0.1:7002/src',
                'main': 'http://ms.baidu.com',
            };

        domainHosts = {
            'm.baidu.com'         : 'main',
            'local2main.baidu.com': 'main',
            '127.0.0.1:9001'      : 'dev'
        };
        env = domainHosts[domain] || 'dev';
        //host=hosts[env];

        host = {
            api: hosts[env],
            ms : mshosts[env]
        };


        return {
            /*recruit: $resource(host.api + '/cart/add_sku_to_cart.html', {}, {
             //其中init方法为自定义，因为需要用到method:'JSONP'，所以不能使用get、query等自带方法，数组直接用isArray设置。
             init: {
             method : 'JSONP',
             format: 'json',
             params: {callback: 'JSON_CALLBACK'},
             isArray: true
             }
             })*/
            recruit: $resource(host.api + '/json/a.json', {})
        }
    }]);