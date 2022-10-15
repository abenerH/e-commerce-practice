//@desc GET products/gaming
const getGamingProducts = (req, res) => {
  res.send("Showing all gaming products");
};

//@desc GET products/gaming/:id
const getGamingProduct = (req, res) => {
  res.send(`Showing a single product: ${req.params.id}`);
};

//@desc POST products/gaming
const postGamingProduct = (req, res) => {
  res.send("Adding new gaming product");
};

//@desc PUT products/gaming
const putGamingProduct = (req, res) => {
  res.send(`Updating a single product: ${req.params.id}`);
};

//@desc DELETE products/gaming
const deleteGamingProduct = (req, res) => {
  res.send(`Showing a single product: ${req.params.id}`);
};

module.exports = {
  getGamingProducts,
  getGamingProduct,
  postGamingProduct,
  putGamingProduct,
  deleteGamingProduct,
};
