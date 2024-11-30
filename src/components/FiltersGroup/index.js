import { BsSearch } from 'react-icons/bs';
import './index.css';

const FiltersGroup = (props) => {
  const {
    searchInput,
    categoryOptions = [], // Ensure it's always an array
    ratingsList = [], // Ensure it's always an array
    activeCategoryId,
    activeRatingId,
    changeSearchInput,
    enterSearchInput,
    changeCategory,
    changeRating,
    clearFilters,
  } = props; 

  // Render Ratings List
  const renderRatingsFiltersList = () => {
    return ratingsList.map((rating) => {
      const onClickRatingItem = () => changeRating(rating.ratingId);

      const ratingClassName =
        activeRatingId === rating.ratingId ? 'and-up active-rating' : 'and-up';

      return (
        <li
          className="rating-item"
          key={rating.ratingId}
          onClick={onClickRatingItem}
        >
          <img
            src={rating.imageUrl}
            alt={`rating ${rating.ratingId}`}
            className="rating-img"
          />
          <p className={ratingClassName}>& up</p>
        </li>
      );
    });
  };

  // Render Ratings Section
  const renderRatingsFilters = () => (
    <div>
      <h1 className="rating-heading">Rating</h1>
      <ul className="ratings-list">{renderRatingsFiltersList()}</ul>
    </div>
  );

  // Render Categories List
  const renderCategoriesList = () => {
    return categoryOptions.map((category) => {
      const onClickCategoryItem = () => changeCategory(category.categoryId);

      const isActive = category.categoryId === activeCategoryId;
      const categoryClassName = isActive ? 'category-item active-category' : 'category-item';

      return (
        <li
          className={categoryClassName}
          key={category.categoryId}
          onClick={onClickCategoryItem}
        >
          <p>{category.name}</p>
        </li>
      );
    });
  };

  // Render Categories Section
  const renderProductCategories = () => (
    <div>
      <h1 className="category-heading">Category</h1>
      <ul className="categories-list">{renderCategoriesList()}</ul>
    </div>
  );

  // Handle Search Input and Enter Key
  const onEnterSearchInput = (event) => {
    if (event.key === 'Enter') {
      enterSearchInput();
    }
  };

  const onChangeSearchInput = (event) => {
    changeSearchInput(event.target.value);
  };

  // Render Search Input
  const renderSearchInput = () => (
    <div className="search-input-container">
      <input
        value={searchInput}
        type="search"
        className="search-input"
        placeholder="Search"
        onChange={onChangeSearchInput}
        onKeyDown={onEnterSearchInput}
      />
      <BsSearch className="search-icon" />
    </div>
  );

  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      {renderProductCategories()}
      {renderRatingsFilters()}
      <button
        type="button"
        className="clear-filters-btn"
        onClick={clearFilters}
      >
        Clear Filters
      </button>
    </div>
  );
};

export default FiltersGroup;
