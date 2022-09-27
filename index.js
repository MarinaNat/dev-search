const domElements = {
	results: document.getElementById('results'),
	search: {
		input: document.getElementById('search-input'),
		button: document.getElementById('search-button')
	}

}

//генерация карточек
function generateCards() {
	const cards = [];
	for (let i = 0; i < cardsData.length; i++) {
		let countClass = 'card__count'
		let countValue = cardsData[i].count
		if (cardsData[i].count === 0) {
			countClass = 'card__count  card__count_empty'
			countValue = 'Нет в наличии'
		}
		cards.push(`
		<div class="card">
		<img src="https://loremflickr.com/320/240/fruit/all?id=${i}" alt="" class="card__img">
		<div class="card__content">
			<h3 class="card__ttitle">${cardsData[i].title}</h3>
			<div class="card__description">${cardsData[i].description}</div>
			<div class="card__info">
				<div class="card__param">
					<label for="">Год:</label>
					<div id="year">${cardsData[i].params.year}</div>
				</div>
				<div class="card__param">
					<label for="">Цвет:</label>
					<div id="color">${cardsData[i].params.color}</div>
				</div>
				<div class="card__param">
					<label for="">Категория:</label>
					<div id="typ">${cardsData[i].params.category}</div>
				</div>
				<div class="card__param">
					<label for="">Страна:</label>
					<div id="country">${cardsData[i].params.country}</div>
				</div>
			</div>
			<div class="card__footer">
				<div class="${countClass}">
					<label for=""> Количество:</label>
					<div id="count"> ${countValue} </div >
				</div >
		<div class="card__cost">
			<label>Цена</label>
			<div>${cardsData[i].cost}</div>
		</div>
			</div >
		</div >
	</div >
		`)
	}
	return cards
}

const cardsArr = generateCards()
domElements.results.innerHTML = cardsArr.join('')

// Поиск товара
{
	let searchValue = ''

	//Изменения значения поля поиска
	domElements.search.input.oninput = (event) => {
		searchValue = event.target.value
		console.log(event.target.value)
	}
	// Клик по кнопке поиска
	domElements.search.button.onclick = () => {

	}
}

// Функция фильтрации товаров