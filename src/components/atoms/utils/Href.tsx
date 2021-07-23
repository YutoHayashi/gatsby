import React from 'react';
import { Link } from 'gatsby';
import { app } from '../../../contexts/contexts';

interface Props {
    to: string;
    activeClass: string;
}

const DEFAULT_PROPS: Pick<Props, 'activeClass'> = {
    activeClass: '',
};

export const Href: React.FunctionComponent<Partial<Props> & Pick<Props, 'to'>> = ( _props ) => {
    const props = { ...DEFAULT_PROPS, ..._props };
    const className = ( taxonomy: string ) => `${ taxonomy }-href mt-0 mb-0 mr-0 ml-0`;
    return (
        <app.Consumer>
            { ( { taxonomy } ) => (
                <Link className={ className( taxonomy ) } { ...props } style={ { verticalAlign: 'top', display: 'inline-block' } }>
                    { props.children }
                </Link>
            ) }
        </app.Consumer>
    );
};
