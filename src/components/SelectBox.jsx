import React, { useEffect, useRef, useState } from 'react'
import useClickOutside from '../utils/useClickOutside';
import useGetData from '../utils/useGetData'
import SelectItem from './SelectItem';
import { MdKeyboardArrowDown } from 'react-icons/md'
import "./styles.scss";
const SelectBox = () => {
    const { data, loading } = useGetData();
    const [filteredData, setFilteredData] = useState();
    const [value, setvalue] = useState("");
    const [displayItems, setDisplayItems] = useState(false);
    const boxRef = useRef();
    const isClickedOutside = useClickOutside(boxRef);
    const [selectedValue, setSelectedValue] = useState("");

    useEffect(() => {
        setDisplayItems(false)
        if (filteredData?.length === 0 && data?.length > 0) {
            setvalue(selectedValue)
        }
    }, [isClickedOutside])

    useEffect(() => {
        setFilteredData(data);
        if (data && data?.length > 0 && !loading) {
            setvalue(data?.[0]?.title);
            setSelectedValue(data?.[0]?.title);
        }
    }, [loading])

    const onInputChange = (e) => {
        const value = e.target.value;
        setDisplayItems(true)
        setvalue(value)
        const filteredData = data.filter((item) => item.title.toLowerCase().includes(value.toLowerCase()));
        setFilteredData(filteredData);
    }
    return (
        <div className='select-wrapper' ref={boxRef}>
            <div className='input-wrapper'>
                <input className='select-input' value={value} onChange={(e) => onInputChange(e)} />
                <MdKeyboardArrowDown style={{ cursor: 'pointer' }} onClick={() => setDisplayItems(state => !state)} />
            </div>
            <div className={`items-wrapper ${displayItems && '--show'}`}>
                {filteredData?.length > 0 ?
                    (filteredData?.map((item) => {
                        return <SelectItem setSelectedValue={setSelectedValue} selectedValue={selectedValue} setDisplayItems={setDisplayItems} key={item.id} item={item} setValue={setvalue} />
                    })) :
                    <p className='not-found'>Nothing Found</p>}
            </div>

        </div>
    )
}

export default SelectBox