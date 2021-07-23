import React from 'react';
import { FooterOutline } from '../molecules/molecules';

interface Props {}

const DEFAULT_PROPS: Props = {};

export const FooterMold: React.FunctionComponent<Partial<Props>> = ( _props ) => {
    const props = { ...DEFAULT_PROPS, ..._props };
    return (
        <FooterOutline></FooterOutline>
    );
};
