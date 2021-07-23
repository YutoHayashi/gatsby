import React from 'react';
import { Margin, Text } from '../../atoms/atoms';

interface Props {}

const DEFAULT_PROPS: Props = {};

export const HeaderTitle: React.FunctionComponent<Partial<Props>> = ( _props ) => {
    const props = { ...DEFAULT_PROPS, ..._props };
    return (
        <Margin left='2' right='auto'>
            <Text size='2.0' color='white'>
                <div role='heading' aria-level={ 1 }>
                    <h1>
                        { props.children }
                    </h1>
                </div>
            </Text>
        </Margin>
    );
};
