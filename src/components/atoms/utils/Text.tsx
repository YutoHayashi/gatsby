import React from 'react';
import { app } from '../../../contexts/contexts';

interface Props {
    color: string;
    weight: 'bold' | 'lighter' | 'medium';
    lineHeight: string;
    size: string;
    align: 'center' | 'start' | 'end';
}

const DEFAULT_PROPS: Props = {
    color: 'dark',
    weight: 'medium',
    lineHeight: '1',
    size: '1.0',
    align: 'center',
};

export const Text: React.FunctionComponent<Partial<Props>> = ( _props ) => {
    const props = { ...DEFAULT_PROPS, ..._props };
    const className = ( taxonomy: string ) => `${ taxonomy }-text flex flex-wrap-nowrap flex-direction-row flex-align-${ props.align } size-${ Number( props.size ) * 10 } ${ props.color }--text weight-${ props.weight } w-100`;
    return (
        <app.Consumer>
            { ( { taxonomy } ) => (
                <div className={ className( taxonomy ) } style={ { display: 'inline', textAlign: props.align } }>
                    { props.children }
                </div>
            ) }
        </app.Consumer>
    );
};
