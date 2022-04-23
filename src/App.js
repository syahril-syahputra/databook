import React, { useReducer, createContext } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from './screens/HomeScreen';

export const dataContext = createContext();

const initialData = {
  category: [],
  book: []
}

const dataReducer = (state, action) => {

  switch (action.type) {
    case "addCategory":
      return { ...state, category: action.payload };
    case "addBook":
      localStorage.clear();
      return { ...state, book: action.payload };
    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(dataReducer, initialData)

  return (
    <BrowserRouter>
      <dataContext.Provider value={[state, dispatch]}>
      <Routes>
          <Route path="/" >
            <Route path="" element={<HomeScreen />} />
          
          </Route>

        </Routes>
      </dataContext.Provider>
    </BrowserRouter>
  );
}

export default App;
