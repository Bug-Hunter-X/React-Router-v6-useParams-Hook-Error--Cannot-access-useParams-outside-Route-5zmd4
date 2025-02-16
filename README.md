# React Router v6 useParams Hook Error
This repository demonstrates a common error encountered when using the `useParams` hook in React Router v6. The `useParams` hook is designed to be used within components rendered by a `Route` element. Attempting to access it outside of this context will result in an error.

## The Bug
The bug arises from trying to access route parameters from outside the scope of a route component. The provided example shows `useParams` being incorrectly used in a component not directly associated with a route.

## The Solution
The solution involves restructuring the code to ensure that `useParams` is called only within a component that is rendered by a `Route` component.  The provided solution moves the `useParams` call to the component rendered inside the Route definition.