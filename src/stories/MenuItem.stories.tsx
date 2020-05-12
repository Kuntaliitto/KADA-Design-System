import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select } from "@storybook/addon-knobs";
import MenuItem from '../components/MenuItem';

export default {
    component: MenuItem,
    title: 'Päävalikko',
    excludeStories: /.*Data$/,
    decorators: [withKnobs]
};

const menuItemProps = {
    label: 'Kulttuuri ja liikunta',
    subMenu: [ { label: 'Kulttuuri', thirdLevel: [ 'Edut ja rannekkeet', 'Kulttuurikuntoilureitit', 'Kulttuurin tekijöille', 'Monikulttuurisuus', 'Saavutettava kulttuuri' ] },
               { label: 'Kirjasto', thirdLevel: [ 'Kirjasto' ]  },
               { label: 'Museo', thirdLevel: [ 'Kaupungin museot','Kokoelmat','Palvelut' ]  },
               { label: 'Näyttelyt ja julkinen taide', thirdLevel: [ 'Katutaide','Näyttelyt','Ulkoveistokset' ]  },
               { label: 'Teatteri ja musiikki', thirdLevel: [ 'Filharmoninen orkesteri','Kaupunginteatteri','Musiikki','Teatteri' ]  },
               { label: 'Liikunta', thirdLevel: [ 'Harrastamaan','Liikuntapaikat','Liikuntapalveluiden hinnasto','Rannekkeet','Seuroille','Liikkeelle netissä','Turku Future Sports - kaikkia liikuttava Turku' ]  },
               { label: 'Ulkoilualueet', thirdLevel: [ 'Kalastus ja veneily','Leirialueet','Luonnonsuojelualueet','Polut, reitit ja ladut','Puistot','Ulkoilusaaret' ] }
            ],
    quickLinks: [ { label: 'HARRASTUSHAKU' },{ label: 'VASKI-VERKKOKIRJASTO' },{ label: 'LIIKUNTARANNEKKEEN LATAUS' },{ label: 'LIIKUNTAVUORON VARAUS' } ],
    theme: 'Oletus'
};

export const actionsData = {
    onSelect: action('onSelect')
};

const turkuThemes = { Oletus: 'Oletus', Asuminen: 'Asuminen', Kulttuuri: 'Kulttuuri', Koulutus: 'Koulutus', Terveys: 'Terveys', Tapahtuma: 'Tapahtuma' }

export const Default = () =>
    <MenuItem
        content={{
            ...menuItemProps,
            theme: select('Teema', turkuThemes, 'Kulttuuri', 'Ulkoasu')
        }}
        {...actionsData}
    />;
