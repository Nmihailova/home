import {render} from '@testing-library/react';

import {PreviewCard} from '../index';

const props = {
    title: 'Title',
    previewText: 'Description',
    picture: '/Users/nmikh/home/src/pictures/pink_cake.jpeg',
};

test('Проверяет отображение рецепта', () => {
    const {container} = render(<PreviewCard {...props} />);

    expect(container.querySelector('img')).toBeInTheDocument();
    expect(container.querySelector('div')).toBeInTheDocument();
    expect(container.querySelector('h1')).toBeInTheDocument();
});
