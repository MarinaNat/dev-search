const category = {
	technic: 'Техника',
	clothes: 'Одежда',
	footwear: 'Обувь',
	buildMaterials: 'Строй материалы'
}

const cardsData = [
	{
		id: '1',
		title: 'Талевизор',
		description: 'Талевизор Samsung',
		params: {
			year: 2020,
			color: 'Черный',
			country: 'Корея',
			category: category.technic,
		},
		count: 3,
		cost: '30000'

	},
	{
		id: '2',
		title: 'Толстовка',
		description: 'Толстовка мужская спортивная',
		params: {
			year: 2021,
			color: 'Белый',
			country: 'Китай',
			category: category.clothes,
		},
		count: 0,
		cost: '3000'

	},
	{
		id: '3',
		title: 'Кроссовки',
		description: 'Кроссовки спортивные Nike',
		params: {
			year: 2022,
			color: 'Черный',
			country: 'США',
			category: category.footwear,
		},
		count: 9,
		cost: '4500'

	},
	{
		id: '4',
		title: 'Холодильник',
		description: 'Холодильник Bosh двухкамерный',
		params: {
			year: 2020,
			color: 'Серый',
			country: 'Германия',
			category: category.technic,
		},
		count: 2,
		cost: '18000'

	},
	{
		id: '5',
		title: 'Джинсы',
		description: 'Джинсы мужские',
		params: {
			year: 2022,
			color: 'Синий',
			country: 'Россия',
			category: category.clothes,
		},
		count: 10,
		cost: '2000'

	},
	{
		id: '6',
		title: 'Джинсы',
		description: 'Джинсы женские',
		params: {
			year: 2022,
			color: 'Белый',
			country: 'Китай',
			category: category.clothes,
		},
		count: 8,
		cost: '1500'

	}
]