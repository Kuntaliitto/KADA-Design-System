import React from 'react';
import classNames from 'classnames/bind';
import style from '../styles/BrandColors.module.scss';

interface BrandColorType {
    label: string;
    color: string;
}

const OneColor = (props:any) => {
    const { color, hover } = props;
    const overlay = hover === 'darker' ? style.overlay1 : style.overlay2;

    return (
        <li className={ classNames(style.colorBlock, style[`theme-${color}`]) }>
            <div className={ style.label } >{ color }</div>
            <div className={ overlay } />
        </li>
    )
}

interface BrandColorProps {
    content: { colors: string[], hover: string };
    onSelect: Function;
}

const BrandColors = (props:BrandColorProps) => {
    const { content, onSelect } = props;

    return (
        <div className={ style.brandColors }>
            <h3>Teemavärit:</h3>
            <ul>
                { content.colors.map((color:string, i:number) => <OneColor key={ `block-${i}` } color={ color } hover={ content.hover } /> )}
            </ul>
        </div>
    )
}

export default BrandColors;