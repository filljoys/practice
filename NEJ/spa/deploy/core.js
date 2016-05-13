if (typeof I$==="undefined"){I$=(function() {
    var o = {},
        f = function() {return !1;},
        cache = {};
    var is = function(data,type){
        return o.toString.call(data)==='[object '+type+']';
    };
    return function(key,func) {
        var result = cache[key],
            isfunc = is(func,'Function');
        // func is data
        if (func!=null&&!isfunc){
            result = func;
        }
        // do function defined
        if (isfunc){
            var arr = [];
            for(var i=2,l=arguments.length;i<l;i++){
                arr.push(arguments.callee(arguments[i]));
            }
            var exports = {};
            arr.push.call(arr,exports,{},f,[]);
            var ret = func.apply(null,arr)||exports;
            if (!result||!is(ret,'Object')){
                // for non-object return
                result = ret;
            }else{
                // for namespace return
                // bad performance for-in in v8 for instance
                if (!!Object.keys){
                    for(var ls=Object.keys(ret),i=0,l=ls.length,x;i<l;i++){
                        x = ls[i];
                        result[x] = ret[x];
                    }
                }else{
                    for(var x in ret){
                        result[x] = ret[x];
                    }
                }
            }
        }
        // init data
        if (result==null){
            result = {};
        }
        cache[key] = result;
        // return
        return result;
    };
})();;}
cant read file D:/workspace/git/NEJ/src/base/klass.js for utf-8, cause:
{"errno":-4058,"code":"ENOENT","syscall":"open","path":"D:\\workspace\\git\\NEJ\\src\\base\\klass.js"}
cant read file D:/workspace/git/NEJ/src/base/element.js for utf-8, cause:
{"errno":-4058,"code":"ENOENT","syscall":"open","path":"D:\\workspace\\git\\NEJ\\src\\base\\element.js"}
cant read file D:/workspace/git/NEJ/src/util/template/tpl.js for utf-8, cause:
{"errno":-4058,"code":"ENOENT","syscall":"open","path":"D:\\workspace\\git\\NEJ\\src\\util\\template\\tpl.js"}
cant read file D:/workspace/git/NEJ/src/util/dispatcher/module.js for utf-8, cause:
{"errno":-4058,"code":"ENOENT","syscall":"open","path":"D:\\workspace\\git\\NEJ\\src\\util\\dispatcher\\module.js"}
I$(8,function (_k,_t,_p,_o,_f,_r){
    // variable declaration
    var _pro;
    /**
     * 项目模块基类对象
     * @class   {_$$Module}
     * @extends {_$$AbstractModule}
     * @param   {Object}  可选配置参数，已处理参数列表如下所示
     */
    _p._$$Module = _k._$klass();
    _pro = _p._$$Module._$extend(_t._$$ModuleAbstract);
    /**
     * 从地址中解析出UMI信息
     * @return {String} UMI信息
     */
    _pro.__doParseUMIFromOpt = (function(){
        var _reg0 = /\?|#/,
            _reg1 = /^\/m\//i;
        return function(_options){
            _options = (_options.input||_o).location||_options;
            return (_options.href||'/blog/').split(_reg0)[0].replace(_reg1,'/');
        };
    })();
    /**
     * 显示加载中状态
     * @param  {Object} 事件信息
     * @return {Void}
     */
    _pro.__onLoadingShow = function(_event){
        _event.value = '<p class="w-loading">&nbsp;</p>';
    };
    /**
     * 显示提示信息
     * @param  {Object} 事件信息
     * @return {Void}
     */
    _pro.__onMessageShow = function(_msg,_event){
        _event.value = '<p class="w-message">'+_msg+'</p>';
    };
    
    return _p;
},3,5);
cant read file D:/workspace/git/NEJ/src/util/tab/view.js for utf-8, cause:
{"errno":-4058,"code":"ENOENT","syscall":"open","path":"D:\\workspace\\git\\NEJ\\src\\util\\tab\\view.js"}
cant read file D:/workspace/git/NEJ/src/base/util.js for utf-8, cause:
{"errno":-4058,"code":"ENOENT","syscall":"open","path":"D:\\workspace\\git\\NEJ\\src\\base\\util.js"}
cant read file D:/workspace/git/NEJ/src/util/ajax/xdr.js for utf-8, cause:
{"errno":-4058,"code":"ENOENT","syscall":"open","path":"D:\\workspace\\git\\NEJ\\src\\util\\ajax\\xdr.js"}
cant read file D:/workspace/git/NEJ/src/util/cache/abstract.js for utf-8, cause:
{"errno":-4058,"code":"ENOENT","syscall":"open","path":"D:\\workspace\\git\\NEJ\\src\\util\\cache\\abstract.js"}
I$(33,function (_k,_t,_p,_o,_f,_r){
    var _pro;
    /**
     * 项目缓存基类
     * @class   {_$$Cache}
     * @extends {_$$CacheListAbstract}
     * @param   {Object}  可选配置参数，已处理参数列表如下所示
     */
    _p._$$Cache = _k._$klass();
    _pro = _p._$$Cache._$extend(_t._$$CacheListAbstract);
    /**
     * 
     * @param {Object} _callback
     * @param {Object} _json
     */
    _pro.__cbListLoad = function(_key,_callback,_json){
        var _list = null;
        if (_json.code==1){
            var _result = _json.result;
            if (_result.total>_result.list.length)
                this._$setTotal(_key,_result.total);
            _list = _result.list;
        }
        _callback(_list);
    };
    
    return _p;
},3,34);
I$(9,function (_k,_u,_j,_t,_p,_o,_f,_r){
    var _pro;
    /**
     * 日志缓存对象
     * @class   {_$$CacheBlog}
     * @extends {_$$Cache}
     * @param   {Object}  可选配置参数，已处理参数列表如下所示
     */
    _p._$$CacheBlog = NEJ.C();
    _pro = _p._$$CacheBlog._$extend(_t._$$Cache);
    /**
     * 从服务器载入数据
     */
    _pro.__doLoadList = function(_options){
        var _key = _options.key,
            _callback = _options.onload;
        
        // for test
        if (DEBUG){
            var _list = window['blog-list']
                              [(parseInt(_key.split('-')[1])||0)%10],
                _limit = _options.limit,
                _offset = _options.offset;
            var _json = {
                code:1,
                result:{
                    total:_list.length,
                    list:_list.slice(_offset,_offset+_limit)
                }
            };
            window.setTimeout(
                this.__cbListLoad._$bind(
                    this,_key,_callback,_json),1000
            );
            return;
        }
        // end for test
        
        _j._$request('/api/blog/list',{
            method:'POST',
            type:'json',
            data:_u._$object2query(_options.data),
            onload:this.__cbListLoad._$bind(this,_key,_callback),
            onerror:this.__cbListLoad._$bind(this,_key,_callback,_o)
        });
    };
    /**
     * 从缓存中取分类列表
     */
    _pro._$getClassListInCache = function(){
        // for test
        var _arr = [],
            _nmb = 0,
            _seed = +new Date;
        for(var i=0;i<10;i++){
            _seed++;
            _arr.push({id:_seed,name:'class-'+_seed,count:_nmb++});
        }
        return _arr;
    };
    /**
     * 从缓存中取标签列表
     */
    _pro._$getTagListInCache = function(){
        // for test
        var _arr = [],
            _nmb = 0,
            _seed = +new Date;
        for(var i=0;i<20;i++){
            _seed++;
            _arr.push({id:_seed,name:'tag-'+_seed,count:_nmb++});
        }
        return _arr;
    };
    
    return _p;    
},3,31,32,33);
cant read file D:/workspace/git/NEJ/src/base/event.js for utf-8, cause:
{"errno":-4058,"code":"ENOENT","syscall":"open","path":"D:\\workspace\\git\\NEJ\\src\\base\\event.js"}