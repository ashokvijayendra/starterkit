import React, { ReactNode } from 'react';
import styles from './container.module.css'
import {
    mapStyleProps, ObjectType
  } from '../../../utils/styleUtil';

interface ContainerInterfaceProps {
  children?: ReactNode;
  childrenWidth?: any;
  style?: any;
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

export type ContainerProps = ContainerInterfaceProps;

const RenderChildren = (children: any, childrenWidth: any) => {
    if(!childrenWidth) return children;
    return React.Children.map(children, (child, i)=>{
      let el = React.cloneElement(child,{
        style: childrenWidth === 'equal' ? { flexGrow: 1, flexBasis: 0, minWidth: 0 } : { width: childrenWidth[i]}
      })
      return el
    })
}


const Container: React.FC<ContainerProps> = ({
  children = '',
  childrenWidth = null,
  style = {},
  ...otherProps
}: ContainerProps) => {
  const propsKeys = otherProps as ObjectType;
  const styleProps: any = mapStyleProps(propsKeys);
  return (
    <div className={styles.container} style={{...style, ...styleProps}}>{RenderChildren(children,childrenWidth)}</div>
  );
};


export default Container;