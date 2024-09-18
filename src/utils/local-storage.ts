export const setToLocalStorage = (key: string, token: string) => {
	if (!key || typeof window === 'undefined') {
		return '';
	}
	return localStorage.setItem(key, token);
};

export const getFromLocalStorage = (key: string) => {
	console.log('🚀 ~ getFromLocalStorage ~ key:', key);
	if (!key || typeof window === 'undefined') {
		console.log('LocalStorage Available');
		return '';
	}

	return localStorage.getItem(key);
};

export const removeFromLocalStorage = (key: string) => {
	if (!key || typeof window === 'undefined') {
		return '';
	}
	return localStorage.removeItem(key);
};
