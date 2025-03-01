import { createSystem, defaultConfig } from "@chakra-ui/react";

const system = createSystem(defaultConfig,{
    globalCss: {
        body: {
            bg: {_light: "gray.100",_dark: "gray.800"},
            color: {_light: "gray.900", _dark: "gray.100"},
        }
    }
})

export default system;