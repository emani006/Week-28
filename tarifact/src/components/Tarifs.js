import React, {useState} from 'react';

function Tarifs(props) {
    const note = 'Объем включенного трафика не ограничен';
    let classname = 'container';
    let colorActive = props.color;

    const [isActive, setActive] = useState(props.isActive);

    const handleChange = () => {
        setActive (!isActive);
    };

    if (isActive === true) {
        classname+='__active';
        colorActive ='orange';
    }

    return (
        <div className={classname} onClick={handleChange}>
            <div className='top' style={{backgroundColor: colorActive}}>{props.name}</div>
            <div className='middle' style={{backgroundColor: colorActive}}>
                <div className='rub'>руб. </div>
                <span className='price'>{props.price}</span><span className='monthly'> /мес.</span>
            </div>
            <div className='bottom'><span>до </span><span>{props.speed}</span><span> Мбит/сек</span></div>
            <div className='note'>{note}</div>
        </div>
        );
} 
    export default Tarifs;  