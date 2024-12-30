//* Both useMemo and useCallback are React hooks used for performance optimization by memoizing values or functions.

/* useMemo 
 -> Memoizes the result of the computation.
 -> To avoid expensive calculations on every render.
 */

const ExpensiveCalculation = () => {
  const [cnt, setCount] = useState();
  const [text, setText] = useState("");

  // react element -> Memoized the calculation
  const squared = useMemo(() => {
    return cnt * cnt;
  }, [cnt]);

  // memoizes the function
  const increement = useCallback(() => {
    setCount(cnt + 2);
  }, []); // function only recreated once

  return (
    <>
      <h1>Squared Value : {squared}</h1>
      <button onClick={increement}>Increement</button>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something"
      />
    </>
  );
};

// useCallback -> Memoizes the function to avoid recreating it on every re render.
// Used when we need too pass this component to other component as a child component.
