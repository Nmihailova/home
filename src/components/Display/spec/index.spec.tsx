import {render} from '@testing-library/react';

import {Display} from '../index';

const props = {
    title: 'Title',
    text: 'Description',
};

test('Проверяет отображение рецепта', () => {
    const {container} = render(<Display currentRecipe={props} />);

    expect(container.querySelector('div')).toBeInTheDocument();
    expect(container.querySelector('h1')).toBeInTheDocument();
});
