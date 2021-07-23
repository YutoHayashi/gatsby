import * as React from "react"
import { Seo } from '../components/atoms/atoms';

interface Props {}

const NotFoundPage: React.FunctionComponent<Partial<Props>> = ( props ) => {
    return (
        <Seo title='404'>
            <h1>404: Not Found</h1>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </Seo>
    );
};

export default NotFoundPage;
