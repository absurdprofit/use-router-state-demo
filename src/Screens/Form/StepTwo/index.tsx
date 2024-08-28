import * as Stack from '@react-motion-router/stack';

export default function StepTwo() {
	const [name, setName] = Stack.useParams('name', '');
	const { params } = Stack.useRoute();
	return (
		<div>
			<h1>Step Two</h1>
			<div style={{ display: 'flex' }}>
				<input
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder="Name"
					style={{ flex: 1, background: 'transparent', border: 'none' }}
				/>
				<Stack.Anchor href="." params={params}>
					<button>Next</button>
				</Stack.Anchor>
			</div>
		</div>
	);
}