import { json } from '@sveltejs/kit';

export async function POST({ request, cookies }) {
	const { language, code } = await request.json();

	let output: string = '';
	let result: string = 'error';

	try {
		output = eval(code);
		result = 'success';
		// output = code;
	} catch (error: unknown) {
		result = 'error';
		if (typeof error === "string") {
			output = error.toUpperCase();
		} else if (error instanceof Error) {
			output = error.message 
		}
	}
	
	return json({ status: result, output }, { status: 201 });
}