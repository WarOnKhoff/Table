import { animateDialogExit } from '../utils'
class CreateCard {
	static render(onSubmit) {
		history.pushState({}, '', '?create')
		const modalWrapper = document.getElementById('modal')
		modalWrapper.style.display = 'flex'
		const dialogBody = `
		<div class="modal_content">
		<div class="modal_cross"><button id="cross">&times</button></div>
		<h3 class="modal_header">Create</h3>
		<form class="modal_form" id="form">
			<label for="name">Company Name:</label>
			<input class="form_input" id="name" required placeholder="Enter Company Name"/>
			<label for="stack">Stack</label>
			<select class="form_input" id="stack">
				<option value="react">React</option>
				<option value="angular">Angular</option>
				<option value="vue">Vue</option>
			</select>
			<label for="status">Status</label>
			<select class="form_input" id="status">
				<option value="waiting">Waiting</option>
				<option value="accepted">Accepted</option>
				<option value="denied">Denied</option>
			</select>
			<label for="payrate">Pay Rate (EUR)</label>
			<input class="form_input form_currency" type="number" id="payRate" placeholder="Enter Pay Rate"/>
			<div class="delete_btnGroup">
				<button class="btn" id="submit_btn" type="submit">Create</button>
				<button class="btn btn_delete" id="cancel_btn">Cancel</button>
			</div>
		</form>
	</div>
		`
		modalWrapper.innerHTML = dialogBody

		const form = modalWrapper.querySelector('#form')
		const closeBtn = modalWrapper.querySelector('#cancel_btn')
		const crossBtn = modalWrapper.querySelector('#cross')

		closeBtn.onclick = (e) => {
			e.preventDefault()
			animateDialogExit()
		}
		crossBtn.onclick = (e) => {
			e.preventDefault()
			animateDialogExit()
		}

		form.onsubmit = (e) => {
			e.preventDefault()
			const { name, stack, status, payRate } = e.target.elements
			onSubmit({
				companyName: name.value,
				stack: stack.value,
				status: status.value,
				payRate: payRate.value,
			})
			animateDialogExit()
		}
	}
}

export default CreateCard
