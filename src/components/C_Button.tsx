import React from 'react';
import { Button } from '@apixjs/ui'

const C_Button: React.FC<Record<string, any>> = () => {

    return (
        <Button
        // onClick={(_e) => console.log(_e, "Button")}
        >
            Click Here
        </Button>
    )
}

export { C_Button };