export const API = `https://pure-tor-37016.herokuapp.com/posts`

export const fetchData = (
	url = '',
	method = 'GET',
	body = null,
	headers = {},
) => {
	try {
		if (body) {
			body = JSON.stringify(body)
			headers['Content-Type'] = 'application/json'
		}

		return fetch(API + url, { method, body, headers }).then((response) =>
			response.json(),
		)
	} catch (e) {
		throw e
	}
}

export const animateDialogExit = () => {
	const modalWrapper = document.getElementById('modal')
	const modalBody = modalWrapper.querySelector('.modal_content')
	modalBody.style.animationName = 'down'
	setTimeout(() => {
		history.pushState({}, '', '/')
		modalWrapper.style.display = 'none'
	}, 200)
}
