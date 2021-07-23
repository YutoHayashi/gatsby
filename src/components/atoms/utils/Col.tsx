import React from "react";
import { app } from '../../../contexts/contexts';

interface Props {
    span: string;
}

const DEFAULT_PROPS: Props = {
    span: '12',
};

export const Col: React.FunctionComponent<Partial<Props>> = ( _props ) => {
    const props = { ...DEFAULT_PROPS, ..._props };
    const className = ( taxonomy: string ) => `${ taxonomy }-col col-${ props.span }`;
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
