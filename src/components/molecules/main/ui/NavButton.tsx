import React from 'react';
import { app } from '../../../../contexts/app';

interface Props {}

const DEFAULT_PROPS: Props = {};

export const NavButton: React.FunctionComponent<Partial<Props>> = ( _props ) => {
    const props = { ...DEFAULT_PROPS, ..._props };
    const className = ( taxonomy: string ) => `${ taxonomy }-navButton navButton`;
    return (
        <app.Consumer>
            { ( { taxonomy, toggleNavigation } ) => (
                <div className={ className( taxonomy ) } onClick={ toggleNavigation }>
                    <span className='navButton-bar'></span>
                    <span className='navButton-bar'></span>
                    <span className='navButton-bar'></span>
                </div>
            ) }
        </app.Consumer>
    );
};
