import reactLogo from '../../assets/react.svg'
import * as Stack from '@react-motion-router/stack';
import viteLogo from '/vite.svg'

export default function Home() {
  const [count, setCount] = Stack.useParams("count", 0);
  const route = Stack.useRoute();

  const onShowForm = () => {
    // route.setConfig({ animation: () => new KeyframeEffect(null, [], {}) });
  }
  const onPosts = () => {
    // route.setConfig({ animation: Stack.iOSSlideInFromRight });
  }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Stack.Anchor href="posts" onClick={onPosts}>Go to Posts</Stack.Anchor>
      <Stack.Anchor href="form/step/1" onClick={onShowForm}>Go to Form</Stack.Anchor>
      <Stack.Anchor href="form-2/step/1" onClick={onShowForm}>Go to Form 2</Stack.Anchor>
    </>
  )
}