import React from "react";
import {Stack, Image, Container, Text, Title, Paper, Divider, UnstyledButton, Flex, Group} from "@mantine/core";
import {PiRabbitLight} from "react-icons/pi";


function Panel1() {

    return (
        <Stack align="stretch" justify="flex-start">
            <Divider my="md"/>
            <Paper shadow="xl" p="xl" radius="xl">
                <Stack style={{textAlign: 'center'}} align="Center" justify="flex-start" gap="lg">
                    <Title size="xl" order={3}>
                        雨咩うさぎ是一位來自台灣的虛擬主播（Vtuber），搭乘太空船從遙遠的銀河深處，誤闖進這顆美麗的藍色星球。
                    </Title>
                    <Text size="md">自從來到地球，她始終以可愛俏皮的樣貌與真誠的心，陪伴著每一位觀眾。</Text>
                    <Text size="md">她的初衷很簡單，也很溫柔——希望能帶給世界快樂無憂的時光。</Text>
                    <Text size="md">在雨咩的直播間裡，觀眾們可以享受各式各樣的節目內容，包括：</Text>
                    <Text size="md">輕鬆溫馨的雜談時光</Text>
                    <Text size="md">感性動人的歌唱表演</Text>
                    <Text size="md">熱血有趣的遊戲實況</Text>
                    <Text size="md">精心企劃的綜藝挑戰</Text>
                    <Text size="md">
                        無論是哪一種類型的直播，雨咩うさぎ始終持續努力、不斷進步，致力於創造更多感動與歡樂的瞬間。
                    </Text>
                    <Text size="md">「你們臉上的笑容，永遠是雨咩前進不懈的動力。」</Text>
                </Stack>
            </Paper>
            <Divider my="md"/>
            <Flex
                justify="center"
                align="center"
                direction="row">
                <UnstyledButton>
                    <Group>
                        <PiRabbitLight size={20}/>
                        <Title size="xl">頻道連結</Title>
                        <PiRabbitLight size={20}/>
                    </Group>
                </UnstyledButton>
            </Flex>
            <Divider my="md"/>
            <Container size="sm">
                <Image radius="md" src="page3.png"/>
            </Container>
            <Divider my="md"/>
            <Container size="sm">
                <Image radius="md" src="page2.jpg"/>
            </Container>
            <Divider my="md"/>
        </Stack>
    );
}


export default Panel1;
