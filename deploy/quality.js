$.deploy = $.extend($.deploy || {}, {
    quality : {
        horrible : { name : 'Ужасный', scale : -1 },
        harmful : { name : 'Вредный', scale : -0.4 },
        bad : { name : 'Плохой', scale : -0.1 },
        useless : { name : 'Бесполезный', scale : 0 },
        normal : { name : 'Обычный', scale : 0.5 },
        unusual : { name : 'Необычный', scale : 1 },
        quality : { name : 'Качестченный', scale : 1.2 },
        rare : { name : 'Редкий', scale : 1.5 },
        vrare : { name : 'Очень редкий', scale : 1.6 },
        relic : { name : 'Реликтовый', scale : 1.7 },
        epic : { name : 'Эпический', scale : 3 },
        legendary : { name : 'Легендарный', scale : 4 },
        blessed: { name : 'Божественный', scale : 5 },
        artifact : { name : 'Артефакт', scale : 1 },
    },
});