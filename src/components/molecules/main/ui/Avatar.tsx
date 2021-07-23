import React from 'react';
import { app } from '../../../../contexts/contexts';
import { Flex, Text, Image } from '../../../atoms/atoms';

interface Props {
    color: string;
    radius: string;
    image: string | false;
    placeholder: string;
    text: string;
    border: string;
}

const DEFAULT_PROPS: Props = {
    color: 'primary',
    radius: '2',
    image: false,
    placeholder: '',
    text: 'white',
    border: 'transparent',
};

export const Avatar: React.FunctionComponent<Partial<Props>> = ( _props ) => {
    const props = { ...DEFAULT_PROPS, ..._props };
    const className = ( taxonomy: string ) => `${ taxonomy }-avatar ${ props.color } radius-harf w-${ props.radius } h-${ props.radius } ${ props.border }--border`;
    return (
        <app.Consumer>
            { ( { taxonomy } ) => (
                <div className={ className( taxonomy ) } style={ { display: 'inline-block', overflow: 'hidden' } }>
                    { props.image ? <Image src={ props.image } alt={ props.placeholder }/> : null }
                    <Text align='center' color={ props.text } size='1.4'>
                        { props.placeholder }
                    </Text>
                </div>
            ) }
        </app.Consumer>
    );
};
