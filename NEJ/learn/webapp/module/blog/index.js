NEJ.define([
    'base/klass',
    'base/element',
    'util/template/tpl',
    'util/dispatcher/module'
], function(_k, _e, _t, _m, _p) {
    var pro;

    _p._$$ModuleBlog = _k._$klass();
    _pro = _p._$$ModuleBlog._$extend(_m._$$ModuleAbstract);

    _pro.__doParseParent = function(_options) {
        return _e._$get('root');
    }

    _pro.__doBuild = function() {
        this.__body = _e._$html2node(
            _t._$getTextTemplate('blog-tpl-1')
        );
        //console.log('this__body')
    }

    _m._$regist('blog', _p._$$ModuleBlog);
});
