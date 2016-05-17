NEJ.define([
    'base/klass',
    'base/element',
    'util/template/tpl',
    'util/dispatcher/module'
], function(_k, _e, _t, _m, _p) {
    var pro;

    _p._$$ModuleOrder = _k._$klass();
    pro = _p._$$ModuleOrder._$extend(_m._$$ModuleAbstract);

    pro.__doBuild = function(_options) {
        this.__body = _e._$html2node(
            _t._$getTextTemplate('order-tpl-2'));

        //var _list = _e._$getByClassName(this.__body, 'j-flag');

        //this.__export.parent = _list[0];
    }

    _m._$regist('order', _p._$$ModuleOrder);
});
