import React from "react";
import {Stack, Image, AspectRatio} from "@mantine/core";

function Panel1() {
    return (
        <Stack align="stretch" justify="flex-start">
            <AspectRatio mr="xl" ml="xl" display='flex' ratio={16 / 9}>
                <Image radius="md" src="page2.jpg"/>
            </AspectRatio>
        </Stack>
    );
}


export default Panel1;
