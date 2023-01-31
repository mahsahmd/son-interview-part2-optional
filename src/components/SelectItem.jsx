import React from 'react'
import { FiCheck } from 'react-icons/fi';

const SelectItem = ({ item, setValue, setDisplayItems, selectedValue, setSelectedValue }) => {
    const onItemClicked = () => {
        setDisplayItems(false)
        setValue(item?.title)
        setSelectedValue(item?.title)
    }
    return (
        <div className='select-item' onClick={onItemClicked}>
            {selectedValue === item.title && <FiCheck className='check-icon' />}
            <p className={`item-title ${selectedValue === item.title && '--selected'}`}> {item?.title}</p>

        </div>
    )
}

export default SelectItem