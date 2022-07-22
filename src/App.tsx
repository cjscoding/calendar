import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./store/configureStore";
import Home from "./pages/home";

function App() {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <BrowserRouter>
        <Routes>
          <Route path="/calendar" element={<Home />} />
        </Routes>
      </BrowserRouter>
      {/* </PersistGate> */}
    </Provider>
  );
}

export default App;
