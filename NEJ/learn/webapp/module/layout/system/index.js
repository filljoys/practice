NEJ.define([
    'base/klass',
    'base/element',
    'util/template/tpl',
    'util/dispatcher/module'
], function(_k, _e, _t, _m, _p) {
    var pro;

    _p._$$ModuleSystem = _k._$klass();
    pro = _p._$$ModuleSystem._$extend(_m._$$ModuleAbstract);

    pro.__doParseParent = function(_options) {
        return _e._$get('root');
    }

    pro.__doBuild = function() {
        this.__body = _e._$html2node(
            _t._$getTextTemplate('sys-tpl-1')
        );

        var _list = _e._$getByClassName(this.__body, 'j-flag');
        this.__export = {
            tab: _list[0],
            parent: _list[1]
        }
    }

    _m._$regist('system', _p._$$ModuleSystem);
});
