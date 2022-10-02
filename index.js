const domElements = {
	results: document.getElementById('results'),
	search: {
		input: document.getElementById('search-input'),
		button: document.getElementById('search-button')
	},
	filters: {
		category: document.getElementById('filter-category'),
		color: document.getElementById('filter-color'),
		year: document.getElementById('filter-year'),
		country: document.getElementById('filter-country')
	}

}

//генерация карточек

function generateCards(data) {
	const cards = [];
	for (let i = 0; i < data.length; i++) {
		let countClass = 'card__count'
		let countValue = data[i].count
		if (data[i].count === 0) {
			countClass = 'card__count  card__count_empty'
			countValue = 'Нет в наличии'
		}
		cards.push(`
		<div class="card">
		<img src="https://loremflickr.com/320/240/fruit/all?id=${i}" alt="" class="card__img">
		<div class="card__content">
			<h3 class="card__ttitle">${data[i].title}</h3>
			<div class="card__description">${data[i].description}</div>
			<div class="card__info">
				<div class="card__param">
					<label for="">Год:</label>
					<div id="year">${data[i].params.year}</div>
				</div>
				<div class="card__param">
					<label for="">Цвет:</label>
					<div id="color">${data[i].params.color}</div>
				</div>
				<div class="card__param">
					<label for="">Категория:</label>
					<div id="typ">${data[i].params.category}</div>
				</div>
				<div class="card__param">
					<label for="">Страна:</label>
					<div id="country">${data[i].params.country}</div>
				</div>
			</div>
			<div class="card__footer">
				<div class="${countClass}">
					<label for=""> Количество:</label>
					<div id="count"> ${countValue} </div >
				</div >
		<div class="card__cost">
			<label>Цена</label>
			<div>${data[i].cost}</div>
		</div>
			</div >
		</div >
	</div >
		`)
	}
	return cards
}

const cardsArr = generateCards(cardsData)
domElements.results.innerHTML = cardsArr.join('')


// Поиск товара
{
	let searchValue = ''

	//Изменения значения поля поиска
	domElements.search.input.oninput = (event) => {
		searchValue = event.target.value
		filterSearch()
		// console.log(event.target.value)
	}
	// Клик по кнопке поиска
	domElements.search.button.onclick = () => {
		filterSearch()
	}


	// Функция фильтрации найденных товаров
	function filterSearch() {
		const rgx = new RegExp(searchValue, 'i')
		let filteredCardData = cardsData.filter(card => {
			console.log(rgx.test(card.title))
			if (rgx.test(card.title)) {
				return true
			} else {
				return false
			}
		})
		const newFilteredCardHtml = generateCards(filteredCardData)
		domElements.results.innerHTML = newFilteredCardHtml.join('')

	}
}

// Фильтрация товара
{
	const filtersType = [
		'category',
		'color',
		'year',
		'country'
	]

	// Отслеживание изменений фильтров и фильтрация
	filtersType.forEach(type => handleChangeFilter(type))

	// Отслеживание изменений значений фильтров
	function handleChangeFilter(type) {
		domElements.filters[type].onchange = (event) => {
			const value = event.target.value
			const filteringCards = filterCards(type, value, cardsData)
			const fullFilteredCards = checkOutherFilters(filtersType, filteringCards, type)
			// const fullFilteredCards = checkOutherFilters(filtersType, filteredCards)
			const cardsHTML = generateCards(fullFilteredCards).join('')
			domElements.results.innerHTML = cardsHTML

		}
	}



	//Функция фильтрации карточек по фильтру
	function filterCards(filterType, value, cards) {

		const filteredCards = cards.filter(card => {
			const reg = new RegExp(value)
			if (reg.test(card.params[filterType])) {
				return true
			} else {
				return false
			}
		})
		return filteredCards
	}





	// Фильтрация по значениям соседних фильтров
	function checkOutherFilters(filtersType, filteredCards, extraFilterType) {
		let updateFilteredCards = filteredCards
		const filteredFiltersType = filtersType.filter(type => type !== extraFilterType)

		filteredFiltersType.forEach(type => {
			const value = domElements.filters[type].value
			const reg = new RegExp(value)
			const newFilteredCards = updateFilteredCards.filter(card => {
				if (reg.test(card.params[type])) {
					return true
				} else {
					return false
				}
			})
			updateFilteredCards = newFilteredCards
		})
		return updateFilteredCards
	}
}