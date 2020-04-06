class Card {
	static create(data) {
		const {
			companyName,
			stack,
			status,
			payRate,
			created,
			onUpdate,
			onDelete,
		} = data

		const cardWrapper = document.createElement('tr')
		cardWrapper.classList.add('table-item')

		cardWrapper.innerHTML = `
        <td>${companyName}</td>
 		<td>${stack}</td>
 		<td>${status}</td>
		<td>${payRate ? `${payRate} EUR` : '-'}</td>
		<td>${new Date(created).toLocaleDateString('en-GB')}</td>
		<td>
		<button id="updateBtn" class="btn">Update</button>
		<button id="deleteBtn" class="btn btn_delete">Delete</button>
		</td>
		`
		const updateBtn = cardWrapper.querySelector('#updateBtn')
		const deleteBtn = cardWrapper.querySelector('#deleteBtn')
		deleteBtn.onclick = () => onDelete(data)
		updateBtn.onclick = () => onUpdate(data)
		return cardWrapper
	}

	static createEmptyCard() {
		const emptyCard = document.createElement('tr')
		emptyCard.classList.add('table-item')
		const td = document.createElement('td')
		td.setAttribute('colspan', 6)
		td.innerText = `No Data`
		emptyCard.appendChild(td)
		return emptyCard
	}
}
export default Card
