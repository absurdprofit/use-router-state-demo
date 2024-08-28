import * as Stack from '@react-motion-router/stack';

export default function StepOne() {
	const [email, setEmail] = Stack.useParams('email', '');
	const { params } = Stack.useRoute();
	return (
		<div>
			<h1>Step One</h1>
			<div style={{ display: 'flex' }}>
				<input
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Email"
					style={{ flex: 1, background: 'transparent', border: 'none' }}
				/>
				<Stack.Anchor href="step/2" params={params}>
					<button>Next</button>
				</Stack.Anchor>
			</div>
		</div>
	);
}