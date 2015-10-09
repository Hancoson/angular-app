/**
 * Created by han on 15-8-24.
 */
angular
    .module('ngApp')
    .factory('ngService', function ($resource, $location) {

        var
            domain = $location.host(),
            env ,host,
            hosts = {
                'dev'   : 'http://192.168.8.107:1333/v1',
                'main'  : 'http://api.baidu.com/v1'
            },

            mshosts = {
                'dev': 'http://192.168.8.107:1331',
                'main': 'http://ms.baidu.com',
            };

            domainHosts={
                'm.baidu.com':'main',
                'local2main.baidu.com':'main',
                '192.168.8.107':'dev'
            };
        env=domainHosts[domain] || 'dev';
        //host=hosts[env];

        host = {
            api: hosts[env],
            ms: mshosts[env]
        };


        return {
            recruit:$resource(host.api+'/mana/apply',{}),
            //ÑûÇë×¢²á
            invitePage:$resource(host['ms']+'/adh5/activity/up',{})
        }
    });
