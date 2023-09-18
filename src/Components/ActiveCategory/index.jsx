import { useSelector } from 'react-redux';

import { When } from 'react-if';

function ActiveCategory() {

    const { activeCategory } = useSelector((state) => state.categories);
    // console.log(activeCategory)


    return (
        <>
            <When condition={activeCategory}>
                <h1 key={activeCategory.displayName}>{activeCategory.displayName}</h1>
                <h4>Description on the Way</h4>
            </When>
        </>
    )
}

export default ActiveCategory;
