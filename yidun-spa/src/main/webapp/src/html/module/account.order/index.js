NEJ.define([
    'base/klass',
    'base/element',
    'base/event',
    'util/template/tpl',
    'util/dispatcher/module'
], function(_k, _e, _v, _t, _m, _p) {
    var pro;

    _p._$$ModuleAccountOrder = _k._$klass();
    pro = _p._$$ModuleAccountOrder._$extend(_m._$$ModuleAbstract);

    pro.__doBuild = function(_options) {
        this.__body = _e._$html2node(
            _t._$getTextTemplate('order-tpl-1'));

        //var _list = _e._$getByClassName(this.__body, 'j-flag');

        //this.__export.parent = _list[0];
    }

    pro.__onShow = function(_options) {
        this.__super(_options);
        var _that = this;
        var _modifyHeadBtn = _v._$addEvent(
            'modifyHeadBtn', 'click', function(_event) {
                this.__doSendMessage('/m', {txt: '来自遥远的订单'})
            }._$bind(this), false
        );
    }

    _m._$regist('account-order', _p._$$ModuleAccountOrder);
});
