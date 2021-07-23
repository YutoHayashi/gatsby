import React from "react";
import { app } from '../../../contexts/contexts';
import { Container, Padding, Flex } from '../../atoms/atoms';

interface Props {}

const DEFAULT_PROPS: Props = {}

export const FooterOutline: React.FunctionComponent<Partial<Props>> = ( _props ) => {
    const props = { ...DEFAULT_PROPS, ..._props };
    const className = ( taxonomy: string ) => `${ taxonomy }-footer`;
    return (
        <app.Consumer>
            { ( { taxonomy } ) => (
                <footer className={ className( taxonomy ) }>
                    <Container color='secondary'>
                        <Flex direction='row'>
                            { props.children }
                        </Flex>
                    </Container>
                </footer>
            ) }
        </app.Consumer>
    );
};
