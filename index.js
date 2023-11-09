(function () {
	const navbar = fetch('./component/navbar.html').then(i => i.text());
	const download = fetch('./component/download.html').then(i => i.text());
	const footer = fetch('./component/footer.html').then(i => i.text());
	window.addEventListener('load', async function () {
		const components = await Promise.all([navbar, download, footer]);
		// document.body.innerHTML += location.href;
		// console.log(components)
		const div = document.createElement('div');
		for (const component of components)
			div.innerHTML += component;

		const navbarPlaceholder = document.body.getElementsByTagName('nav')[0];
		document.body.replaceChild(div.firstChild, navbarPlaceholder);

		const footerPlaceholder = document.body.getElementsByTagName('footer')[0];
		document.body.replaceChild(div.firstChild, footerPlaceholder);

		const downloadModalPlaceholder = document.getElementById('downloadModal');
		document.body.replaceChild(div.firstChild, downloadModalPlaceholder);

		// const modals = document.getElementsByClassName('modal');
		// for (let modal of modals) {
		// 	console.log(modal.id)
		// 	modal.addEventListener('shown.bs.modal', () => {
		// 	});
		// }
	});
})();
