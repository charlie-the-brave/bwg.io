function accessPage(page_url)
{
	window.open(page_url, "_blank");
}
function toggleMsg(element, msg, seconds) {
	const old_msg = element.innerText;
	const old_style = element.style;
	element.innerText = msg;
       	element.style.width = '400px';
       	element.style.color = '#55FFFF';
       	element.style.backgroundColor = '#000000';
       	element.style.borderRadius = '0%';
	setTimeout(() => {
	    element.style = old_style;
	    element.innerText = old_msg;
	}, seconds * 1000);

}

function importHtml()
{
	/* 
	for these imports to work make sure:
	a) import script ref to jquery in header
	b) import script ref to this fn after body
	ci) start a simple local server in console
	cii) open page from local server url
	*/
	//alert("something is happening!")
	// maintain alpabetical order
}
