import { defineStore } from 'pinia'
// хранилище определяется с помощью defineStore() и для него требуется уникальное имя, передаваемое в качестве первого аргумента:
export const useCardTexts = defineStore('cardTexts', {
	state: () => ({
		motors: [
			// МОТОРЫ
			{
				id: 1,
				title: 'Magnum 46 XLS с глушителем',
				condition: 'Новый',
				description: 'Продается всё, что на фото; без упаковки',
				price: 4000,
				quantity: 0,
				images: [
					{ src: '/img/engines/engine1-01.jpg' },
					{ src: '/img/engines/engine1-02.jpg' },
					{ src: '/img/engines/engine1-03.jpg' },
					{ src: '/img/engines/engine1-04.jpg' },
					{ src: '/img/engines/engine1-05.jpg' },
					{ src: '/img/engines/engine1-06.jpg' },
					{ src: '/img/engines/engine1-07.jpg' },
				],
			},
			{
				id: 2,
				title: 'T2M .21',
				condition: 'Новый',
				description: 'Продается всё, что на фото; без упаковки',
				price: 6500,
				quantity: 1,
				images: [
					{ src: '/img/engines/engine2-01.jpg' },
					{ src: '/img/engines/engine2-02.jpg' },
					{ src: '/img/engines/engine2-03.jpg' },
					{ src: '/img/engines/engine2-04.jpg' },
					{ src: '/img/engines/engine2-05.jpg' },
					{ src: '/img/engines/engine2-06.jpg' },
				],
			},
			{
				id: 3,
				title: 'Super Tigre G2300 MK II',
				condition: 'Б/у',
				description: 'Продается всё, что на фото; в упаковке',
				price: 8000,
				quantity: 1,
				images: [
					{ src: '/img/engines/engine3-01.jpg' },
					{ src: '/img/engines/engine3-02.jpg' },
					{ src: '/img/engines/engine3-03.jpg' },
					{ src: '/img/engines/engine3-04.jpg' },
					{ src: '/img/engines/engine3-05.jpg' },
					{ src: '/img/engines/engine3-06.jpg' },
					{ src: '/img/engines/engine3-07.jpg' },
					{ src: '/img/engines/engine3-08.jpg' },
					{ src: '/img/engines/engine3-09.jpg' },
					{ src: '/img/engines/engine3-10.jpg' },
				],
			},
		],
		propellers: [
			// ПРОПЕЛЛЕРЫ
			{
				id: 1,
				title: 'APC 7x7',
				condition: 'Новый',
				availability: 'В наличии: $ шт.',
				description: 'Продается всё, что на фото; в упаковке',
				price: 170,
				quantity: 1,
				images: [{ src: '/img/propellers/propeller1-01.jpg' }],
			},
			{
				id: 2,
				title: 'APC 7x8',
				condition: 'Новый',
				availability: 'В наличии: $ шт.',
				description: 'Продается всё, что на фото; в упаковке',
				price: 170,
				quantity: 1,
				images: [{ src: '/img/propellers/propeller2-01.jpg' }],
			},
			{
				id: 3,
				title: 'APC 7x9',
				condition: 'Новый',
				availability: 'В наличии: $ шт.',
				description: 'Продается всё, что на фото; в упаковке',
				price: 170,
				quantity: 1,
				images: [{ src: '/img/propellers/propeller3-01.jpg' }],
			},
			{
				id: 4,
				title: 'APC 8x3,8 Slowfly',
				condition: 'Новый',
				availability: 'В наличии: $ шт.',
				description: 'Продается всё, что на фото; в упаковке',
				price: 190,
				quantity: 1,
				images: [{ src: '/img/propellers/propeller4-01.jpg' }],
			},
			{
				id: 5,
				title: 'APC 8x4 Thin Electric',
				condition: 'Новый',
				availability: 'В наличии: $ шт.',
				description: 'Продается всё, что на фото; в упаковке',
				price: 190,
				quantity: 1,
				images: [{ src: '/img/propellers/propeller5-01.jpg' }],
			},
		],
		starters: [
			// СТАРТЕРЫ
			{
				id: 1,
				title: 'Anderson PM-60',
				condition: 'Новый',
				description:
					'Продается всё, что на фото; без резиновой вставки; в упаковке',
				price: 2000,
				quantity: 1,
				images: [
					{ src: '/img/starters/starter1-01.jpg' },
					{ src: '/img/starters/starter1-02.jpg' },
					{ src: '/img/starters/starter1-03.jpg' },
					{ src: '/img/starters/starter1-04.jpg' },
				],
			},
			{
				id: 2,
				title: 'Turbex L-APR 100',
				condition: 'Б/у',
				description:
					'Продается всё, что на фото; есть оголенные места на проводах; без упаковки',
				price: 1200,
				quantity: 1,
				images: [
					{ src: '/img/starters/starter2-01.jpg' },
					{ src: '/img/starters/starter2-02.jpg' },
					{ src: '/img/starters/starter2-03.jpg' },
				],
			},
			{
				id: 3,
				title: 'HPI Nitro Start',
				condition: 'Б/у',
				description:
					'Продается всё, что на фото; без вала; без упаковки',
				price: 1500,
				quantity: 1,
				images: [
					{ src: '/img/starters/starter3-01.jpg' },
					{ src: '/img/starters/starter3-02.jpg' },
				],
			},
			{
				id: 4,
				title: 'Team Losi Sport',
				condition: 'Новый',
				description: 'Продается всё, что на фото; без упаковки',
				price: 2000,
				quantity: 1,
				images: [
					{ src: '/img/starters/starter4-01.jpg' },
					{ src: '/img/starters/starter4-02.jpg' },
					{ src: '/img/starters/starter4-03.jpg' },
					{ src: '/img/starters/starter4-04.jpg' },
				],
			},
		],
	}),

	// getters: {
	// 	getCardText(state) {
	// 		return state.cardTexts;
	// 	},
	// },
})
