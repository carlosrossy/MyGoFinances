import React from 'react';

import {
    Container,
    Header,
    Title,
    Icon,
    Footer,
    Amount,
    LastTransaction,
} from './styles';

interface Props {
    type: 'up' | 'down' | 'total';
    title: string;
    amount: string;
    lastTrasactions: string;
}

const icon = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle',
    total: 'dollar-sign'
}

export function HighlightCard({
    type,
    title,
    amount,
    lastTrasactions
}: Props) {
    return (
        <Container type={type}>

            <Header>
                <Title type={type} >{title}</Title>
                <Icon name={icon[type]} type={type} />
            </Header>

            <Footer>
                <Amount type={type} >{amount}</Amount>
                <LastTransaction type={type} >{lastTrasactions}</LastTransaction>
            </Footer>

        </Container>
    )
}