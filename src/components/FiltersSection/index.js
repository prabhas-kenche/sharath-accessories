import React from 'react';
import FiltersGroup from '../FiltersGroup';

class FiltersSection extends React.Component {
  render() {
    const {
      searchInput,
      categoryOptions,
      ratingsList,
      activeCategoryId,
      activeRatingId,
      changeSearchInput,
      enterSearchInput,
      changeCategory,
      changeRating,
      clearFilters,
    } = this.props;

    return (
      <div className="filters-section">
        {/* Pass all necessary props to FiltersGroup */}
        <FiltersGroup
          searchInput={searchInput}
          categoryOptions={categoryOptions}
          ratingsList={ratingsList}
          activeCategoryId={activeCategoryId}
          activeRatingId={activeRatingId}
          changeSearchInput={changeSearchInput}
          enterSearchInput={enterSearchInput}
          changeCategory={changeCategory}
          changeRating={changeRating}
          clearFilters={clearFilters}
        />
      </div>
    );
  }
}

export default FiltersSection;
