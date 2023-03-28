import { defineStore } from 'pinia'
// хранилище определяется с помощью defineStore() и для него требуется уникальное имя, передаваемое в качестве первого аргумента:
export const useSocials = defineStore('socials', {
	state: () => ({
        socials: [
            {
                id: 1,
                name: "facebook",
                href: "!#",
                icon: "uil:facebook-f"
            },
            {
                id: 2,
                name: "facebook",
                href: "!#",
                icon: "uil:facebook-f"
            },
            {
                id: 3,
                name: "facebook",
                href: "!#",
                icon: "uil:facebook-f"
            },
            {
                id: 4,
                name: "facebook",
                href: "!#",
                icon: "uil:facebook-f"
            },
            {
                id: 5,
                name: "facebook",
                href: "!#",
                icon: "uil:facebook-f"
            },
            {
                id: 6,
                name: "facebook",
                href: "!#",
                icon: "uil:facebook-f"
            }
        ]
	})

	// getters: {
	// 	getCardText(state) {
	// 		return state.cardTexts;
	// 	},
	// },
})
