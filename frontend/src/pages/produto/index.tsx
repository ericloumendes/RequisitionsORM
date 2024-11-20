import React, { useEffect, useState } from "react";
import './index.css'
import Btn from "../../components/Btn";
import { useNavigate } from "react-router-dom";
import Table from "../../components/Table";

export default function ProdutosPage(){
    const navigate = useNavigate();

    const rotaProduto = (valor: string): void =>{
        navigate(valor)
    }

    const dataType = [
        "prod_id",
        "prod_nome",
        "prod_preco",
        "prod_status"
    ]

    type dataItem = {
        prod_id: number,
        prod_nome: string,
        prod_preco: number,
        prod_status: boolean
    }

    const [data,setData] = useState<dataItem[]>([])

    useEffect(() => {
        const fetchData = async () => {
        const response = await fetch("http://localhost:5000/produto/");
        const jsonData: dataItem[] = await response.json();
        setData(jsonData);
        console.log(jsonData)
        }
    
        fetchData();
    }, []);

    return(
        <div>
            <div className="ProdTitle">
                <h1>Produtos</h1>   
            </div>

            <div className="ProdTableDiv">
                <div className="ProdTableItem">
                <Table data={data} dataFormat={dataType}></Table>
                </div>
            </div>

            <center>
                <span>
                <Btn label={"Cadastrar"} onClick={() => rotaProduto('/cadastro-produto')} />
                <Btn label={"Editar"} onClick={() => rotaProduto('/editar-produto')} />
                </span>
            </center>

        </div>
    )
}