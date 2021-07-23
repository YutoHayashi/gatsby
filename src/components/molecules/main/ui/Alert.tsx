import React, { ReactNode } from 'react';
import { app } from '../../../../contexts/contexts';
import { Padding, Text, Mdi, Margin, Flex } from '../../../atoms/atoms';

interface AlertType {
    info: 'info',
    warning: 'warning',
    danger: 'danger',
    success: 'success',
}

interface Icon {
    info: 'information',
    warning: 'alert-circle',
    danger: 'close-octagon',
    success: 'check-circle',
}

interface Props {
    type: AlertType[ keyof AlertType ];
    children: {
        body: ReactNode;
    }
}

const DEFAULT_PROPS: Pick<Props, 'children'> = {
    children: {
        body: <></>,
    },
};

export const Alert: React.FunctionComponent<Partial<Props> & Pick<Props, 'type'>> = ( _props ) => {
    const type: AlertType = {
        info: 'info',
        warning: 'warning',
        danger: 'danger',
        success: 'success',
    };
    const icon: Icon = {
        info: 'information',
        warning: 'alert-circle',
        danger: 'close-octagon',
        success: 'check-circle',
    };
    const props = { ...DEFAULT_PROPS, ..._props };
    const className = ( taxonomy: string ) => `${ taxonomy }-alert ${ type[ props.type ] } white--text flex radius-0`;
    const { body } = props.children;
    return (
        <app.Consumer>
            { ( { taxonomy } ) => (
                <div className={ className( taxonomy ) }>
                    <Text color='white' weight='bold' size='1.2'>
                        <Padding top="1" bottom="1" right="1" left="1">
                            <Flex direction="row" justify="start">
                                <Margin right="1">
                                    <Mdi icon={ icon[ props.type ] } color="white" />
                                </Margin>
                                { body }
                            </Flex>
                        </Padding>
                    </Text>
                </div>
            ) }
        </app.Consumer>
    );
};
