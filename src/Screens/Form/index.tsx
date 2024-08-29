import * as Stack from '@react-motion-router/stack';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import Submit from './Submit';

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

export default function Form() {
	return (
		<Stack.Router config={{
			screenConfig: {
				animation: Stack.androidScaleFromCentre,
				header: {
					component: Header
				}
			}
		}}>
			<Stack.Screen path="step/1" component={StepOne} />
			<Stack.Screen path="step/2" component={StepTwo} />
			<Stack.Screen path="." component={Submit} />
		</Stack.Router>
	);
}