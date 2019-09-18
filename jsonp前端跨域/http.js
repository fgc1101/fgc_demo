/*
* 自己手写一个跨域的组件
* @author 范国超
* @date 20190918
* */

(function(window,document,undefined){
    'use strict';

    var jsonp = function (url,data,callback){
        var fnSuffix = Math.random().toString().replace('.','');

        var cbFuncName = 'my_json_cb_'+ fnSuffix;

        window[cbFuncName] = callback;

        var querystring = url.indexOf('?') == -1 ? '?':'&';

        for(var key in data){
            querystring += key +'='+data[key]+'&';
        }

        querystring += 'callback='+cbFuncName;

        var scriptElement = document.createElement('script');

        scriptElement.src = url + querystring;

        document.body.appendChild(scriptElement)

    };

    window.$jsonp = jsonp;

})(window,document);