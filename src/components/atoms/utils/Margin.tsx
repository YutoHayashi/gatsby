import React from "react";
import { app } from '../../../contexts/contexts';

interface Props {
    top: string;
    bottom: string;
    left: string;
    right: string;
}

const DEFAULT_PROPS: Props = {
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
};

export const Margin: React.FunctionComponent<Partial<Props>> = ( _props ) => {
    const props = { ...DEFAULT_PROPS, ..._props };
    const className = ( taxonomy: string ) => `${ taxonomy }-margin mt-${ props.top } mb-${ props.bottom } ml-${ props.left } mr-${ props.right }`;
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
