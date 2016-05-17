NEJ.define([
    'base/klass',
    'base/element',
    'util/template/tpl',
    'util/dispatcher/module'
], function(_k, _e, _t, _m, _p) {
    var pro;

    _p._$$ModuleSystemTab = _k._$klass();
    pro = _p._$$ModuleSystemTab._$extend(_m._$$ModuleAbstract);

    pro.__doBuild = function() {
        this.__body = _e._$html2node(
            _t._$getTextTemplate('tab-tpl-1')
        );
    }

    _m._$regist('system-tab', _p._$$ModuleSystemTab);
});
