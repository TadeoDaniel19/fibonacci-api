const isNumber = (n) => {
	return /^-?[\d.]+(?:e-?\d+)?$/.test(n);
}

module.exports = isNumber;