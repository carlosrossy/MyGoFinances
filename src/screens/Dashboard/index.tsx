import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';

import {
    Container,
    Header,
    UserContainer,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    Icon,
    HighlightCards
} from './styles'


export function Dashboard() {
    return (
        <Container>
            <Header>
                <UserContainer>
                    <UserInfo>
                        <Photo
                            source={{ uri: 'https://avatars.githubusercontent.com/u/82986679?v=4' }}
                        />
                        <User>
                            <UserGreeting>Olá, </UserGreeting>
                            <UserName>Carlos</UserName>
                        </User>
                    </UserInfo>
                    <Icon name="power" />
                </UserContainer>


            </Header>

            <HighlightCards
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 24 }}
            >
                <HighlightCard />
                <HighlightCard />
                <HighlightCard />
            </HighlightCards>
        </Container>
    )
}