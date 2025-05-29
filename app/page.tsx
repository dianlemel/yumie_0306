'use client';

import classes from "./page.module.css";
import {BsTwitterX, BsTwitch, BsInstagram, BsYoutube, BsFacebook} from "react-icons/bs";
import {
    Container,
    Title,
    Text,
    Progress,
    Group,
    SimpleGrid,
    AspectRatio,
    Stack, Tabs, Button, Flex, ActionIcon, Image
} from '@mantine/core';
import React from "react";
import Panel1 from "@/app/tab/panel1";
import Panel2 from "@/app/tab/panel2";
import Panel3 from "@/app/tab/panel3";

function App() {

    const onClick = () => {
        window.open('https://p.ecpay.com.tw/FC73A75')
    };

    return (
        <Container size="lg" py="xl" h='100vh'>
            <Stack gap="ms">
                <Flex align="center" justify="flex-end" gap={10}>
                    <ActionIcon component="a" href="https://x.com/Yumie03060"
                                gradient={{from: 'indigo', to: 'indigo', deg: 90}}>
                        <BsTwitterX/>
                    </ActionIcon>
                    <ActionIcon component="a" href="https://www.twitch.tv/yumie0306"
                                gradient={{from: 'indigo', to: 'indigo', deg: 90}}>
                        <BsTwitch/>
                    </ActionIcon>
                    <ActionIcon component="a" href="https://www.instagram.com/yumie_0306"
                                gradient={{from: 'indigo', to: 'indigo', deg: 90}}>
                        <BsInstagram/>
                    </ActionIcon>
                    <ActionIcon component="a" href="https://www.youtube.com/@yumie0306"
                                gradient={{from: 'indigo', to: 'indigo', deg: 90}}>
                        <BsYoutube/>
                    </ActionIcon>
                    <ActionIcon component="a" href="https://www.facebook.com/profile.php?id=61561110333672"
                                gradient={{from: 'indigo', to: 'indigo', deg: 90}}>
                        <BsFacebook/>
                    </ActionIcon>
                </Flex>
                <SimpleGrid cols={{base: 1, sm: 2}}>
                    <AspectRatio display='flex' ratio={16 / 9}>
                        <Image radius="md" src="page1.webp"/>
                    </AspectRatio>
                    <Stack>
                        <Title order={1} size="h2">【初配信預告】地球上的人類們! 槍拿好! 你準備好了嗎? 雨咩うさぎ-
                            即將降臨地球!</Title>
                        <div>
                            <Text size="lg">TEST</Text>
                            <Text size="md" c="dimmed">
                                TEST
                            </Text>
                        </div>
                        <div>
                            <Text>已募資金額：$0 / $200,000</Text>
                            <Progress value={0}/>
                            <Group mt="xs">
                                <Text size="sm">參與人數：0人</Text>
                                <Text size="sm">剩餘時間：0天</Text>
                            </Group>
                        </div>
                    </Stack>
                </SimpleGrid>
                <Tabs variant="1" defaultValue="1">
                    <Group justify="space-between"
                           bg='white'
                           style={{
                               border: '1px solid #EDECF2',
                               borderRadius: '10px',
                               padding: '0.5rem',
                           }}>
                        <Tabs.List className={classes.list}>
                            <Tabs.Tab value="1" className={classes.tab}>
                                介紹
                            </Tabs.Tab>
                            <Tabs.Tab value="2" className={classes.tab}>
                                常見問題
                            </Tabs.Tab>
                            <Tabs.Tab value="3" className={classes.tab}>
                                須知
                            </Tabs.Tab>
                        </Tabs.List>
                        <Button onClick={onClick} visibleFrom="sm" variant="filled">贊助</Button>
                    </Group>

                    <Tabs.Panel value="1"><Panel1/></Tabs.Panel>
                    <Tabs.Panel value="2"><Panel2/></Tabs.Panel>
                    <Tabs.Panel value="3"><Panel3/></Tabs.Panel>
                </Tabs>
                <Container hiddenFrom="sm" h={50}/>
            </Stack>
            <Container bg='white'
                       hiddenFrom="sm"
                       p={10}
                       style={{
                           position: "fixed",
                           bottom: "0px",
                           right: "0px",
                           left: "0px",
                           borderTop: "1px solid #EDECF2",
                       }}>
                <Button fullWidth onClick={onClick} variant="filled">贊助</Button>
            </Container>
        </Container>
    );
}

export default App;
