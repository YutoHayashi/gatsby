import React, { ReactNode } from 'react';
import { app } from '../../../../contexts/contexts';
import { Container, Margin, Padding, Hr, Col } from '../../../atoms/atoms';

interface Props {
    color: string;
    children: {
        heading: ReactNode;
        body: ReactNode;
    };
}

const DEFAULT_PROPS: Props = {
    color: 'white',
    children: {
        heading: null,
        body: null,
    },
};

export const Card: React.FunctionComponent<Partial<Props>> = ( _props ) => {
    const props = { ...DEFAULT_PROPS, ..._props };
    const className = ( taxonomy: string ) => `${ taxonomy }-card`;
    const { heading, body } = props.children;
    const cardHeading = (  ): ReactNode | null => {
        if ( heading ) {
            return (
                <Padding top="2" bottom="2" right="2" left="2">
                    { heading }
                </Padding>
            );
        } else return null;
    };
    const cardBody = (  ): ReactNode | null => {
        if ( body ) {
            return (
                <Padding top="2" bottom="2" right="2" left="2">
                    { body }
                </Padding>
            );
        } else return null;
    };
    return (
        <Margin top='1' bottom='1'>
            <Col span='12'>
                <app.Consumer>
                    { ( { taxonomy } ) => (
                        <div className={ className( taxonomy ) }>
                            <Container color={ props.color } shadow='shadow' radius='4'>
                                { cardHeading(  ) }
                                <Hr color='shadow' />
                                { cardBody(  ) }
                            </Container>
                        </div>
                    ) }
                </app.Consumer>
            </Col>
        </Margin>
    );
};
