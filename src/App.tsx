import * as Stack from "@react-motion-router/stack";
import "./App.css";
import Posts from "./Screens/Posts";
import Home from "./Screens/Home";
import Form from "./Screens/Form";
import Form2 from "./Screens/Form2";
import { AnimationEffectFactoryProps } from "@react-motion-router/core";
import { ParallelEffect } from "web-animations-extension";

function BackdropAnimation({
  ref,
  direction,
  playbackRate,
  index,
}: AnimationEffectFactoryProps) {
  const options: KeyframeEffectOptions = {
    duration: 300,
    direction,
    playbackRate,
    fill: "both",
    pseudoElement: "::backdrop",
  };
  const fadeOut = [
    { backgroundColor: "rgba(0, 0, 0, 0.8)" },
    { backgroundColor: "rgba(0, 0, 0, 0)" },
  ];
  const fadeIn = [
    { backgroundColor: "rgba(0, 0, 0, 0)" },
    { backgroundColor: "rgba(0, 0, 0, 0.8)" },
  ];
  const keyframes = [fadeOut, fadeIn];

  return new KeyframeEffect(ref, keyframes[index], options);
}
function ModalAnimation(props: AnimationEffectFactoryProps) {
  return new ParallelEffect([
    Stack.androidRevealFromBottom(props),
    BackdropAnimation(props),
  ]);
}

function App() {
  return (
    <Stack.Router
      config={{ screenConfig: { animation: Stack.iOSSlideInFromRight } }}
    >
      <Stack.Screen path="." component={Home} />
      <Stack.Screen path="posts" component={Posts} />
      <Stack.Screen
        path="form/**"
        component={Form}
        config={{
          presentation: "modal",
          animation: ModalAnimation,
        }}
      />
      <Stack.Screen
        path="form-2/**"
        component={Form2}
        config={{
          presentation: "modal",
          animation: ModalAnimation,
        }}
      />
      <Stack.Screen path="*" component={() => <h1>404</h1>} />
    </Stack.Router>
  );
}

export default App;
