import ProductHeader from "../../components/ProductHeader";
import Filter from "../../components/productsPage/Filter";

const Products = () => {
  return (
    <div className="min-h-[50vh]">
      <div className="products_page  bg-background">
        <ProductHeader />
      </div>
      <Filter />
      <div className="text-center">My cards here</div>
    </div>
  );
};

export default Products;
