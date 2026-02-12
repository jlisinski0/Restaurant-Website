import kotlet from '/kotlet.png'
import golabek from '/golabek.png'
import zraz from '/zraz.png'
import zurek from '/zurek.png'

export interface MenuItem {
	id: number
	category: 'Obiady' | 'Drinki' | 'Desery' | 'all'
	name: string
	cost: number
	img: string | any
}

export const menuList: MenuItem[] = [
	{
		id: 1,
		category: 'Obiady',
		name: 'Kotlet schabowy',
		cost: 24,
		img: kotlet,
	},
	{
		id: 2,
		category: 'Obiady',
		name: 'Gołabki z ziemniakami',
		cost: 55,
		img: golabek,
	},
	{
		id: 3,
		category: 'Drinki',
		name: 'Zrazy z ziemniakami',
		cost: 45,
		img: zraz,
	},
	{
		id: 4,
		category: 'Desery',
		name: 'Żurek z jajkiem',
		cost: 65,
		img: zurek,
	},
	{
		id: 5,
		category: 'Desery',
		name: 'Żurek z jajkiem',
		cost: 65,
		img: zurek,
	},
	{
		id: 6,
		category: 'Desery',
		name: 'Żurek z jajkiem',
		cost: 65,
		img: zurek,
	},
	{
		id: 7,
		category: 'Desery',
		name: 'Żurek z jajkiem',
		cost: 65,
		img: zurek,
	},
]
