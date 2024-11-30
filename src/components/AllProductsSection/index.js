import { Component } from 'react';
import FiltersGroup from '../FiltersGroup';
import ProductCard from '../ProductCard';
import ProductsHeader from '../ProductsHeader';

import './index.css';

const categoryOptions = [
  { name: 'Clothing', categoryId: '1' },
  { name: 'Electronics', categoryId: '2' },
  { name: 'Appliances', categoryId: '3' },
  { name: 'Grocery', categoryId: '4' },
  { name: 'Toys', categoryId: '5' },
];

const sortbyOptions = [
  { optionId: 'PRICE_HIGH', displayText: 'Price (High-Low)' },
  { optionId: 'PRICE_LOW', displayText: 'Price (Low-High)' },
];

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
};

class AllProductsSection extends Component {
  state = {
    productsList: [],
    apiStatus: apiStatusConstants.initial,
    activeOptionId: sortbyOptions[0].optionId,
    activeCategoryId: '',
    searchInput: '',
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    this.setState({ apiStatus: apiStatusConstants.inProgress });

    const { activeOptionId, activeCategoryId, searchInput } = this.state;
    const apiUrl = `https://apis.ccbp.in/products?sort_by=${activeOptionId}&category=${activeCategoryId}&title_search=${searchInput}`;
    
    const response = await fetch(apiUrl); // Removed JWT token usage
    if (response.ok) {
      const fetchedData = await response.json();
      const updatedData = fetchedData.products.map(product => ({
        title: product.title,
        brand: product.brand,
        price: product.price,
        id: product.id,
        imageUrl: product.image_url,
        rating: product.rating,
      }));
      this.setState({ productsList: updatedData, apiStatus: apiStatusConstants.success });
    } else {
      this.setState({ apiStatus: apiStatusConstants.failure });
    }
  };

  renderLoadingView = () => (
    <div className="products-loader-container">
      <h1>Loading....</h1>
    </div>
  );

  renderProductsListView = () => {
    const { productsList } = this.state;
    const shouldShowProductsList = productsList.length > 0;

    return shouldShowProductsList ? (
      <div className="all-products-container">
        <ProductsHeader
          activeOptionId={this.state.activeOptionId}
          sortbyOptions={sortbyOptions}
          changeSortby={this.changeSortby}
        />
        <ul className="products-list">
          {productsList.map(product => (
            <ProductCard productData={product} key={product.id} />
          ))}
        </ul>
      </div>
    ) : (
      <div className="no-products-view">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-no-products-view.png"
          className="no-products-img"
          alt="no products"
        />
        <h1 className="no-products-heading">No Products Found</h1>
        <p className="no-products-description">
          We could not find any products. Try other filters.
        </p>
      </div>
    );
  };

  renderAllProducts = () => {
    const { apiStatus } = this.state;

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderProductsListView();
      case apiStatusConstants.inProgress:
        return this.renderLoadingView();
      default:
        return null;
    }
  };

  changeSortby = activeOptionId => {
    this.setState({ activeOptionId }, this.getProducts);
  };

  changeCategory = activeCategoryId => {
    this.setState({ activeCategoryId }, this.getProducts);
  };

  changeSearchInput = searchInput => {
    this.setState({ searchInput });
  };

  enterSearchInput = () => {
    this.getProducts();
  };

  clearFilters = () => {
    this.setState(
      {
        searchInput: '',
        activeCategoryId: '',
      },
      this.getProducts
    );
  };

  render() {
    const { activeCategoryId, searchInput } = this.state;

    return (
      <div className="all-products-section">
        <FiltersGroup
          searchInput={searchInput}
          categoryOptions={categoryOptions}
          activeCategoryId={activeCategoryId}
          changeSearchInput={this.changeSearchInput}
          enterSearchInput={this.enterSearchInput}
          changeCategory={this.changeCategory}
          clearFilters={this.clearFilters}
        />
        {this.renderAllProducts()}
      </div>
    );
  }
}

export default AllProductsSection;
