import React, { useContext } from "react";
import ProductList from "./components/ProductList";
import Navbar from "./components/Navbar";
import { StoreContext } from "./context/StoreProvider";

const App = () => {
  const { theme } = useContext(StoreContext);

  return (
    <div
      style={{
        background: theme == "light" ? "white" : "black",
        color: theme == "light" ? "black" : "white",
        padding: "20px",
      }}
    >
      <Navbar />
      <ProductList />
    </div>
  );
};

export default App;

// Hooks
// useState()
// useEffect()
// useContext()
// useParams()
// useNavigate()
// useReducer()
// useMemo()
// useCallback()
// Custom Hooks

// REDUX: useDispatch(), useSelector()
