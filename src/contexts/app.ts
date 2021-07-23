import React from "react";

export interface AppContext {
    taxonomy: string;
    theme: string;
    navigation: boolean;
    toggleNavigation: (  ) => void;
}

export const app = React.createContext<AppContext>( {
    taxonomy: 'app',
    theme: 'light',
    navigation: false,
    toggleNavigation: (  ) => null,
} );
