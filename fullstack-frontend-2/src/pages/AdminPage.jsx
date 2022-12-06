import { useState } from "react";
import { Fab } from "@mui/material";
import AddCircleOutline from "@mui/icons-material/AddCircleOutline";
import AddProductModal from "../modals/AddProductModal";
import ProductListAdmin from "../components/ProductListAdmin";
import Container from "@mui/material/Container";
import EditProductModal from "../modals/EditProductModal";
import { deleteProduct, saveProduct, updateProduct } from "../api/productsApi";

const AdminPage = ({ allProducts, setAllProducts }) => {
  const [isAddProductModalVisible, setIsAddProductVisible] = useState(false);
	const [isEditProductModalVisible, setIsEditProductModalVisible] = useState(false);
	const [editProduct, setEditProduct] = useState();

  const handleOnSubmit = async (product) => {
    const tempProducts = Array.from(allProducts);
    if (product._id) {
      const newProduct = await updateProduct(product);
      const productIndex = tempProducts.findIndex(p => p._id === product._id);
      tempProducts[productIndex] = newProduct;
    }
    else {
      const newProduct = await saveProduct(product);
      if (newProduct)
        tempProducts.push(newProduct);
    }
    setAllProducts(tempProducts);
  };

  const handleOnEdit = product => {
    setIsEditProductModalVisible(true)
    setEditProduct(product)
  }

  const handleOnDelete = async id => {
    const response = await deleteProduct(id);
    if (response)
      setAllProducts(prev => prev.filter(p => p._id !== id));
  }

  return (
    <Container maxWidth="lg" sx={{ margin: 2 }}>
      <Fab
        variant="extended"
        onClick={() => setIsAddProductVisible(true)}
        sx={{
          position: "absolute",
          bottom: "24px",
          right: "24px",
        }}
      >
        <AddCircleOutline sx={{ mr: 1 }} />
        Add a new product
      </Fab>
      <ProductListAdmin
        products={allProducts}
        handleOnEdit={handleOnEdit}
        handleOnDelete={handleOnDelete}
      />
      <AddProductModal
        open={isAddProductModalVisible}
        onClose={() => setIsAddProductVisible(false)}
        onSubmit={handleOnSubmit}
      />
      <EditProductModal
        open={isEditProductModalVisible}
        onClose={() => setIsEditProductModalVisible(false)}
        onSubmit={handleOnSubmit}
        product={editProduct}
      />
    </Container>
  );
};

export default AdminPage;
