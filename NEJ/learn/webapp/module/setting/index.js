NEJ.define([
    'base/klass',
    'base/element',
    'util/template/tpl',
    'util/dispatcher/module'
], function(_k, _e, _t, _m, _p) {
    var pro;

    _p._$$ModuleSetting = _k._$klass();
    _pro = _p._$$ModuleSetting._$extend(_m._$$ModuleAbstract);

    _pro.__doBuild = function() {
        this.__body = _e._$html2node(
            _t._$getTextTemplate('setting-tpl-1')
        );
        //console.log('this__body')
    }

    _m._$regist('setting', _p._$$ModuleSetting);
});
