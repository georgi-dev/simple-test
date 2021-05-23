import React from 'react'
import Input from '../BaseComponents/Input'
import Button from '../BaseComponents/Button'
const AddItemContainer = (props) => {
    return (
        <div>
            <Input
                type="email"
                inputValue={props.inputValue}
                change={props.inputOnChange}
            />
            <Button click={props.ButtonOnClick}

            />
        </div>
    )
}

export default AddItemContainer;