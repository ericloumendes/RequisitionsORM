import { Produto } from "../models/produto";
import { Request, Response } from 'express';

export const produtoController = {
    save: async (req: Request, res: Response) => {
        try {
            const produto = await Produto.create(req.body);
            return res.status(201).json(produto);
          } catch (error) {
            return res.status(400).json({ error: 'Error saving Produto', details: error.message });
          }
    },

    show: async (req: Request, res: Response) => {
        try {
          const produto = await Produto.findAll({});
          return res.status(200).json(produto);
        } catch (error) {
          return res.status(400).json({ error: 'Error fetching Cargo', details: error.message });
        }
    },

    // PUT /usuario/:id
  update: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ error: 'Invalid ID parameter' });
      }
      const [updated] = await Produto.update(req.body, {
        where: { prod_id: id }
      });
      if (updated) {
        const updatedProduto = await Produto.findOne({ where: { prod_id: id } });
        return res.status(200).json(updatedProduto);
      }
      return res.status(404).json({ error: 'Produto not found' });
    } catch (error) {
      return res.status(400).json({ error: 'Error updating Produto', details: error.message });
    }
  },

  // PUT /status/:id 
  changeStatus: async (req, res) => {
    const { id } = req.params;
    try {
      // Procurar o usuário pelo ID
      const produto = await Produto.findByPk(id);
  
      if (!produto) {
        return res.status(404).json({ error: 'Produto não encontrado' });
      }
  
      // Alternar o status atual (se for true, muda para false e vice-versa)
      const novoStatus = !produto.prod_status;
  
      // Atualizar o status no banco de dados
      await Produto.update(
        { prod_status: novoStatus },
        { where: { prod_id: id } }
      );
  
      // Retornar o novo status atualizado
      return res.status(200).json({ message: "Status alterado com sucesso", produto });
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao alterar o status do usuário' });
    }
  },
} 