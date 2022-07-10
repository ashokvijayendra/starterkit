import React from 'react';
import styles from './typography.module.css';
import {
    mapStyleProps,
  } from '../../utils/styleUtil';

interface TypographyProps {
    tag?: string,
    variant: 'heading1' | 'heading2' | 'heading3' | 'heading4' | 'heading5' | 'heading6' | 'paragraph' | 'span',
    children: any,
    id: string,
    className: string,
    style: object
}

const variants: any = {
    'heading1': 'h1', 
    'heading2': 'h2',
    'heading3': 'h3',
    'heading4': 'h4',
    'heading5': 'h5',
    'heading6': 'h6'
}

export const Typography = (props: TypographyProps)  => {
    let { children, tag, variant, className, style, ...rest } = props;
    const styleProps = mapStyleProps(rest);
    const Tag = variants[variant] as keyof JSX.IntrinsicElements;
    return <Tag className={`${className} ${styles[variant]}`} style={{...styleProps,...style}}>{children}</Tag>;
}

Typography.defaultProps = {
    Tag: "div",
    variant: "paragraph",
    id: "",
    className: "",
    style: {}
}

export default Typography;