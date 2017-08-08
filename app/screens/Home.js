import React from 'react';
import { Text, View, StatusBar }  from 'react-native';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo'

export default () => (
    <Container>
        <StatusBar translucent={false} barStyle="light-content"/>
        <Logo />
    </Container>
)

