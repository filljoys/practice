define([
    'util/dispatcher/regularModule',
    'regular!./index.html'
], function(_m, template) {
    var TestModule = Regular.extend({
        template: template,
        config: function() {

        },
        sayMsg: function() {
            alert('hello');
        }
    });
    return _m._$regist('test', TestModule);
});
