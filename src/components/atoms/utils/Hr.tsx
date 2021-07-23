import React from 'react';
import { app } from '../../../contexts/contexts';

interface Props {
    color: string;
}

const DEFAULT_PROPS: Props = {
    color: 'transparent',
};

export const Hr: React.FunctionComponent<Partial<Props>> = ( _props ) => {
    const props = { ...DEFAULT_PROPS, ..._props };
    const className = ( taxonomy: string ) => `${ taxonomy }-hr ${ props.color }--border-top`;
    return (
        <app.Consumer>
            { ( { taxonomy } ) => (
                <hr className={ className( taxonomy ) } />
            ) }
        </app.Consumer>
    );
};
