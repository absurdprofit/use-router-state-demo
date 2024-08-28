import * as Stack from '@react-motion-router/stack';

export default function Posts() {
	return (
		<div>
			<h1>Posts</h1>
			<p>Posts page content</p>
			<Stack.Anchor goBack>Go Back</Stack.Anchor>
		</div>
	);
}