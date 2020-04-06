import { fetchData } from './utils'
import Card from './Card'
import CreateCard from './dialogs/CreateCard'
import UpdateCard from './dialogs/UpdateCard'
import DeleteCard from './dialogs/DeleteCard'
import { animateDialogExit } from './utils'

class Table {
	constructor() {
		this.container = document.getElementById('app')
		this.counter = document.getElementById('counter')
		this.spinner = document.getElementById('spinner')
		this.updateItem = this.updateItem.bind(this)
		this.handleUpdateOpen = this.handleUpdateOpen.bind(this)
		this.handleDeleteOpen = this.handleDeleteOpen.bind(this)
		this.createItem = this.createItem.bind(this)
		this.deleteItem = this.deleteItem.bind(this)
		this.render = this.render.bind(this)

		const createBtn = document.getElementById('btn-create')
		const modal = document.getElementById('modal')

		window.addEventListener('load', () => {
			const searchURL = location.search.split('?')[1]
			const formatedURL = searchURL && searchURL.split('=')
			const dialogType = searchURL && formatedURL[0]
			const itemId = searchURL && formatedURL[1]

			if (searchURL && dialogType) {
				switch (dialogType) {
					case 'create':
						CreateCard.render(this.createItem)
						break
					case 'update':
						if (itemId) {
							fetchData(`/${itemId}`, 'GET').then((data) => {
								this.handleUpdateOpen(data)
							})
						}
						break
					case 'delete':
						if (itemId) {
							fetchData(`/${itemId}`, 'GET').then((data) => {
								this.handleDeleteOpen(data)
							})
						}
						break
				}
			}
			this.render()
		})

		createBtn.addEventListener('click', (e) => {
			CreateCard.render(this.createItem)
		})

		window.addEventListener('click', (e) => {
			if (e.target === modal) {
				animateDialogExit()
			}
		})

		window.addEventListener('keydown', (e) => {
			if (e.keyCode === 27) {
				animateDialogExit()
			}
		})
	}

	render() {
		this.spinner.style.display = 'flex'
		fetchData().then((data) => {
			const renderItems = data.length
				? data
						.sort(
							(a, b) =>
								new Date(b.created).getTime() - new Date(a.created).getTime(),
						)
						.map((item) =>
							Card.create({
								...item,
								onUpdate: this.handleUpdateOpen,
								onDelete: this.handleDeleteOpen,
							}),
						)
				: [Card.createEmptyCard()]

			this.counter.innerHTML = `Total offers (${data.length})`
			this.container.innerHTML = ``
			this.container.append(...renderItems)
			this.spinner.style.display = 'none'
		})
	}

	handleUpdateOpen(data) {
		UpdateCard.render(this.updateItem, data)
	}

	handleDeleteOpen(data) {
		DeleteCard.render(this.deleteItem, data)
	}

	createItem(data) {
		this.spinner.style.display = 'flex'
		return fetchData('', 'POST', data).then(() => this.render())
	}

	updateItem(id, data) {
		this.spinner.style.display = 'flex'
		return fetchData(`/${id}`, 'PATCH', data).then(() => this.render())
	}

	deleteItem(id) {
		this.spinner.style.display = 'flex'
		return fetchData(`/${id}`, 'DELETE').then(() => this.render())
	}
}

export default Table
