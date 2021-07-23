import React from 'react';
import { Href } from '../atoms/atoms';
import { HeaderOutline, HeaderTitle } from '../molecules/molecules';
import { NavButton } from '../molecules/main/ui';

interface Props {}

const DEFAULT_PROPS: Props = {};

export const HeaderMold: React.FunctionComponent<Partial<Props>> = ( _props ) => {
    const props = { ...DEFAULT_PROPS, ..._props };
    return (
        <HeaderOutline>
            <NavButton />
            <HeaderTitle>
                <Href to='/'>Title</Href>
            </HeaderTitle>
        </HeaderOutline>
    )
};
