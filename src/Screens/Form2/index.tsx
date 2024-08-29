import * as Stack from '@react-motion-router/stack';
import Form from './Form';

function Header() {
	const navigation = Stack.useNavigation();
	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			{navigation.canGoBack() && <Stack.Anchor style={{ width: 'max-content' }} goBack>Back</Stack.Anchor>}
			{!navigation.canGoBack() && <Stack.Anchor style={{ width: 'max-content' }} navigation={navigation.parent as Stack.Navigation} goBack>Close</Stack.Anchor>}
			<h5 style={{ flex: 1 }}>Form</h5>
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
						return new Promise((resolve) => {
							setTimeout(() => {
								console.log(formData);
								resolve();
							}, 3000);
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