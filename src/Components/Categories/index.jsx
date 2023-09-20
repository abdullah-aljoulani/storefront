import { useDispatch, useSelector } from 'react-redux';
import { changeCategory } from '../../store/actions';
import { Button, ButtonGroup } from '@mui/material';
import { useEffect } from 'react';
import { getCategories } from '../../store/categories';

function Categories() {

    const { categories } = useSelector((state) => state.categories);
    // console.log(categories)

    const dispatch = useDispatch();
    const categoryHandler = (category) => {
        dispatch(changeCategory(category))
    };

    useEffect(() => {
        dispatch(getCategories())
    }, []);

    return (
        <>
        <h2 data-testid="categories-h2" >Browse Our Categories</h2>
        <ButtonGroup variant="text" aria-label="text button group">
        {
            categories.map((category, index) => (
                <Button key={`categories-${index}`} 
                onClick={() => categoryHandler(category)}>{category.name}</Button>
            ))
        }
        </ButtonGroup>
        </>
    )
}

export default Categories;