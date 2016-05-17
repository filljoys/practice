NEJ.define([
    'base/klass',
    'base/element',
    'util/template/tpl',
    'util/dispatcher/module'
], function(_k, _e, _t, _m, _p) {
    var pro;

    _p._$$ModuleSystemLayout = _k._$klass();
    pro = _p._$$ModuleSystemLayout._$extend(_m._$$ModuleAbstract);

    pro.__doParseParent = function(_options) {
        return _e._$get('module-box');
    }

    pro.__doBuild = function(_options) {
        this.__body = _e._$html2node(
            _t._$getTextTemplate('system-tpl-1'));
        var _list = _e._$getByClassName(this.__body, 'g-mnt');

        this.__export.parent = _list[0];
    }

    pro.__onRefresh = function(e) {
        this.__super(e);
        console.log(e);
    }

    _m._$regist('system', _p._$$ModuleSystemLayout);
});
