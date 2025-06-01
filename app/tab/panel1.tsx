import React from "react";
import {Stack, Image, Container} from "@mantine/core";

function Panel1() {
    return (
        <Stack align="Center" justify="flex-start">
            <Container size="sm">
                <Image radius="md" src="page3.png"/>
            </Container>
            <Container size="sm">
                <Image radius="md" src="page2.jpg"/>
            </Container>
        </Stack>
    );
}


export default Panel1;
