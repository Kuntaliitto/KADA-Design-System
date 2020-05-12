import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select } from "@storybook/addon-knobs";
import BrandColors from '../components/BrandColors';

export default {
    component: BrandColors,
    title: 'Brändivärit',
    excludeStories: /.*Data$/,
    decorators: [withKnobs]
};

export const actionsData = {
    onSelect: action('onSelect')
};

const colors = [ 'Oletus', 'Asuminen', 'Kulttuuri', 'Koulutus', 'Terveys', 'Tapahtuma' ];
const sites = { Turku: 'turku', Pori: 'pori' };

export const Default = () =>
    <div className={ select('Sivusto', sites, 'turku', 'Ulkoasu') }>

        <BrandColors
            content={{
                hover: select('Hover-efekti', { '10% tummempi' : 'darker',  '20% vaaleampi': 'lighter' }, 'darker', 'Ulkoasu'),
                colors: colors
            }}
            {...actionsData}
        />

    </div>;
