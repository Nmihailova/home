import {useState} from 'react';

import {RECIPES} from '../../mocks/data';

import {PreviewCard} from '../Preview';

import './style.css';

export const DesertsList = () => {
    const [isDesertListVisible, onOpenDesertList] = useState(false);

    const onOpen = () => {
        onOpenDesertList(!isDesertListVisible);
    };

    return (
        <>
            <button className="open-btn-list" onClick={onOpen}>
                Список десертов
            </button>

            {isDesertListVisible && (
                <div className="desertsList">
                    {RECIPES.map(desert => (
                        <PreviewCard {...desert} />
                    ))}
                </div>
            )}
        </>
    );
};
