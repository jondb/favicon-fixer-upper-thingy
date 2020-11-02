// Favicon

console.log("Loaded icon fixer-upper-y thing...")

// Favicon Map
const iconMap = {
	'mail.google.com': 'gmail.png',
	'calendar.google.com': 'google-calendar.png'
}

// URL
const domainName = new URL(location.href).hostname

// .ico
const iconName = iconMap[domainName];
if (iconName) {
	let iconHref = chrome.extension.getURL(`images/${iconName}`)
	setFavicon(iconHref);
}
else {
	console.warn('unmatched hostname', domainName)
}

function setFavicon(iconHref) {
	console.log("Update favicon to " + iconHref)
	// remove others
	document.querySelectorAll('link[rel~=icon]').forEach(l => l.remove())
	// add new one
	let newFavi = document.createElement('link')
	newFavi.rel = 'shortcut icon'
	newFavi.type = 'image/ico'
	newFavi.href = iconHref
	document.getElementsByTagName('head')[0].appendChild(newFavi);
}

