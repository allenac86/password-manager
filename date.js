const getDateNow = () => {
	const date = new Date();
	const day = date.getDate();
	const month = date.getMonth() + 1; // 0 based index, 0 = Jan, 1 = Feb
	const year = date.getFullYear();

	const formatDate = `${month}/${day}/${year}`;

	return formatDate;
};

module.exports = getDateNow;
