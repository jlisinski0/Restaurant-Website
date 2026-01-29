import kotlet from '../../../public/kotlet.png'
import golabek from '../../../public/golabek.png'
import zraz from '../../../public/zraz.png'
import zurek from '../../../public/zurek.png'

interface MenuItem {
	id: number
	category: string
	name: string
	cost: number
	img: any
}



export const menuList: MenuItem[] = [
	{
		id: 1,
		category: 'dinner',
		name: 'Kotlet schabowy',
		cost: 24,
		img: { kotlet },
	},
	{
		id: 2,
		category: 'dinner',
		name: 'Gołabki z ziemniakami',
		cost: 55,
		img: { golabek },
	},
	{
		id: 3,
		category: 'dinner',
		name: 'Zrazy z ziemniakami',
		cost: 45,
		img: { zraz },
	},
	{
		id: 4,
		category: 'dinner',
		name: 'Żurek z jajkiem',
		cost: 65,
		img: { zurek },
	},
]
