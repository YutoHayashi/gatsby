import React from 'react';
import { app } from '../../../contexts/contexts';

interface Props {
    icon: string;
    color: string;
}

const DEFAULT_PROPS: Pick<Props, 'color'> = {
    color: 'dark',
};

export const Mdi: React.FunctionComponent<Partial<Props> & Pick<Props, 'icon'>> = ( _props ) => {
    const props = { ...DEFAULT_PROPS, ..._props };
    const className = ( taxonomy: string ) => `${ taxonomy }-mdi ${ props.color }--text`;
    return (
        <app.Consumer>
            { ( { taxonomy } ) => (
                <span className={ className( taxonomy ) }>
                    <i className={ `mdi mdi-${ props.icon }` } style={ { fontSize: '1.5em' } }></i>
                </span>
            ) }
        </app.Consumer>
    );
};
