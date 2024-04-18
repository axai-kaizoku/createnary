function calculateIncome(followersInNum: number, products: number) {
	let earning = 0;

	let followers = followersInNum * 1000;

	earning = (followers * products) / followers;

	const monthlyIncome = earning * 1000;
	const yearlyIncome = monthlyIncome * 12;

	return { monthlyIncome, yearlyIncome };
}

export async function POST(request: any) {
	try {
		const { influencer, followers, products } = await request.json();

		const data = calculateIncome(followers, products);

		return Response.json(data);
	} catch (error: any) {
		return Response.json(error, { status: 500 });
	}
}
