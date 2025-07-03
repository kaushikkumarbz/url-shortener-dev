import { Button, Container, TextInput } from '@mantine/core'
import React, { useState } from 'react'
import Service from '../../utils/http';
const  service = new Service();

export default function UrlInput(props) {
    console.log(props);
    const [input, SetInput] = useState({});



    async function getShorturl(){
        try{
            const data = await service.post("s", input);
            console.log(data);
            props.SetResponse(data);
        }catch(error){
            console.log(error);
        }
    }


    console.log(input);

    return (
        <Container size={"xs"}>
            <TextInput required onChange={(e) => {
                SetInput({ ...input, originalUrl: e.target.value })

            }} label="Input label" description="originalUrl" placeholder="Input placeholder" />
            <TextInput onChange={(e) => {
                SetInput({ ...input, title: e.target.value })

            }} label="Input label" description="title" placeholder="Input placeholder" />
            <TextInput onChange={(e) => {
                SetInput({ ...input, customUrl: e.target.value })

            }}

                label="Input label" description="customUrl" placeholder="Input placeholder" />
            <TextInput onChange={(e) => {
                SetInput({ ...input, expiresAt: e.target.value })

            }} type={"date"} label="Input label" description="expiresAt" placeholder="Input placeholder" />
            <Button disabled={(input?.originalUrl)?false:true} onClick={() => {

                getShorturl();
                

            }} variant="filled">Button</Button>
        </Container>
    )
}
