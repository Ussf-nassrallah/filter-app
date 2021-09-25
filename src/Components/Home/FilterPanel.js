import React from "react";
import CheckboxProton from "../common/CheckboxProton";
import FilterListToggle from "../common/FilterListToggle";
import SliderProton from "../common/SlideProton";
import { categoryList, ratingList } from "../constants/index";
import "./FilterPanel.scss";

function FilterPanel({ selectedCategory, selectCategory, selectedRating, selectRating, cuisines, changeChecked, selectedPrice, selectPrice }) {
  return (
    <div>
      {/* Category */}
      <div className="input-group">
        <p className="label">Category</p>
        <FilterListToggle
          options={categoryList}
          value={selectedCategory}
          selectToggle={selectCategory}
        />
      </div>

      {/* Cusines */}
      <div className="input-group">
        <p className="label">Cusines</p>
        {cuisines.map((cuisine) => (
          <CheckboxProton
            key={cuisine.id}
            cuisine={cuisine}
            changeChecked={changeChecked}
          />
        ))}
      </div>

      {/* Price Range */}
      <div className='input-group'>
        <p className='label' id="label-range">Price Range</p>
        <SliderProton value={selectedPrice} changePrice={selectPrice} />
      </div>

      {/* Star Rating */}
      <div className="input-group">
        <p className="label">Star Rating</p>
        <FilterListToggle
          options={ratingList}
          value={selectedRating}
          selectToggle={selectRating}
        />
      </div>
    </div>
  );
}

export default FilterPanel;
