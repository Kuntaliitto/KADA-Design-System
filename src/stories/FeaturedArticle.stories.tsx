import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select } from "@storybook/addon-knobs";
import FeaturedArticle from '../components/FeaturedArticle';

export default {
    component: FeaturedArticle,
    title: 'Uutisnosto',
    excludeStories: /.*Data$/,
    decorators: [withKnobs]
};

export const articleData = {
    id: '123456',
    size: 1,
    title: 'Uutisartikkeli',
    created: new Date(),
    changed: new Date(),
    ingress: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a rhoncus velit. Ut malesuada viverra justo, a semper mi. Sed ac massa orci. Integer sagittis dui sed risus hendrerit, ac iaculis nunc viverra. Sed scelerisque magna id erat vulputate bibendum. Nunc volutpat, nulla nec ultricies condimentum, ante risus pretium ex, sit amet semper augue leo sit amet felis.',
    imageUrl: 'https://picsum.photos/400',
    theme: 'Oletus'
};

export const actionsData = {
    onSelect: action('onSelect')
};

const sites = { Turku: 'turku', Pori: 'pori' }
const turkuThemes = { Oletus: 'Oletus', Asuminen: 'Asuminen', Kulttuuri: 'Kulttuuri', Koulutus: 'Koulutus', Terveys: 'Terveys', Tapahtuma: 'Tapahtuma' }

export const Default = () =>
    <div className={ select('Sivusto', sites, 'turku', 'Ulkoasu') }>
        <FeaturedArticle
            article={{
                ...articleData,
                theme: select('Teema', turkuThemes, 'Oletus', 'Ulkoasu'),
                title: text('Otsikko', 'Uutisartikkeli', 'Sisältö'),
                imageTitle: text('Kuvateksti', '', 'Sisältö')
            }}
            {...actionsData}
        />
    </div>;
