import React from 'react';
import FeaturedArticle from './FeaturedArticle';
import style from '../styles/FeaturedList.module.scss';

const articleData = {
    id: '123456',
    size: 1,
    title: 'Uutisartikkeli',
    created: new Date(),
    changed: new Date(),
    ingress: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a rhoncus velit. Ut malesuada viverra justo, a semper mi. Sed ac massa orci. Integer sagittis dui sed risus hendrerit, ac iaculis nunc viverra. Sed scelerisque magna id erat vulputate bibendum. Nunc volutpat, nulla nec ultricies condimentum, ante risus pretium ex, sit amet semper augue leo sit amet felis. Vivamus magna elit, hendrerit quis imperdiet at, dignissim quis leo. Praesent sollicitudin eget libero vitae hendrerit.',
    imageUrl: 'https://picsum.photos/400',
    imageTitle: '',
    theme: 'Oletus'
};

const FeaturedList = (props:any) => {
    const selected = () => { };

    return (
        <div className={ style.content }>
            <FeaturedArticle article={{ ...articleData, imageUrl: 'https://picsum.photos/400?random=100', theme: 'Asuminen' }} onSelect={ selected } />
            <FeaturedArticle article={{ ...articleData, imageUrl: 'https://picsum.photos/400?random=200', theme: 'Kulttuuri' }} onSelect={ selected } />
            <FeaturedArticle article={{ ...articleData, imageUrl: 'https://picsum.photos/400?random=300', theme: 'Tapahtuma' }} onSelect={ selected } />
            <FeaturedArticle article={{ ...articleData, imageUrl: 'https://picsum.photos/400?random=400', theme: 'Terveys' }} onSelect={ selected } />
        </div>
    )
}

export default FeaturedList;