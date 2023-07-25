import React from "react";
import {useGlobalContext} from "./context";

const SearchForm = () => {
    const {setSearchWord} = useGlobalContext();
    const handleSubmit = (e) => {
        e.preventDefault();
        const searchValue = e.target.elements.search.value;
        if (!searchValue) return;
        setSearchWord(searchValue);
    };

    return (
        <section>
            <h1 className="title">Unsplash Images</h1>
            <form className="search-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="search"
                    className="form-input search-input"
                    placeholder="Honey"
                />
                <button type="submit" className="btn">
                    Search
                </button>
            </form>
        </section>
    );
};

export default SearchForm;
