import { render, screen } from '@testing-library/react';
import Header from './index';
import { Provider } from 'react-redux';
import store from '../../store';



describe('Header Test', () => {
    test('renders Header', () =>{
        render(
        <Provider store={store}>
            <Header />
        </Provider>
        )

        const header = screen.getByTestId('header');
        expect(header).toHaveTextContent('Storefront')
    })
})