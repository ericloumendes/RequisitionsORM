import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import ProdutosPage from "../pages/produto";
import CadastroProduto from "../pages/produto/cadastro-produto";
import EditarProduto from "../pages/produto/editar-produto";
import FornecedorPage from "../pages/fornecedor";
import CadastroFornecedor from "../pages/fornecedor/cadastro-fornecedor";
import EditarFornecedor from "../pages/fornecedor/editar-fornecedor";
import HistoricoPage from "../pages/historico-compas";
import CadastroCompra from "../pages/historico-compas/cadastro-compra";


export default function MainRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ProdutosPage />} />
                <Route path="/cadastro-produto" element={<CadastroProduto />} />
                <Route path="/editar-produto" element={<EditarProduto />} />

                <Route path="/fornecedor" element={<FornecedorPage />} />
                <Route path="/cadastro-fornecedor" element={<CadastroFornecedor />} />
                <Route path="/editar-fornecedor" element={<EditarFornecedor />} />

                <Route path="/hist-compras" element={<HistoricoPage />} />
                <Route path="/hist-compras-cadastro" element={<CadastroCompra />} />
            </Routes>
        </BrowserRouter>
    )
}