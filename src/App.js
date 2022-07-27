import Header from "./container/Header";
import ProductDetail from "./container/ProductDetail";
import Productlisting from "./container/productlisting";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
function App() {
  return (
  <>
<Router>
<Header/>
<Routes>
  <Route path="/" element={<Productlisting/>} />
  <Route path="/detail/:id" element={<ProductDetail/>} />
</Routes>
</Router>
  </>
  );
}

export default App;
