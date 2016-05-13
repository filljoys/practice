NEJ.define([
    'base/klass',
    'util/event'
], function(_k, _t, _p, _o, _f, _r) {
    var _pro;

    _p._$$NISP = _k._$klass();
    _pro = _p._$$NISP._$extend(_t._$$EventTarget);
    //console.log(_p._$$NISP);
    _pro.__init = function(_options) {
        this.__super(_options);
        //document.title = '123';
    }

    _pro.__reset = function(_options) {
        console.log('reset NISP');
        this.__super(_options);
    }

    _pro.__destroy = function() {
        console.log('destroy NISP');
        this.__super();
    }
    return _p;
});
