import React from "react";
import { HeaderMold } from '../organisms/organisms';

interface Props {}

const DEFAULT_PROPS: Props = {};

export const Header: React.FunctionComponent<Partial<Props>> = ( _props ) => {
    const props = { ...DEFAULT_PROPS, ..._props };
    return (
        <HeaderMold />
    );
};
