const DeleteProduct = (id, fetchProducts) => {
  if (window.confirm("Are you sure you want to delete this book?")) {
    fetch(`https://6746607e512ddbd807fba991.mockapi.io/Book/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) fetchProducts();
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
      });
  }
};

export default DeleteProduct;