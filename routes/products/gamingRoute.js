const router = require("express").Router();
const {
  getGamingProducts,
  getGamingProduct,
  postGamingProduct,
  putGamingProduct,
  deleteGamingProduct,
} = require("../../controllers/gamingController");

router.route("/").get(getGamingProducts).post(postGamingProduct);

router
  .route("/:id")
  .get(getGamingProduct)
  .put(putGamingProduct)
  .delete(deleteGamingProduct);

module.exports = router;
