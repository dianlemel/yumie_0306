import React from "react";
import {Divider, List, Highlight, Stack, Text, Title} from "@mantine/core";
import {BsStar} from "react-icons/bs";

function Tab1() {
    return (
        <Stack align="stretch" justify="flex-start">
            <Title order={5}>退換貨規則</Title>
            <List
                withPadding
                size="sm"
                icon={<BsStar size={15}/>}>
                <List.Item>2.0募資紀念品需在20萬達標後才會開始製作。</List.Item>
                <List.Item>2.0募資之回饋紀念品於到貨次日起七天內需確認紀念品是否有瑕疵。</List.Item>
                <List.Item>包裹開箱務必「全程錄影」，遇到商品瑕疵破損時出示錄影畫面才能做退換貨。</List.Item>
                <List.Item>大量印刷之微小偏移及細小刷點、擦點不屬於瑕疵，完美主義者請勿下單。</List.Item>
                <List.Item>若商品因使用者不當拆卸或使用造成故障、磨損、髒污或破損等情況，恕不接受退貨。</List.Item>
                <List.Item>若包裹未取被退件，如：錯誤的姓名/地址、物流送達時無人收件等，經查詢非為箱箱出貨失誤的情形，須事先酌收運費方可再寄出。</List.Item>
            </List>
            <Highlight
                highlightStyles={{
                    backgroundColor: 'transparent',
                    fontWeight: 800,
                }}
                highlight={['必須回復原狀', '拒絕更換']}>
                ※請注意：退貨前，請確認您所退回的紀念品必須回復原狀（須回復至紀念品到貨時的原始狀態）並且保持紀念品包裝，切勿缺漏任何配件或損毀原廠外盒，不然將可能拒絕更換紀念品。
            </Highlight>
            <Divider my="md"/>
            <Title order={5}>客服聯絡方式</Title>
            <Text>
                如有任何聯絡需求，請寄信至團隊信箱（yumie10306@gmail.com），我們將盡快與您聯繫，謝謝。
            </Text>
            <Divider my="md"/>
            <Title order={5}>免責聲明</Title>
            <List
                size="sm"
                withPadding>
                <List.Item>本網站所提供之募資活動內容，皆由活動發起人自行提供，並負責其真實性與執行。</List.Item>
                <List.Item>支持者在贊助前請自行評估風險，並理解募資並非購買行為，無法保證回饋項目會如期完成與交付。</List.Item>
                <List.Item>若有任何問題，請直接聯繫活動發起人。</List.Item>
                <List.Item>本網站僅提供平台展示服務，對募資內容及執行不承擔任何法律責任。</List.Item>
            </List>
        </Stack>
    );
}


export default Tab1;
