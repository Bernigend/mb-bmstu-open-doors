"use strict";

(function() {

    /**
     * Блок с видео приёмной кампании
     * @type {jQuery}
     */
    var videoEntrant = $("#js-live-entrant-video");

    /**
     * Таймер до эфира приёмной кампании
     * @type {jQuery}
     */
    var timerEntrant = $("#js-live-entrant-timer");

    /**
     * Блок с видео деканов
     * @type {jQuery}
     */
    var videoDean = $("#js-live-dean-video");

    /**
     * Таймер до эфира с деканами
     * @type {jQuery}
     */
    var timerDean = $("#js-live-dean-timer");

    // устанавливаем таймер для приёмной кампании
    timerEntrant.countdown("2020/11/28 11:58:00")
        .on('update.countdown', function(event) {
            videoEntrant.removeClass('elapsed');
            timerEntrant.text(event.strftime('%H:%M:%S'));
        })
        .on('finish.countdown', function(event) {
            videoEntrant.addClass('elapsed');
        });

    // устанавливаем таймер для деканов
    timerDean.countdown("2020/11/28 13:28:00")
        .on('update.countdown', function(event) {
            videoDean.removeClass('elapsed');
            timerDean.text(event.strftime('%H:%M:%S'));
        })
        .on('finish.countdown', function(event) {
            videoDean.addClass('elapsed');
        });
})();