import { animateDialogExit } from '../utils'

class DeleteCard {
	static render(onDelete, data) {
		// history.pushState({}, '', `/delete/${data._id}`)
		history.pushState({}, '', `?delete=${data._id}`)
		const modalWrapper = document.getElementById('modal')
		modalWrapper.style.display = 'flex'
		const dialogBody = `
        <div class="modal_content">
        <div class="modal_cross"><button id="cross">&times</button></div>
		<h3 class="modal_header">Confirm Delete</h3>
		<form class="modal_form" id="form">
			<label for="name">Company Name:</label>
			<input class="form_input" id="name" disabled />
            <label for="stack">Stack</label>
            <input class="form_input" id="stack" disabled />
            <label for="status">Status</label>
            <input class="form_input" id="status" disabled />
			<label for="payrate">Pay Rate (EUR)</label>
			<input class="form_input form_currency" type="number" id="payRate" disabled/>
			<div class="delete_btnGroup">
				<button class="btn" id="delete_btn" type="submit">Delete</button>
				<button class="btn btn_delete" id="cancel_btn">Cancel</button>
			</div>
		</form>
	</div>
        `
		const { companyName, stack, status, payRate, _id } = data
		modalWrapper.innerHTML = dialogBody
		const crossBtn = modalWrapper.querySelector('#cross')
		const deleteBtn = modalWrapper.querySelector('#delete_btn')
		const closeBtn = modalWrapper.querySelector('#cancel_btn')
		const form = modalWrapper.querySelector('#form')
		form.elements.name.value = companyName
		form.elements.stack.style.textTransform = 'capitalize'
		form.elements.stack.value = stack
		form.elements.status.style.textTransform = 'capitalize'
		form.elements.status.value = status
		form.elements.payRate.value = payRate

		closeBtn.onclick = (e) => {
			e.preventDefault()
			animateDialogExit()
		}

		crossBtn.onclick = (e) => {
			e.preventDefault()
			animateDialogExit()
		}

		deleteBtn.onclick = (e) => {
			e.preventDefault()
			onDelete(_id)
			animateDialogExit()
		}
	}
}

export default DeleteCard
