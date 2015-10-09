/**
 * Created by Guoxing.han on 15-3-26.
 */
module.exports = function (grunt) {
    grunt.config.set('dom_munger', {

        //ngapp
        ngapp : {
            options: {
                remove : ['script[data-remove!="false"]', 'link[data-remove!="false"]'],
                append : [
                    {
                        selector: 'body',
                        html    : '<script src="ngApp/src/ngapp-lib.min.js" ></script>' +
                        '<script src="ngApp/src/ngapp.min.js?v=<%= grunt.template.today("yyyymmddHHMMss") %>" ></script>'
                    }
                ],
                prepend: [
                    {
                        selector: 'head',
                        html    : '<link rel="stylesheet" href="src/styles/common.min.css" type="text/css"/>'
                    }
                ]
            }, src : 'index.html',
            dest   : 'dist/index.html'
        }
    })
    ;
    grunt.loadNpmTasks('grunt-dom-munger');
}
;