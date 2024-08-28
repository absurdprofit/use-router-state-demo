import * as Stack from '@react-motion-router/stack';
import './App.css'
import Posts from './Screens/Posts';
import Home from './Screens/Home';
import Form from './Screens/Form';
import Form2 from './Screens/Form2';

function App() {
  return (
    <Stack.Router config={{ screenConfig: { animation: Stack.iOSSlideInFromRight }}}>
      <Stack.Screen path="." component={Home} />
      <Stack.Screen path="posts" component={Posts} />
      <Stack.Screen
        path="form/**"
        component={Form}
        config={{
          presentation: "modal",
          animation: Stack.androidRevealFromBottom
        }}
      />
      <Stack.Screen
        path="form-2/**"
        component={Form2}
        config={{
          presentation: "modal",
          animation: Stack.androidRevealFromBottom
        }}
      />
      <Stack.Screen path="*" component={() => <h1>404</h1>} />
    </Stack.Router>
  );
}

export default App
