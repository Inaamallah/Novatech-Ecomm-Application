const FiltersCategories = ({ Title, Number, selectedcategory, setselectedcategory }) => {
    const isSelected = selectedcategory === Title

    return (
        <button
            className={`flex h-10 w-full items-center justify-between rounded-full px-4 text-left text-base transition ${isSelected
                ? 'bg-blue-50 font-semibold text-blue-600'
                : 'text-slate-700 hover:bg-slate-50'
                }`}
            onClick={() => setselectedcategory(Title)}
        >
            <span>{Title}</span>
            <span className={isSelected ? 'text-blue-500' : 'text-slate-400'}>{Number}</span>
        </button>
    )
}

export default FiltersCategories
