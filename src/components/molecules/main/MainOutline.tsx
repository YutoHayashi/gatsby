import React from 'react';
import { app } from '../../../contexts/contexts';
import { Container } from '../../atoms/atoms';

interface Props {}

const DEFAULT_PROPS: Props = {};

export const MainOutline: React.FunctionComponent<Partial<Props>> = ( _props ) => {
    const props = { ...DEFAULT_PROPS, ..._props };
    const className = ( taxonomy: string ) => `${ taxonomy }-main`;
    return (
        <app.Consumer>
            { ( { taxonomy } ) => (
                <main className={ className( taxonomy ) }>
                    <Container color='white'>
                        { props.children }
                    </Container>
                </main>
            ) }
        </app.Consumer>
    );
};
