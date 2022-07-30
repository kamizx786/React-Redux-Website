import Header from "./container/Header";
import ProductDetail from "./container/ProductDetail";
import Productlisting from "./container/productlisting";
import DisplayTestAPi from "./DisplayTestAPi";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
function App() {
  return (
  <>
<Router>
<Header/>
<Routes>
  <Route path="/" element={<Productlisting/>} />
  <Route path="/detail/:id" element={<ProductDetail/>} />
  <Route path="/Api" element={<DisplayTestAPi/>} />
</Routes>
</Router>
  </>
  );
}

export default App;
