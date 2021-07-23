import React from "react";
import { Default } from '../layouts/Default';
import { MainOutline } from "../components/molecules/main/MainOutline";
import { Card, Alert, Avatar, Divider } from '../components/molecules/main/ui';
import { Text, Mdi, Href, Container, Seo } from '../components/atoms/atoms';

export const test: React.FunctionComponent = (  ) => {
    return (
        <Default>
            <Seo title='test' />
            <MainOutline>
                <Alert type="info">{{
                    body: <>アラート</>,
                }}</Alert>
                <Card>{{
                    heading: <><Mdi icon="twitter"/>カード</>,
                    body: (
                        <React.Fragment>
                            <Container>
                                <Text size="1.2" inline>
                                    カードコンテンツ
                                </Text>
                                <Href to="/"><Avatar placeholder="YH" color="primary" radius="3" image="https://cdn.pixabay.com/photo/2021/01/15/17/01/green-5919790_960_720.jpg" /></Href>
                            </Container>
                            <Divider />
                        </React.Fragment>
                    ),
                }}</Card>
            </MainOutline>
        </Default>
    );
};

export default test;
