$.deploy = $.extend($.deploy || {}, {
    items : {
        2001 : {
            id : 2001,
            name : "Крысиный топор",
            type : 'Топор',
            stats : {
                damage : 2.25,
                str : 0.75,
                vit : 0.5,
                lak : -1
            },
            cost : {
                gold : 77
            }
        },
        2002 : {
            id : 2002,
            name : "Крысиные бусы",
            type : 'Бижутерия',
            stats : {
                mst: 3,
                lak : -1
            },
            cost : {
                gold : 100
            }
        },
        2003 : {
            id : 2003,
            name : "Отбитые почки",
            type : 'Мусор',
            cost : {
                gold : 1
            },
            stacked : true
        },

    },
});