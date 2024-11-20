import { AiFillProduct } from "react-icons/ai";
import { GrUserManager } from "react-icons/gr";
import { FaClock } from "react-icons/fa";

import React from "react";
import './index.css'

interface NavbarProps {
    onHoverChange: (hovered: boolean) => void;
  }
  
  const Navbar: React.FC<NavbarProps> = ({ onHoverChange }) => {
    return (
      <div
        className="NavMain"
        onMouseEnter={() => onHoverChange(true)}
        onMouseLeave={() => onHoverChange(false)}
      >

        {/* Conteúdo da Navbar */}
        <a href="/">
        <div className="NavItem">
            <AiFillProduct style={{fontSize: "36px"}} /> 
            <p>Produtos</p>
        </div>
        </a>
        <a href="/fornecedor">
        <div className="NavItem">
            <GrUserManager style={{fontSize: "36px"}} />
            <p>Fornec.</p>
        </div>
        </a>
        <a href="/hist-compras">
        <div className="NavItem">
            <FaClock style={{fontSize: "36px"}} />
            <p>Hist.</p>
            <p>compras</p>
        </div>
        </a>
      </div>
    );
  };
  
  export default Navbar;
