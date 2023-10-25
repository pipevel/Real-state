const Search = () => {
    return (
        <header>
            <h2 className="header__title">Encuentra tu vivienda sostenible a un solo click</h2>
            <input
                type="text"
                className="header__search"
                placeholder="Introduce tu dirección o tu código ZIP"
            />
        </header>
    );
}

export default Search;