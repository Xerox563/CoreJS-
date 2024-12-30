// const Header = () => {
//   const [name, setName] = useState("Raju");
//   const clickHandler = () => {
//     setName("Amit");
//   };
//   return (
//     <>
//       <h1>Hello {name}</h1>
//       <button onClick={clickHandler}>Cick ME</button>
//     </>
//   );
// };

// const Footer = () => {
//   const [name, setName] = useState("Raju");
//   const clickHandler = (e) => {
//     e.preventDefault();
//     setName(e.target.value);
//   };
//   return (
//     <>
//       <h1>Hello {name}</h1>
//       <input type="text" onChange={clickHandler} />
//     </>
//   );
// };

// const Api = () => {
//   useEffect(() => {});
//   return <h1>Hello API</h1>;
// };

// * Context - API
// const {createContext,useState} from "react";

// const counterContext = createContext();

// const counterProvider = ({children}) => {
//    const [count,setCount] = useState(0);
//    const increement = () => setCount((prev) => prev + 1);
//    return (
//     <counterContext.Provider value={{count,setCount,increement}}>
//         {children}
//     </>
//    )
// }

// const App = () => {
//     return (
//         <counterProvider>
//             <Header/>
//         </counterProvider>
//     )
// }
// then use -> useContext(counterContext);

// * Custom hook

const useFetch = (url) => {
  const [result, setData] = useEffect();
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(url);
      const res = await data.json();
      if (!res.ok) {
        console.log("Invalid API");
      } else {
        setData(res);
      }
    };
  }, [url]);

  return result;
};

function Main() {
  const data_Api = useFetch("https://api.example.com/data");
  return <h1>{data_api}</h1>;
}


