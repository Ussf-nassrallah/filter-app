import React, { useState, useEffect } from "react";
import FilterPanel from "../../Components/Home/FilterPanel";
import List from "../../Components/Home/List";
import SearchBar from "../../Components/Home/SearchBar";
import { dataList } from "../../Components/constants";
import "./Home.scss";

function Home() {
    const [inputSearch, setInputSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedRating, setSelectedRating] = useState(null);
    const [selectedPrice, setSelectedPrice] = useState([1000, 5000]);
    const [list, setList] = useState(dataList);

    const [cuisines, setCuisines] = useState([
        { id: 1, checked: false, label: "American" },
        { id: 2, checked: false, label: "Chinese" },
        { id: 3, checked: false, label: "Italian" },
    ]);

    const handleSelectCategory = (event, value) =>
        !value ? null : setSelectedCategory(value);
    const handleSelectRating = (event, value) =>
        !value ? null : setSelectedRating(value);

    const handleChangeChecked = (id) => {
        const cusinesStateList = cuisines;
        const changeCheckedCuisines = cusinesStateList.map((item) =>
            item.id === id ? { ...item, checked: !item.checked } : item
        );
        setCuisines(changeCheckedCuisines);
    };

    const handleChangePrice = (event, value) => {
        setSelectedPrice(value);
    };

    const applyFilter = () => {
        let updatedList = dataList;

        // Rating Filter
        if (selectedRating) {
            updatedList = updatedList.filter(
                (item) => parseInt(item.rating) === parseInt(selectedRating)
            );
        }

        // Category Filter
        if (selectedCategory) {
            updatedList = updatedList.filter(
                (item) => item.category === selectedCategory
            );
        }

        // Cuisines Filter
        const cuisineChecked = cuisines
            .filter((item) => item.checked)
            .map((item) => item.label.toLowerCase());

        if (cuisineChecked.length) {
            updatedList = updatedList.filter((item) =>
                cuisineChecked.includes(item.cuisine)
            );
        }

        // Price Filter
        const minPrice = selectedPrice[0];
        const maxPrice = selectedPrice[1];

        updatedList = updatedList.filter(
            (item) => item.price >= minPrice && item.price <= maxPrice
        );

        // Search Filter
        if (inputSearch) {
            updatedList = updatedList.filter(
                (item) =>
                    item.title
                        .toLowerCase()
                        .search(inputSearch.toLowerCase().trim()) !== -1
            );
        }

        setList(updatedList);
    };

    useEffect(() => {
        applyFilter();
    }, [
        selectedRating,
        selectedCategory,
        cuisines,
        selectedPrice,
        inputSearch,
    ]);

    return (
        <div className="home">
            {/* Search Bar */}
            <header className="home__header">
                <SearchBar
                    className="home__header-searchBar"
                    changeInput={(e) => setInputSearch(e.target.value)}
                    value={inputSearch}
                />
            </header>

            <div className="home__grid">
                {/* Filter Panel */}
                <section className="home__sidebar">
                    <FilterPanel
                        className="home__sidebar-filterPanel"
                        selectedCategory={selectedCategory}
                        selectCategory={handleSelectCategory}
                        selectedRating={selectedRating}
                        selectRating={handleSelectRating}
                        cuisines={cuisines}
                        changeChecked={handleChangeChecked}
                        selectedPrice={selectedPrice}
                        selectPrice={handleChangePrice}
                    />
                </section>

                {/* List */}
                <section className="home__list">
                    <List className="home__list-items" list={list} />
                </section>
            </div>
        </div>
    );
}

export default Home;
