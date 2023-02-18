import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";
import { primaryFont } from "./typography"

const globalStyle = createGlobalStyle`
    ${normalize()}
    html {
        box-sizing: border-box
        font-size: 14px
    }
    *, *:before, *:after {
        "box-sizing": inherit
    }

    body {
        margin: 0
        font-family: ${primaryFont}
    }
`

export default globalStyle;