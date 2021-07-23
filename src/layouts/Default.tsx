import React from 'react';
import { Header, Footer } from '../components/templates/templates';

interface Props {}

const DEFAULT_PROPS: Props = {};

export const Default: React.FunctionComponent = ( _props ) => {
    const props = { ...DEFAULT_PROPS, ..._props };
    return (
        <React.Fragment>
            <Header />
            { props.children }
            <Footer />
        </React.Fragment>
    );
};
