import React from "react";
import { app } from '../../../contexts/contexts';

interface Props {
    color: string;
    text: string;
    shadow: string | false;
    radius: string;
}

const DEFAULT_PROPS: Props = {
    color: 'transparent',
    text: 'dark',
    shadow: false,
    radius: '0',
};

export const Container: React.FunctionComponent<Partial<Props>> = ( _props ) => {
    const props = { ...DEFAULT_PROPS, ..._props };
    const className = ( taxonomy: string ) => `${ taxonomy }-container ${ props.color } ${ props.text }--text ${ props.shadow ? `${ props.shadow }--boxShadow` : '' } radius-${ props.radius } w-100 h-100`;
    return (
        <app.Consumer>
            { ( { taxonomy } ) => (
                <div className={ className( taxonomy ) }>
                    { props.children }
                </div>
            ) }
        </app.Consumer>
    );
};
