import React from 'react';
import styles from './typography.module.css';
import {
    mapStyleProps,
  } from '../../../utils/styleUtil';

interface TypographyProps {
    tag?: string,
    variant: 'heading1' | 'heading2' | 'heading3' | 'heading4' | 'heading5' | 'heading6' | 'paragraph' | 'span',
    children: any,
    id: string,
    className: string,
    style: object,
    pL?: number | string; // paddingLeft
    pT?: number | string; // paddingTop
    pR?: number | string; // paddingRight
    pB?: number | string; // paddingBottom
    mL?: number | string; // marginLeft
    mT?: number | string; // marginTop
    mR?: number | string; // marginRight
    mB?: number | string; // marginBottom
    mS?: number | string; // marginStart
    mE?: number | string; // marginEnd
    bBW?: number | string; //borderBottomWidth
    bEW?: number | string; //borderEndWidth
    bLW?: number | string; //borderLeftWidth
    bRW?: number | string; //borderRightWidth
    bSW?: number | string; //borderStartWidth
    bTW?: number | string; //borderTopWidth
    bW?: number | string; // borderWidth
    bR?: number | string; //borderRadius
    m?: number | string; // margin
    p?: number | string; // padding
    w?: number | string; // width
    h?: number | string; // height
    flex?: number;
    alignItems?: string;
    justifyContent?: string;
    alignContent?: string;
    padding?: number | string;
    bc?: any;
    backgroundColor?: any;
    width?: number | string;
    height?: number | string;
    minWidth?: number | string;
    maxWidth?: number | string;
    minHeight?: number | string;
    maxHeight?: number | string;
    position?: 'absolute' | 'relative' | 'fixed' | 'static';
    top?: number | string;
    left?: number | string;
    right?: number | string;
    bottom?: number | string;
    zIndex?: number | string;
    flexDirection?: string;
    direction?: string;
}

const variants: any = {
    'heading1': 'h1', 
    'heading2': 'h2',
    'heading3': 'h3',
    'heading4': 'h4',
    'heading5': 'h5',
    'heading6': 'h6',
    'paragraph': 'p'
}

export const Typography = (props: TypographyProps)  => {
    let { children, tag, variant, className, style, ...rest } = props;
    const styleProps = mapStyleProps(rest);
    const Tag = variants[variant] as keyof JSX.IntrinsicElements;
    return <Tag className={`${className} ${styles[variant]}`} style={{...styleProps,...style}}>{children}</Tag>;
}

Typography.defaultProps = {
    tag: "div",
    variant: "paragraph",
    id: "",
    className: "",
    style: {}
}

export default Typography;