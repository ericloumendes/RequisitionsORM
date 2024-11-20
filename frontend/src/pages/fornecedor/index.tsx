import React, { useEffect, useState } from "react";
import './index.css'
import Btn from "../../components/Btn";
import { useNavigate } from "react-router-dom";
import Table from "../../components/Table";

export default function FornecedorPage(){
    const navigate = useNavigate();

    const rotaProduto = (valor: string): void =>{
        navigate(valor)
    }

    const dataType = [
        "forn_id",
        "forn_nome",
        "forn_nomeFantasia",
        "forn_cnpj",
        "forn_status"
    ]

    type dataItem = {
        forn_id: number,
        forn_nome: string,
        forn_nomeFantasia: string,
        fron_cnpj: string,
        forn_status: boolean
    }

    const [data,setData] = useState<dataItem[]>([])

    useEffect(() => {
        const fetchData = async () => {
        const response = await fetch("http://localhost:5000/fornecedor/");
        const jsonData: dataItem[] = await response.json();
        setData(jsonData);
        console.log(jsonData)
        }
    
        fetchData();
    }, []);

    return(
        <div>
            <div className="ProdTitle">
                <h1>Fornecedores</h1>   
            </div>

            <div className="ProdTableDiv">
                <div className="ProdTableItem">
                <Table data={data} dataFormat={dataType}></Table>
                </div>
            </div>

            <center>
                <span>
                <Btn label={"Cadastrar"} onClick={() => rotaProduto('/cadastro-fornecedor')} />
                <Btn label={"Editar"} onClick={() => rotaProduto('/editar-fornecedor')} />
                </span>
            </center>

        </div>
    )
}