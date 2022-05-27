import type {RecipesList} from '../types';

export const RECIPES: RecipesList = {
    breakfast: {
        categoryName: 'Завтрак',
        recipes: [
            {
                title: 'Яичница',
                text: 'Разбить яйца, пожарить их',
                picture: '',
            },
            {
                title: 'Каша',
                text: 'Сварить Кашу',
                picture: '',
            },
        ],
    },
    brunch: {
        categoryName: 'Перекус',
        recipes: [
            {
                title: 'Бутер',
                text: 'Сделать бутер',
                picture: '',
            },
            {
                title: 'Банановый йогурт',
                text: 'Сделать банановый йогурт',
                picture: '',
            },
        ],
    },
    lunch: {
        categoryName: 'Обед',
        recipes: [
            {
                title: 'Суп',
                text: 'Сварить суп',
                picture: '',
            },
            {
                title: 'Курица',
                text: 'Запечь курицу',
                picture: '',
            },
        ],
    },
    linner: {
        categoryName: 'Полдник',
        recipes: [
            {
                title: 'Кефир',
                text: 'Кефир',
                picture: '',
            },
            {
                title: 'Яблоко',
                text: 'Яблоко',
                picture: '',
            },
        ],
    },
    dinner: {
        categoryName: 'Ужин',
        recipes: [
            {
                title: 'Креветки',
                text: 'Сварить креветки, накормить зайца',
                picture: '',
            },
            {
                title: 'Овощи',
                text: 'Дать погрызть зайцу овощи, морковку в частности',
                picture: '',
            },
        ],
    },
};
