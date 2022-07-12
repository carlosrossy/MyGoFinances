import React from 'react';

import {
    Container,
    Header,
    UserContainer,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
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
                </UserContainer>


            </Header>
        </Container>
    )
}