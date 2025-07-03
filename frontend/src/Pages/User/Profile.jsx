import React, { useEffect, useState } from 'react'
import Service from '../../utils/http';
import { Avatar, Center, Container, Stack, Text } from '@mantine/core';
const service = new Service();

export default function Profile() {


    const [User, setUser] = useState({});

    async function getUserDeatils() {
        try {
            let response = await service.get("user/me");
            console.log("response received", response);
            setUser(response);
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        getUserDeatils();
    }, [])


    return (
        <Container size="sm" >
                <Stack m={"lg"} align='center' spacing="lg" mr={"xl"}>
                    <Avatar size={120} src={User?.avatar} />
                    <Text> {User?.name}</Text>
                    <Text> {User?.email}</Text>
                    <Text>   {User?._id}</Text>
                    <Text> {User?.createdAt}</Text>
                </Stack>
        </Container>
    )
}
