(function () {
	const navbar = fetch('./component/navbar.html').then(i => i.text());
	const footer = fetch('./component/footer.html').then(i => i.text());
	window.addEventListener('load', async function () {
		const components = await Promise.all([navbar, footer]);
		// document.body.innerHTML += location.href;
		// console.log(components)
		const div = document.createElement('div');
		div.innerHTML += components[0];
		div.innerHTML += components[1];

		const navbarPlaceholder = document.body.getElementsByTagName('nav')[0];
		document.body.replaceChild(div.firstChild, navbarPlaceholder);

		const footerPlaceholder = document.body.getElementsByTagName('footer')[0];
		document.body.replaceChild(div.firstChild, footerPlaceholder);
	});
})();
