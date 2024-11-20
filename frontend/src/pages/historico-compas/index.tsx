import React, { useEffect, useState } from "react";
import './index.css'
import Btn from "../../components/Btn";
import { useNavigate } from "react-router-dom";
import Table from "../../components/Table";

export default function HistoricoPage(){
    const navigate = useNavigate();

    const rotaProduto = (valor: string): void =>{
        navigate(valor)
    }

    const dataType = [
        "prod_nome",
        "forn_nomeFantasia",
        "prod_preco",
        "prod_quantidade",
        "createdAt"
    ]

    type dataItem = {
        prod_nome: string,
        forn_nomeFantasia: string,
        prod_preco: number,
        prod_quantidade: number,
        createdAt: string
    }

    const [data,setData] = useState<dataItem[]>([])

    useEffect(() => {
        const fetchData = async () => {
        const response = await fetch("http://localhost:5000/historico-compras/");
        const jsonData: dataItem[] = await response.json();

            // Transformando os dados
            const mappedData: dataItem[] = jsonData.map((item: any) => ({
                prod_nome: item.produtos.prod_nome,
                forn_nomeFantasia: item.fornecedores.forn_nomeFantasia,
                prod_preco: parseFloat(item.produtos.prod_preco),
                prod_quantidade: parseInt(item.prod_quantidade),
                createdAt: new Date(item.createdAt).toLocaleDateString('pt-BR'),
            }));    

        setData(mappedData);
        console.log(mappedData)
        }
    
        fetchData();
    }, []);

    return(
        <div>
            <div className="ProdTitle">
                <h1>Histórico de compras</h1>   
            </div>

            <div className="ProdTableDiv">
                <div className="ProdTableItem">
                <Table data={data} dataFormat={dataType}></Table>
                </div>
            </div>

            <center>
                <span>
                <Btn label={"Cadastrar"} onClick={() => rotaProduto('/hist-compras-cadastro')} />
                </span>
            </center>

        </div>
    )
}