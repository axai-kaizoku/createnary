export function formatNumberWithCommas(number: number) {
	const formatter = new Intl.NumberFormat('en-IN');
	return formatter.format(number);
}
