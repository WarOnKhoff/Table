import { animateDialogExit } from '../utils'
class UpdateCard {
	static render(onSubmit, data) {
		history.pushState({}, '', `?update=${data._id}`)
		const modalWrapper = document.getElementById('modal')
		modalWrapper.style.display = 'flex'
		const dialogBody = `
        <div class="modal_content">
        <div class="modal_cross"><button id="cross">&times</button></div>
		<h3 class="modal_header">Update</h3>
		<form class="modal_form" id="form">
			<label for="name">Company Name:</label>
			<input class="form_input" id="name" required />
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
			<input class="form_input form_currency" type="number" id="payRate" />
			<div class="delete_btnGroup">
				<button class="btn" id="submit_btn" type="submit">Update</button>
				<button class="btn btn_delete" id="cancel_btn">Cancel</button>
			</div>
		</form>
	</div>
        `
		const { companyName, stack, status, payRate, _id } = data
		modalWrapper.innerHTML = dialogBody
		const form = modalWrapper.querySelector('#form')
		form.elements.name.value = companyName
		form.elements.stack.value = stack
		form.elements.status.value = status
		form.elements.payRate.value = payRate
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
			if (
				companyName == name.value &&
				data.stack == stack.value &&
				data.status == status.value &&
				data.payRate == payRate.value
			) {
				animateDialogExit()
				return
			}
			onSubmit(_id, {
				companyName: name.value,
				stack: stack.value,
				status: status.value,
				payRate: payRate.value,
			})
			animateDialogExit()
		}
	}
}

export default UpdateCard
