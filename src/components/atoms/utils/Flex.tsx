import React from "react";
import { app } from '../../../contexts/contexts';

interface Props {
    justify: string;
    align: string;
    wrap: string;
    direction: string;
}

const DEFAULT_PROPS: Props = {
    justify: 'between',
    align: 'center',
    wrap: 'wrap',
    direction: 'column',
};

export const Flex: React.FunctionComponent<Partial<Props>> = ( _props ) => {
    const props = { ...DEFAULT_PROPS, ..._props };
    const className = ( taxonomy: string ) => `${ taxonomy }-flex flex flex-justify-${ props.justify } flex-align-${ props.align } flex-wrap-${ props.wrap } flex-direction-${ props.direction } w-100 h-100`;
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
