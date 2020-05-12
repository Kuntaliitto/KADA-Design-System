import React from 'react';
import moment from 'moment';
import classNames from 'classnames/bind';
import style from '../styles/FeaturedArticle.module.scss';
import NewsArticle from '../interfaces/newsarticle';

interface FeaturedArticleProps {
    article: NewsArticle;
    onSelect: Function;
}

const FeaturedArticle = (props:FeaturedArticleProps) => {
    const { article, onSelect } = props;

    return (
        <div className={ classNames(style.featuredArticle, style[`size-${article.size}`], style[`theme-${article.theme}`]) }>
            <div className={ classNames(style.textWrapper, style[`theme-${article.theme}`]) }>
                <p className= { style.date }>{ moment(article.created).format('DD.MM.YYYY') }</p>
                <h1 className={ style.title } onClick={() => onSelect(article.id)}>{ article.title }</h1>
                <p className={ style.ingress }>{ article.ingress }</p>
            </div>
            <div className={ style.imageWrapper }>
                <img src={ article.imageUrl } alt="kuva" />
                { article.imageTitle &&
                    <div className={ classNames(style.caption, style[`theme-${article.theme}`]) }>{ article.imageTitle }</div>
                }
            </div>
        </div>
    )
}

export default FeaturedArticle;