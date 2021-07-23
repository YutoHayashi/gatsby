import React from 'react';
import { app } from '../../../../contexts/contexts';
import { Hr } from '../../../atoms/atoms';

interface Props {
    color?: string;
    vertical?: 'row' | 'column';
}

const DEFAULT_PROPS: Props = {
    color: 'shadow',
    vertical: 'row',
};

export const Divider: React.FunctionComponent<Partial<Props>> = ( _props ) => {
    const props = { ...DEFAULT_PROPS, ..._props };
    const className = ( taxonomy: string ) => `${ taxonomy }-divider`;
    const style = (  ): React.CSSProperties | undefined => {
        if ( props.vertical === 'column' ) {
            return {
                transform: 'rotate( 90deg )',
            };
        }
    };
    return (
        <app.Consumer>
            { ( { taxonomy } ) => (
                <div className={ className( taxonomy ) } style={ style(  ) }>
                    <Hr color={ props.color } />
                </div>
            ) }
        </app.Consumer>
    );
};
