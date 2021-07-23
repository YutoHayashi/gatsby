import React from 'react';
import { app } from '../../../contexts/contexts';

interface Props {
    src: string;
    alt: string;
}

const DEFAULT_PROPS: Pick<Props, 'alt'> = {
    alt: '',
};

export const Image: React.FunctionComponent<Partial<Props> & Pick<Props, 'src'>> = ( _props ) => {
    const props = { ...DEFAULT_PROPS, ..._props };
    const className = ( taxonomy: string ) => `${ taxonomy }-image w-100 h-100`;
    return (
        <app.Consumer>
            { ( { taxonomy } ) => (
                <img className={ className( taxonomy ) } width='100%' height='100%' { ...props } style={ { verticalAlign: 'bottom', objectFit: 'cover' } }/>
            ) }
        </app.Consumer>
    );
};
