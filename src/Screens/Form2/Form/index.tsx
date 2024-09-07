import { SharedElement } from '@react-motion-router/core';
import * as Stack from '@react-motion-router/stack';
import React from 'react';

interface Params {
	name?: string;
	email?: string;
	step?: "1" | "2";
}

function StepOne() {
	const [name, setName] = Stack.useParams("name", "");
	const { params } = Stack.useRoute<Params>();
	const { step } = params;

	if (!step) return null;
	return (
		<SharedElement id="step-1">
			<div>
				<label htmlFor="name">Name:</label>
				<input
					type="text"
					id="name"
					name="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					readOnly={step !== "1"}
				/>
			</div>
		</SharedElement>
	);
}

function StepTwo() {
	const [email, setEmail] = Stack.useParams("email", "");
	const { params } = Stack.useRoute<Params>();
	const { step } = params;

	if (step === undefined || step === "1") return null;
	return (
		<div>
			<label htmlFor="email">Email:</label>
			<input
				type="email"
				id="email"
				name="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				readOnly={step !== "2"}
			/>
		</div>
	);
}

function useFormStatus() {
	const [success, setSuccess] = React.useState(false);
	const [pending, setPending] = React.useState(true);
	const navigation = Stack.useNavigation();
	
	React.useEffect(() => {
		navigation.transition?.finished
			.then(() => setSuccess(true))
			.catch(() => setSuccess(false))
			.finally(() => setPending(false));
	}, [navigation.transition]);

	return {
		success,
		pending
	};
}

export default function Form() {
	const { pending, success } = useFormStatus();
	const { params } = Stack.useRoute<Params>();
	const { step } = params;

	const action = step === "1" ? "2" : "..";
	const method = step === "1" ? "GET" : "POST";
	const complete = !step;
	const submitting = complete && pending;
	const submitted = complete && !pending;
	return (
		<div style={{ height: 330 }}>
			{step && <h1>Step {step}</h1>}
			{submitting && <h1>Submitting...</h1>}
			{submitted && <h1>Submitted...</h1>}
			{submitted && <p>{success === true ? "Success" : "Failed"}</p>}
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
				<StepOne />
				<StepTwo />
				{step && (
					<SharedElement id="submit">
						<button type='submit'>
							{step === "1" ? 'Next' : 'Submit'}
						</button>
					</SharedElement>
				)}
			</form>
		</div>
	);
}