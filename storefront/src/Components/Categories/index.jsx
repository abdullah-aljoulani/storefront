import { useDispatch, useSelector } from 'react-redux';
import { changeCategory } from '../../store/categories';

function Categories() {

    const { categories } = useSelector((state) => state.categories);
    // console.log(categories)

    const dispatch = useDispatch();
    const categoryHandler = (category) => {
        dispatch(changeCategory(category))
    };

    return (
        <>
        <h2>Browse Our Categories</h2>
        {
            categories.map((category, index) => (
                <article key={`category-${index}`}>
                    <h3 onClick={() => categoryHandler(category)}>{category.displayName}</h3>
                </article>
            ))
        }
        </>
    )
}

export default Categories;