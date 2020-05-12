import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select  } from "@storybook/addon-knobs";
import FeaturedList from '../components/FeaturedList';

export default {
    component: FeaturedList,
    title: 'Uutislista',
    excludeStories: /.*Data$/,
    decorators: [withKnobs]
};

const sites = { Turku: 'turku', Pori: 'pori' }

export const Default = () =>
    <div className={ select('Sivusto', sites, 'turku', 'Ulkoasu') }>
        <FeaturedList />
    </div>;
