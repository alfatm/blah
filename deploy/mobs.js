$.deploy = $.extend($.deploy || {}, {
    mobs : {
        1001 : {
            id : 1001,
            name : "Эфирная мышь",
            type : 'mob',
            chance: 40,
            attrs : {
                agi : 2,
                str : 1.2,
                vit : 1.5,
                lak : 3,
            },
            reward : {
                exp: 5,
                gold: 15,
            },
        },
        1002 : {
            id : 1002,
            name : "Боевой таракан",
            type : 'mob',
            chance: 40,
            attrs : {
                agi : 1.4,
                str : 3,
                vit : 2
            },
            reward : {
                exp: 7,
                gold: 20
            },
        },
        1003 : {
            id : 1003,
            name : "Жадная крыса",
            type : 'elite',
            chance: 10,
            attrs : {
                agi : 4,
                str : 1.1,
                vit : 8,
            },
            reward : {
                exp: 55,
                gold: 40,
            },
        },
        1004 : {
            id : 1004,
            name : "Крысиный король",
            type : 'elite',
            chance: 20,
            attrs : {
                agi : 1,
                str : 1,
                vit : 1,
            },
            reward : {
                exp: 55,
                gold: 40,
            },
            loot : [
            { itemId : 2001, chance : { normal : 33, rate : 1, epic: 0.1 } },
            { itemId : 2002, chance : { normal : 3, rate : 1, epic: 0.1 } },
            { itemId : 2003, chance : { bad : 35, }, cnt : [5,10] },
            ]
        },
        1005 : {
            id : 1005,
            name : "Пукано-рватель",
            type : 'boss',
            chance: 5,
            attrs : {
                agi : 5,
                str : 6,
                vit : 6,
            },
            reward : {
                exp: 15,
                gold: 50,
            },
        },
    }
});