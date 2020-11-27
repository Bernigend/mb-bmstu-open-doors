"use strict";

function fetchStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(new Error(response.statusText));
    }
}

function fetchJson(response) {
    return response.json();
}

(function() {

    /**
     * Блок с видео приёмной кампании
     * @type {jQuery}
     */
    var videoEntrant = $("#js-live-entrant-video");

    /**
     * iframe приёмной кампании
     * @type {HTMLElement}
     */
    var iframeEntrant = document.getElementById('js-live-entrant-iframe');

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
     * iframe деканов
     * @type {HTMLElement}
     */
    var iframeDean = document.getElementById('js-live-dean-iframe');

    /**
     * Таймер до эфира с деканами
     * @type {jQuery}
     */
    var timerDean = $("#js-live-dean-timer");

    /**
     * Экран приёмной кампании открыт
     * @type {boolean}
     */
    var entrantElapsed = true;

    /**
     * iframe src установлен для приёмной кампании
     * @type {boolean}
     */
    var entrantHasSrc = false;

    /**
     * Экран деканов открыт
     * @type {boolean}
     */
    var deanElapsed = true;

    /**
     * iframe src установлен для деканов
     * @type {boolean}
     */
    var deanHasSrc = false;

    /**
     * Время срабатывания таймера для приёмной кампании
     * @type {Date}
     */
    var entrantTime = new Date('2020-11-28 11:58:00');

    /**
     * Время срабатывания таймера для деканов
     * @type {Date}
     */
    var deanTime = new Date('2020-11-28 13:28:00');

    /**
     * Время при загрузке страницы
     * @type {Date}
     */
    var currentTime = new Date();

    if (currentTime <= entrantTime)
    {
        // устанавливаем таймер для приёмной кампании
        timerEntrant.countdown(entrantTime)
            .on('update.countdown', function(event) {
                if (entrantElapsed) {
                    videoEntrant.removeClass('elapsed');
                    entrantElapsed = false;
                }
                timerEntrant.text(event.strftime('%H:%M:%S'));

                // обновляем src у iframe приёмной кампании за 10 минут до конца отсчёта
                if (!entrantHasSrc && event.offset.totalMinutes <= 10) {
                    fetch('./live.json').then(fetchStatus).then(fetchJson).then(function(response) {
                        if (response.hasOwnProperty('entrant_src') && response.entrant_src !== false) {
                            iframeEntrant.src = response.entrant_src;
                            entrantHasSrc = true;
                        }
                    }).catch(error => console.log(error));
                }
            })
            .on('finish.countdown', function(event) {
                videoEntrant.addClass('elapsed');
            });
    }

    if (currentTime <= deanTime)
    {
        // устанавливаем таймер для деканов
        timerDean.countdown(deanTime)
            .on('update.countdown', function(event) {
                if (deanElapsed) {
                    videoDean.removeClass('elapsed');
                    deanElapsed = false;
                }
                timerDean.text(event.strftime('%H:%M:%S'));

                // обновляем src у iframe деканов за 10 минут до конца отсчёта
                if (!deanHasSrc && event.offset.totalMinutes <= 10) {
                    fetch('./live.json').then(fetchStatus).then(fetchJson).then(function(response) {
                        if (response.hasOwnProperty('dean_src') && response.dean_src !== false) {
                            iframeDean.src = response.dean_src;
                            deanHasSrc = true;
                        }
                    }).catch(error => console.log(error));
                }
            })
            .on('finish.countdown', function(event) {
                videoDean.addClass('elapsed');
            });
    }
})();