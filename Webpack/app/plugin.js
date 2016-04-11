/**
 * Created by hzgongke on 2016/4/11 0011.
 */

(function ($) {
    const shade = '#556b2f';
    $.fn.greenify = function() {
        this.css( 'color' , shade );
        return this;
    }
}(jQuery));
