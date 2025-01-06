```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic here using a flag 
    let shouldReset = false;
    if (count > 5) {
      shouldReset = true;
    }
    if (shouldReset) {
      setCount(0);
    }
    // or even better alternative using return statement 
    if (count > 5) return setCount(0);
  }, [count]); 

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```