import * as Stack from '@react-motion-router/stack';

interface Params {
	name?: string;
	email?: string;
	step?: "1" | "2";
}

function Step1() {
	const [name, setName] = Stack.useParams("name", "");
	const { params } = Stack.useRoute<Params>();
	const { step } = params;

	if (!step) return null;
	return (
		<>
			<label htmlFor="name">Name:</label>
			<input
				type="text"
				name="name"
				value={name}
				onChange={(e) => setName(e.target.value)}
				readOnly={step !== "1"}
			/>
		</>
	);
}

function Step2() {
	const [email, setEmail] = Stack.useParams("email", "");
	const { params } = Stack.useRoute<Params>();
	const { step } = params;

	if (step === undefined || step === "1") return null;
	return (
		<>
			<label htmlFor="email">Email:</label>
			<input
				type="email"
				name="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				readOnly={step !== "2"}
			/>
		</>
	);
}

export default function Form() {
	const { params } = Stack.useRoute<Params>();
	const { step } = params;

	const action = step === "1" ? "2" : "..";
	const method = step ? "GET" : "POST";
	return (
		<div style={{ height: 330 }}>
			{step && <h1>Step {step}</h1>}
			{!step && <h1>Submitting...</h1>}
			<form
				action={action}
				method={method}
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '1rem',
					paddingInline: '2rem'
				}}
			>
				<Step1 />
				<Step2 />
				{step && (
					<button type='submit'>
						{step === "1" ? 'Next' : 'Submit'}
					</button>
				)}
			</form>
		</div>
	);
}