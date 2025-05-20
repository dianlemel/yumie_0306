import {
    createTheme,
    MantineProvider,
} from "@mantine/core";
import "@mantine/core/styles.css";
import "./globals.css";
import {
    ColorSchemeScript,
    mantineHtmlProps,
} from "@mantine/core";
import React, {ReactNode} from "react";

const theme = createTheme({
    breakpoints: {
        xs: '30em',//576
        sm: '48em',//768
        md: '64em',//992
        lg: '74em',//1200
        xl: '90em',//1408
    },
});

export default function RootLayout({children,}: Readonly<{ children: ReactNode; }>) {
    return (
        <html lang="en"  {...mantineHtmlProps}>
        <head>
            <ColorSchemeScript/>
        </head>
        <body>
        <MantineProvider theme={theme}>
            {children}
        </MantineProvider>
        </body>
        </html>
    );
}
