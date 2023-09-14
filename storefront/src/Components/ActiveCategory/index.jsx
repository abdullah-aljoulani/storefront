import { useSelector } from 'react-redux';

function ActiveCategory() {

    const { activeCategory } = useSelector((state) => state.categories);
    // console.log(activeCategory)


    return (
        <>
            <h1 key={activeCategory.displayName}>{activeCategory.displayName}</h1>
        </>
    )
}

export default ActiveCategory;
