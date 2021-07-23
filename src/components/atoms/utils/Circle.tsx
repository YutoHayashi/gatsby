import React from "react";
import { app } from '../../../contexts/contexts';

interface Props {}

const DEFAULT_PROPS: Props = {};

export const Circle: React.FunctionComponent<Partial<Props>> = ( _props ) => {
    const props = { ...DEFAULT_PROPS, ..._props };
    const className = ( taxonomy: string ) => `${ taxonomy }-circle`;
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
