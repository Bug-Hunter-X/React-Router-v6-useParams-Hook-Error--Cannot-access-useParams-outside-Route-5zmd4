The correct way to use `useParams` is within a component that is rendered by a Route:

```javascript
import { useParams } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

const MyComponent = () => {
  const { id } = useParams(); // Now this works correctly
  return <div>Component {id}</div>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/:id" element={<MyComponent/>} />
    </Routes>
  );
};
export default App;
```
By moving the `useParams` call into `MyComponent`, we ensure that it's used within the context of a route, fixing the error.