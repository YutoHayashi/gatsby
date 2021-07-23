import React from "react";
import { app } from '../../../contexts/contexts';
import { Container, Padding, Flex } from '../../atoms/atoms';

interface Props {}

const DEFAULT_PROPS: Props = {};

export const HeaderOutline: React.FunctionComponent<Partial<Props>> = ( _props ) => {
    const props = { ...DEFAULT_PROPS, ..._props };
    const className = ( taxonomy: string ) => `${ taxonomy }-header`;
    return (
        <app.Consumer>
            { ( { taxonomy } ) => (
                <header className={ className( taxonomy ) }>
                    <Container color='secondary'>
                        <Padding top='1' bottom='1' left='2' right='2'>
                            <Flex direction='row'>
                                { props.children }
                            </Flex>
                        </Padding>
                    </Container>
                </header>
            ) }
        </app.Consumer>
    );
};
