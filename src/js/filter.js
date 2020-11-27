"use strict";

/**
 * Математика
 * @type {number}
 */
const MATH = 1;

/**
 * Русский язык
 * @type {number}
 */
const RUSSIAN = 5;

/**
 * Информатика
 * @type {number}
 */
const INFORMATICS = 10;

/**
 * Физика
 * @type {number}
 */
const PHYSICS = 15;

/**
 * Обществознание
 * @type {number}
 */
const SOCIAL_STUDIES = 20;

/**
 * Иностранный язык
 * @type {number}
 */
const FOREIGN_LANG = 25;

/**
 * Химия
 * @type {number}
 */
const CHEMISTRY = 30;

/**
 * Биология
 * @type {number}
 */
const BIOLOGY = 35;

/**
 * Факультет К
 * @type {string}
 */
const FACULTY_KF = 'KF';

/**
 * Факультет ЛТ
 * @type {string}
 */
const FACULTY_LT = 'LT';

/**
 * Направления подготовки
 * @type {({code: string, min_points: string, min_sum_points: number, places_num: number, objects: [number, number, number, number], name: string, link: string, faculty: string}|{code: string, min_points: string, min_sum_points: number, places_num: number, objects: [number, number, number, number], name: string, link: string, faculty: string}|{code: string, min_points: string, min_sum_points: number, places_num: number, objects: [number, number, number, number], name: string, link: string, faculty: string}|{code: string, min_points: string, min_sum_points: number, places_num: number, objects: [number, number, number, number], name: string, link: string, faculty: string}|{code: string, min_points: string, min_sum_points: number, places_num: number, objects: [number, number, number, number], name: string, link: string, faculty: string})[]}
 */
const DATA = [
    // КФ 1
    {
        'faculty': FACULTY_KF,
        'name': 'Прикладная математика и информатика',
        'code': '01.03.02',
        'min_points': 'Информатика и ИКТ (44) или Физика (39), Математика (39), Русский язык (40)',
        'objects': [INFORMATICS, PHYSICS, MATH, RUSSIAN],
        'min_sum_points': 239,
        'places_num': 25,
        'link': '',
    },
    // КФ 2
    {
        'faculty': FACULTY_KF,
        'name': 'Информатика и вычислительная техника',
        'code': '09.03.01',
        'min_points': 'Информатика и ИКТ (44) или Физика (39), Математика (39), Русский язык (40)',
        'objects': [INFORMATICS, PHYSICS, MATH, RUSSIAN],
        'min_sum_points': 233,
        'places_num': 60,
        'link': '',
    },
    // КФ 3
    {
        'faculty': FACULTY_KF,
        'name': 'Приборостроение',
        'code': '12.03.01',
        'min_points': 'Физика (39) или Информатика и ИКТ (44), Математика (39), Русский язык (40)',
        'objects': [PHYSICS, INFORMATICS, MATH, RUSSIAN],
        'min_sum_points': 189,
        'places_num': 21,
        'link': '',
    },
    // КФ 4
    {
        'faculty': FACULTY_KF,
        'name': 'Системы управления летательными аппаратами',
        'code': '24.05.06',
        'min_points': 'Физика (39) или Информатика и ИКТ (44), Математика (39), Русский язык (40)',
        'objects': [PHYSICS, INFORMATICS, MATH, RUSSIAN],
        'min_sum_points': 168,
        'places_num': 25,
        'link': '',
    },
    // КФ 5
    {
        'faculty': FACULTY_KF,
        'name': 'Стандартизация и метрология',
        'code': '27.03.01',
        'min_points': 'Физика (39) или Информатика и ИКТ (44), Математика (39), Русский язык (40)',
        'objects': [PHYSICS, INFORMATICS, MATH, RUSSIAN],
        'min_sum_points': 183,
        'places_num': 10,
        'link': '',
    },
    // КФ 6
    {
        'faculty': FACULTY_KF,
        'name': 'Управление в технических системах',
        'code': '27.03.04',
        'min_points': 'Физика (39) или Информатика и ИКТ (44), Математика (39), Русский язык (40)',
        'objects': [PHYSICS, INFORMATICS, MATH, RUSSIAN],
        'min_sum_points': 191,
        'places_num': 11,
        'link': '',
    },
    // КФ 7
    {
        'faculty': FACULTY_KF,
        'name': 'Экономика',
        'code': '38.03.01',
        'min_points': 'Математика (39), Обществознание (45), Русский язык (40)',
        'objects': [MATH, SOCIAL_STUDIES, RUSSIAN],
        'min_sum_points': 142,
        'places_num': '-',
        'link': '',
    },
    // КФ 8
    {
        'faculty': FACULTY_KF,
        'name': 'Менеджмент',
        'code': '38.03.02',
        'min_points': 'Математика (39), Обществознание (45), Русский язык (40)',
        'objects': [MATH, SOCIAL_STUDIES, RUSSIAN],
        'min_sum_points': 133,
        'places_num': '-',
        'link': '',
    },
    // КФ 9
    {
        'faculty': FACULTY_KF,
        'name': 'Профессиональное обучение',
        'code': '44.03.04',
        'min_points': 'Математика (39), Обществознание (45) или Информатика и ИКТ (44), Русский язык (40)',
        'objects': [MATH, SOCIAL_STUDIES, INFORMATICS, RUSSIAN],
        'min_sum_points': 220,
        'places_num': '-',
        'link': '',
    },
    // КФ 10
    {
        'faculty': FACULTY_KF,
        'name': 'Лингвистика',
        'code': '45.03.02',
        'min_points': 'Иностранный язык (30), Русский язык (40), Обществознание (45) или Информатика и ИКТ (44)',
        'objects': [FOREIGN_LANG, RUSSIAN, INFORMATICS, SOCIAL_STUDIES],
        'min_sum_points': 145,
        'places_num': '-',
        'link': '',
    },
    // ЛТ 1
    {
        'faculty': FACULTY_LT,
        'name': 'Теплоэнергетика и теплотехника',
        'code': '13.03.01',
        'min_points': 'Физика (39) или Информатика и ИКТ (44), Математика (39), Русский язык (40)',
        'objects': [PHYSICS, INFORMATICS, MATH, RUSSIAN],
        'min_sum_points': 163,
        'places_num': '-',
        'link': '',
    },
    // ЛТ 2
    {
        'faculty': FACULTY_LT,
        'name': 'Технологические машины и оборудование',
        'code': '15.03.02',
        'min_points': 'Физика (39) или Информатика и ИКТ (44), Математика (39), Русский язык (40)',
        'objects': [PHYSICS, INFORMATICS, MATH, RUSSIAN],
        'min_sum_points': 150,
        'places_num': 30,
        'link': '',
    },
    // ЛТ 3
    {
        'faculty': FACULTY_LT,
        'name': 'Химическая технология',
        'code': '18.03.01',
        'min_points': 'Химия (39) или Физика (39), Математика (39), Русский язык (40)',
        'objects': [CHEMISTRY, PHYSICS, MATH, RUSSIAN],
        'min_sum_points': 159,
        'places_num': 24,
        'link': '',
    },
    // ЛТ 4
    {
        'faculty': FACULTY_LT,
        'name': 'Технология транспортных процессов',
        'code': '23.03.01',
        'min_points': 'Физика (39) или Информатика и ИКТ (44), Математика (39), Русский язык (40)',
        'objects': [PHYSICS, INFORMATICS, MATH, RUSSIAN],
        'min_sum_points': '-',
        'places_num': 5,
        'link': '',
    },
    // ЛТ 5
    {
        'faculty': FACULTY_LT,
        'name': 'Наземные транспортно-технологические комплексы',
        'code': '23.03.02',
        'min_points': 'Физика (39) или Информатика и ИКТ (44), Математика (39), Русский язык (40)',
        'objects': [PHYSICS, INFORMATICS, MATH, RUSSIAN],
        'min_sum_points': '-',
        'places_num': 4,
        'link': '',
    },
    // ЛТ 6
    {
        'faculty': FACULTY_LT,
        'name': 'Автоматизация технологических процессов и производств',
        'code': '15.03.04',
        'min_points': 'Физика (39) или Информатика и ИКТ (44), Математика (39), Русский язык (40)',
        'objects': [PHYSICS, INFORMATICS, MATH, RUSSIAN],
        'min_sum_points': 178,
        'places_num': 32,
        'link': '',
    },
    // ЛТ 7
    {
        'faculty': FACULTY_LT,
        'name': 'Эксплуатация транспортно-технологических машин и комплексов',
        'code': '23.03.03',
        'min_points': 'Физика (39) или Информатика и ИКТ (44), Математика (39), Русский язык (40)',
        'objects': [PHYSICS, INFORMATICS, MATH, RUSSIAN],
        'min_sum_points': 154,
        'places_num': 5,
        'link': '',
    },
    // ЛТ 8
    {
        'faculty': FACULTY_LT,
        'name': 'Технология лесозаготовительных и деревоперерабатывающих производств',
        'code': '35.03.02',
        'min_points': 'Физика (39) или Информатика и ИКТ (44), Математика (39), Русский язык (40)',
        'objects': [PHYSICS, INFORMATICS, MATH, RUSSIAN],
        'min_sum_points': 137,
        'places_num': 149,
        'link': '',
    },
    // ЛТ 9 (1)
    {
        'faculty': FACULTY_LT,
        'name': 'Экология и природопользование',
        'code': '05.03.06',
        'min_points': 'Биология (39) или Физика (39), Математика (39), Русский язык (40)',
        'objects': [BIOLOGY, PHYSICS, MATH, RUSSIAN],
        'min_sum_points': '-',
        'places_num': '-',
        'link': '',
    },
    // ЛТ 10 (2)
    {
        'faculty': FACULTY_LT,
        'name': 'Лесное дело',
        'code': '35.03.01',
        'min_points': 'Биология (39) или Физика (39), Математика (39), Русский язык (40)',
        'objects': [BIOLOGY, PHYSICS, MATH, RUSSIAN],
        'min_sum_points': 134,
        'places_num': 100,
        'link': '',
    },
    // ЛТ 11 (3)
    {
        'faculty': FACULTY_LT,
        'name': 'Ландшафтная архитектура',
        'code': '35.03.10',
        'min_points': 'Биология (39) или Физика (39), Математика (39), Русский язык (40)',
        'objects': [BIOLOGY, PHYSICS, MATH, RUSSIAN],
        'min_sum_points': 173,
        'places_num': 60,
        'link': '',
    },
];

/**
 * Возвращает пересечение элементов двух массивов
 *
 * @param {[]} arr1
 * @param {[]} arr2
 *
 * @returns {[number]}
 */
function getIntersection(arr1, arr2)
{
    let result = [];

    for (let elem of arr1) {
        if (arr2.indexOf(elem) !== -1) {
            result.push(elem);
        }
    }

    return result;
}

/**
 * Возвращает массив направлений подготовки по переданным предметам
 *
 * @param {[number]} searchObjects - массив из значений констант предметов ЕГЭ
 *
 * @returns {[]}
 */
function search(searchObjects)
{
    let result = [];
    let searchObjectsNum = searchObjects.length;

    if (searchObjectsNum < 1) {
        return result;
    }

    DATA.forEach(function(item, i, arr) {
        let intersection = getIntersection(searchObjects, item.objects);
        if (intersection.length >= searchObjectsNum) {
            result.push(item);
        }
    });

    return result;
}

/**
 * Выводит результат поиска в переданный элемент для вывода
 *
 * @param {HTMLElement} blockForResults - элемент для вывода
 * @param {[{code: string, min_points: string, min_sum_points: number, places_num: number, objects: [number, number, number, number], name: string, link: string, faculty: string}]} searchResult
 */
function showSearchResult(blockForResults, searchResult)
{
    blockForResults.innerHTML = '';

    searchResult.forEach(function(item, i, array) {
        let tmp = document.createElement('li');
        let className = '';

        if (item.faculty === FACULTY_KF) {
            className = 'kf';
        } else {
            className = 'lt';
        }

        tmp.innerHTML = `
        <div class="bachelor-result__name ${className}">${item.name} (${item.code})</div>
        <p>Минимальные баллы ЕГЭ: <b>${item.min_points}</b></p>
        <p>Проходной балл в 2020: <b>${item.min_sum_points}</b></p>
        <p>Бюджетных мест в 2021: <b>${item.places_num}</b></p>
        `;

        blockForResults.appendChild(tmp);
    });
}

(function() {
    /**
     * Индикатор загрузки модуля фильтра
     * @type {HTMLElement}
     */
    const filterLoader = document.getElementById('js-filter-loader');

    /**
     * Блок с кнопками предметов и выводом результатов
     * @type {HTMLElement}
     */
    const filterChoose = document.getElementById('js-filter-choose');

    /**
     * Блок с результатами фильтра (с заголовком)
     * @type {HTMLElement}
     */
    const filterResultBlock = document.getElementById('js-filter-result-block');

    /**
     * Индикатор количества элементов
     * @type {HTMLElement}
     */
    const filterResultCount = document.getElementById('js-filter-result-count');

    /**
     * Список элементов результата
     * @type {HTMLElement}
     */
    const filterItemsList = document.getElementById('js-filter-items-list');

    /**
     * Абзац для уведомлений под результатами
     * @type {HTMLElement}
     */
    const filterWarnBlock = document.getElementById('js-filter-warn');

    /**
     * Кнопки с направлениями подготовки
     * @type {NodeListOf<ChildNode>}
     */
    const filterButtons = document.getElementById('js-filter-buttons').childNodes;

    /**
     * Массив выбранных пользователем предметов ЕГЭ
     * @type {*[]}
     */
    let searchData = [];

    // Вешаем обработчики кликов для предметов ЕГЭ
    filterButtons.forEach(function(item, i, arr) {
        item.addEventListener('click', function(event) {
            let element = this;
            // id == значению какой-нибудь константы предметов ЕГЭ
            let subjectId = parseInt(element.dataset.subject) || 0;
            // индекс предмета в выбранных предметах
            let searchElementIndex = searchData.indexOf(subjectId);

            // удаляем из поиска, если направление было добавлено,
            // иначе добавляем
            if (searchElementIndex !== -1) {
                searchData.splice(searchElementIndex, 1);
            } else {
                searchData.push(subjectId);
            }

            // ищем направления подготовки
            let searchResult = search(searchData);
            let searchResultCount = searchResult.length;
            // выводим результат
            showSearchResult(filterItemsList, searchResult);

            // показываем блок с результатами или скрываем в зависимости результатов поиска
            if (searchResultCount > 0) {
                filterResultBlock.classList.add('visible');
                filterResultCount.innerHTML = ' (' + searchResultCount + ')';

                filterWarnBlock.classList.remove('visible');
                filterWarnBlock.innerHTML = '';
            } else {
                filterResultBlock.classList.remove('visible');
                filterResultCount.innerHTML = '';

                if (searchData.length > 0) {
                    filterWarnBlock.classList.add('visible');
                    filterWarnBlock.innerHTML = '<p>Направлений с таким набором ЕГЭ у нас нет</p>';
                }
            }

            // меняем класс у кнопки
            if (element.classList) {
                element.classList.toggle("selected");
            } else {
                // For IE9
                var classes = element.className.split(" ");
                var i = classes.indexOf("selected");

                if (i >= 0)
                    classes.splice(i, 1);
                else
                    classes.push("selected");
                element.className = classes.join(" ");
            }
        });
    });

    filterLoader.classList.add('loaded');
    filterChoose.classList.add('loaded');
})();