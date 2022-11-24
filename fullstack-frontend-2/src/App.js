import { Fragment, useState } from 'react'
import Navbar from "./components/Navbar";
import AdminPage from './pages/AdminPage';

function App() {
  const [isAdminVisible, setIsAdminVisible] = useState(false)
  const [allProducts, setAllProducts] = useState([])

  return (
    <Fragment>
      <Navbar setIsAdminVisible={setIsAdminVisible} />
      {
        isAdminVisible &&
        <AdminPage
          allProducts={allProducts}
          setAllProducts={setAllProducts}
        />
      }
    </Fragment>
  )
}

export default App;
