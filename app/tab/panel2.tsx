import {Group, List, Text, Accordion, Stack} from '@mantine/core';
import {BsStar} from "react-icons/bs";
import React from "react";

const charactersList = [
    {
        id: 'q1',
        label: '常見問題Q1',
        description: '若收到的募資品項有問題或瑕疵，我該如何處理？',
        content: (
            <Stack align="stretch" justify="flex-start">
                <Text
                    size="sm">為保障您的權益，包裹開箱務必「全程錄影」，並聯繫團隊信箱：yumie10306@gmail.com，提供錄影畫面才能做退換貨。</Text>
                <List
                    withPadding
                    size="sm"
                    icon={<BsStar size={15}/>}>
                    <List.Item>大量印刷之微小偏移及細小刷點、擦點不屬於瑕疵，完美主義者請勿下單。</List.Item>
                    <List.Item>若商品因使用者不當拆卸或使用造成故障、磨損、髒污或破損等情況，恕不接受退貨。</List.Item>
                    <List.Item>若包裹未取被退件，如：錯誤的姓名/地址、物流送達時無人收件等，經查詢非為箱箱出貨失誤的情形，須事先酌收運費方可再寄出。</List.Item>
                </List>
                <Text size="sm">※請注意：2.0募資之回饋紀念品於到貨次日起七天內需確認紀念品是否有瑕疵。</Text>
            </Stack>
        ),
    },

    {
        id: 'q2',
        label: '常見問題Q2',
        description: '如果修改訂單或收件資訊，我該怎麼辦?',
        content: (
            <Stack align="stretch" justify="flex-start">
                <Text size="sm">如果修改訂單或收件資訊，我該怎麼辦?</Text>
                <Text size="sm">寫信件至團隊信箱：yumie10306@gmail.com，提供匯款證明核對後，小幫手會幫忙修改寄件資料</Text>
            </Stack>
        ),
    },

    {
        id: 'q3',
        label: '常見問題Q3',
        description: '【注意】紀念周邊製作條件',
        content: (
            <Stack align="stretch" justify="flex-start">
                <Text
                    size="sm">周邊開始製作條件為募資達標20萬後，會開始製作紀念週邊，外套為訂製款會有小幫手聯絡買家詢問尺寸等詳細資訊，周邊製作及準備至少需要3個月時間。</Text>
            </Stack>
        ),
    },
];

interface AccordionLabelProps {
    label: string;
    description: string;
}

function AccordionLabel({label, description}: AccordionLabelProps) {
    return (
        <Group wrap="nowrap">
            <div>
                <Text>{label}</Text>
                <Text size="sm" c="dimmed" fw={400}>
                    {description}
                </Text>
            </div>
        </Group>
    );
}

function Tab1() {
    const items = charactersList.map((item) => (
        <Accordion.Item value={item.id} key={item.label}>
            <Accordion.Control>
                <AccordionLabel {...item} />
            </Accordion.Control>
            <Accordion.Panel>
                {item.content}
            </Accordion.Panel>
        </Accordion.Item>
    ));

    return (
        <Accordion bg='white' chevronPosition="right" variant="contained">
            {items}
        </Accordion>
    );
}


export default Tab1;
