NEJ.define([
    'base/klass',
    'base/element',
    'util/template/tpl',
    'util/dispatcher/regularModule',
    'regular!./index.html'
], function(_k, _e, _t, _m, _tpl, _p) {
    var BlogModule = Regular.extend({
        template: _tpl,
        data: {
            source: [
                {name: '安徽'},
                {name: '山东'},
                {name: '浙江'}
            ]
        }
    });
    console.log(RGUI.Calendar);
    // var BlogModule = RGUI.Component({
    //     template: _tpl
    // });
    // console.log(BlogModule);
    // //console.log(BlogModule)
    return _m._$regist('blog', BlogModule);
});
