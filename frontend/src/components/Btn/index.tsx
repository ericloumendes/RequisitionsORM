import React from "react";
import './index.css'

interface BtnProps{
    onClick?: () => void;
    icon?: React.ReactNode;
    label: string;
    className?: string;
    typeOf?: any;
}

const Btn: React.FC<BtnProps> = ({onClick, icon, typeOf, label, className= ''}) => {
    return(
        <button className={'Btn ' + className} type={typeOf} onClick={onClick}>
            <span className='icon'>{icon}</span>
            <span className='label'>{label}</span> 
        </button>
    );
}   

export default Btn;