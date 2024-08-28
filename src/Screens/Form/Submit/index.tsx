import * as Stack from '@react-motion-router/stack';

export default function Submit() {
	const { params } = Stack.useRoute<{ name: string; email: string }>();
	return (
		<div>
			<h1>Final Step</h1>
			<form method="dialog">
				<h3>You SUBMITTED</h3>
				<h5>Name: {params.name}</h5>
				<h5>Email: {params.email}</h5>
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
}