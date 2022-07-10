export type ObjectType = Record<
    string,
    string | undefined | number
>;

const styleProps: ObjectType = {
    pL: 'paddingLeft',
    pT: 'paddingTop',
    pR: 'paddingRight',
    pB: 'paddingBottom',
    mL: 'marginLeft',
    mT: 'marginTop',
    mR: 'marginRight',
    mB: 'marginBottom',
    mS: 'marginStart',
    mE: 'marginEnd',
    m: 'margin',
    p: 'padding',
    h: 'height',
    w: 'width',
    bBW: 'borderBottomWidth',
    bEW: 'borderEndWidth',
    bLW: 'borderLeftWidth',
    bRW: 'borderRightWidth',
    bSW: 'borderStartWidth',
    bc: 'backgroundColor',
    bTW: 'borderTopWidth',
    bW: 'borderWidth',
    bR: 'borderRadius',
    padding: 'padding',
    backgorundColor: 'backgroundColor',
    direction: 'flexDirection'
};

export function mapStyleProps(
    props: any
) {
    const propKeys = Object.keys(props);
    const style = {} as ObjectType;
    propKeys.forEach(key => {
        const styleKey = styleProps[key];
        if (styleKey) {
            style[styleKey] = props[key];
        } else {
            style[key] = props[key];
        }
    });
    return style;
}