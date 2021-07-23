import React from 'react';
import { FooterMold } from '../organisms/organisms';

interface Props {}

const DEFAULT_PROPS: Props = {};

export const Footer: React.FunctionComponent<Partial<Props>> = ( _props ) => {
    const props = { ...DEFAULT_PROPS, ..._props };
    return (
        <FooterMold />
    );
};
