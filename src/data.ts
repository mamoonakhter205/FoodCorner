import { Food } from "./app/shared/model/Food";

export const sample_foods:Food[] = [
    {
        id:'1',
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['itlay'],
        stars: 4.5,
        imageUrl: 'assets/food-1.jpg',
        tag: ['FastFood', 'Pizza', 'Lunch']
    },
    {
        id:'2',
        name: 'Meatball',
        cookTime: '10-20',
        price: 20,
        favorite: true,
        origins: ['persia', 'middle east'],
        stars: 4.7,
        imageUrl: 'assets/food-2.jpg',
        tag: ['slowFood', 'Lunch']
    },
    {
        id:'3',
        name: 'Oven Baked Wings',
        cookTime: '15-20',
        price: 22,
        favorite: true,
        origins: ['Bew York'],
        stars: 4.7,
        imageUrl: 'assets/food-3.png',
        tag: ['FastFood', 'Lunch']
    },
    {
        id:'4',
        name: 'Large Pizza Deal',
        cookTime: '15-20',
        price: 30,
        favorite: true,
        origins: ['Egyptians','Greeks','Romans'],
        stars: 4.7,
        imageUrl: 'assets/Large Pizza Deal.png',
        tag: ['FastFood', 'Lunch']
    },
    {
        id:'5',
        name: 'Chicken Extreme',
        cookTime: '15-20',
        price: 30,
        favorite: true,
        origins: ['Egyptians','Greeks','Romans'],
        stars: 4.7,
        imageUrl: 'assets/food-4.png',
        tag: ['FastFood', 'Lunch']
    },
    {
        id:'6',
        name: 'Pizza Tandori',
        cookTime: '15-20',
        price: 30,
        favorite: true,
        origins: ['Egyptians','Greeks','Romans'],
        stars: 4.5,
        imageUrl: 'assets/food-5.png',
        tag: ['FastFood', 'Lunch']
    }
]