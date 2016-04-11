/**
 * Created by hzgongke on 2016/4/11 0011.
 */
import './main.css';
import $ from 'jquery';
import moment from 'moment';

var domReadyTime = moment();
$(document).on('click', function() {
    let nowTime = domReadyTime.startOf('hour').fromNow();
    $('body').append(nowTime);
});