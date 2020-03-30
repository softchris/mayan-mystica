// is on Node.js, i.e building project
if (typeof window === 'undefined') {
	console.log('is Node.js');

	const items = require('../utils/items.json');

	global.localStorage = {
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
