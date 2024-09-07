import * as Stack from '@react-motion-router/stack';
import Form from './Form';
import { SharedElement } from '@react-motion-router/core';

function Header(props: Stack.ScreenComponentProps<{ step: string; }>) {
	const navigation = Stack.useNavigation();
	const { step } = props.route.params;
	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			{step && navigation.canGoBack() && (
				<SharedElement id="back">
					<Stack.Anchor style={{ width: 'max-content' }} goBack>Back</Stack.Anchor>
				</SharedElement>
			)}
			{!navigation.canGoBack() && (
				<SharedElement id="back" config={{ type: "fade-through" }}>
					<Stack.Anchor style={{ width: 'max-content' }} navigation={navigation.parent as Stack.Navigation} goBack>Close</Stack.Anchor>
				</SharedElement>
			)}
			<SharedElement id="title">
				<h5 style={{ flex: 1 }}>Form</h5>
			</SharedElement>
		</div>
	);
}
export default function Form2() {
	return (
		<Stack.Router config={{
			shouldIntercept(e) {
				return Boolean(e.formData);
			},
			onIntercept(e) {
				if (e.formData) {
					const formData = e.formData;
					e.intercept({ handler: () => {
						return new Promise((resolve, reject) => {
							const timeoutId = setTimeout(() => {
								console.log(formData);
								resolve();
							}, 3000);

							e.signal.onabort = () => {
								clearTimeout(timeoutId);
								reject();
							};
						});
					}});
				}
			},
			screenConfig: {
				animation: Stack.androidScaleFromCentre,
				header: {
					component: Header
				}
			}
		}}>
			<Stack.Screen path="{step/:step(1|2)}?" component={Form} />
		</Stack.Router>
	);
}