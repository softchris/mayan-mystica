// is on Node.js, i.e building project
if (typeof window === 'undefined') {
	console.log('is Node.js');

	const items = require('../utils/items.json');

	global.localStorage = {
		generateUID() {},
		setUID() {},
		getUID() {},
		//setSessionTicket(id) {},
		//getSessionTicket() {},
		setItem() {},
		getItem() {
			// we need a mocked response of all items, otherwise the build process will crash everytime we add a new item
			const mockResponse = items.reduce((acc, curr) => {
				return { ...acc, [curr.id]: true };
			}, {});
			return JSON.stringify(mockResponse);
		},
	};
}

/*export function setSessionTicket(id) {
	localStorage.setItem('sessionTicket', id);
}

export function getSessionTicket() {
	return localStorage.getItem('sessionTicket');
}*/

export function generateUID() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		var r = (Math.random() * 16) | 0,
			v = c == 'x' ? r : (r & 0x3) | 0x8;
		return v.toString(16);
	});
}

export function hasUID() {
	var uid = localStorage.getItem('uid');
	if (uid != null) {
		return true;
	} else {
		return false;
	}
}

export function getUID() {
	return localStorage.getItem('uid');
}

export function setUID() {
	var uid = generateUID();
	localStorage.setItem('uid', JSON.stringify(uid));
}

export function hasItem(id) {
	var json = localStorage.getItem('snapshots');
	var snaps = JSON.parse(json);
	if (!snaps) {
		snaps = {};
	}
	return snaps[id];
}

export function addItem(id) {
	var json = localStorage.getItem('snapshots');
	var snaps = JSON.parse(json);
	if (!snaps) {
		snaps = {};
	}
	snaps[id] = true;
	localStorage.setItem('snapshots', JSON.stringify(snaps));
}

export function getItems() {
	var json = localStorage.getItem('snapshots');

	var snaps = JSON.parse(json);
	if (!snaps) {
		snaps = {};
	}
	var keys = Object.keys(snaps);
	return keys;
}
