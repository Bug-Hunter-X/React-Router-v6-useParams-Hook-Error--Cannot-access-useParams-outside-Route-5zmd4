In React Router Dom v6, attempting to access the `useParams` hook outside of a component using the `Route` or `Routes` component will result in an error.  This is because `useParams` is designed to work only within the context of a route definition where route parameters are available.  For example, this will cause an error:

```javascript
import { useParams } from 'react-router-dom';

const MyComponent = () => {
  const { id } = useParams(); // Error! useParams is not accessible here.
  return <div>Component</div>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/:id" element={<MyComponent/>} />
    </Routes>
  );
};
```