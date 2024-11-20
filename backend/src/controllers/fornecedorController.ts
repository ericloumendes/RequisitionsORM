import { Request, Response } from 'express';
import { Fornecedor } from '../models/fornecedor';

export const fornecedorController = {
    save: async (req: Request, res: Response) => {
        try {
            const fornecedor = await Fornecedor.create(req.body);
            return res.status(201).json(fornecedor);
          } catch (error) {
            return res.status(400).json({ error: 'Error saving Fornecedor', details: error.message });
          }
    },

    show: async (req: Request, res: Response) => {
        try {
          const fornecedor = await Fornecedor.findAll({});
          return res.status(200).json(fornecedor);
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
      const [updated] = await Fornecedor.update(req.body, {
        where: { forn_id: id }
      });
      if (updated) {
        const updatedFornecedor = await Fornecedor.findOne({ where: { forn_id: id } });
        return res.status(200).json(updatedFornecedor);
      }
      return res.status(404).json({ error: 'Fornecedor not found' });
    } catch (error) {
      return res.status(400).json({ error: 'Error updating Fornecedor', details: error.message });
    }
  },

  // PUT /status/:id 
  changeStatus: async (req, res) => {
    const { id } = req.params;
    try {
      // Procurar o usuário pelo ID
      const fornecedor = await Fornecedor.findByPk(id);
  
      if (!fornecedor) {
        return res.status(404).json({ error: 'Fornecedor não encontrado' });
      }
  
      // Alternar o status atual (se for true, muda para false e vice-versa)
      const novoStatus = !fornecedor.forn_status;
  
      // Atualizar o status no banco de dados
      await Fornecedor.update(
        { forn_status: novoStatus },
        { where: { forn_id: id } }
      );
  
      // Retornar o novo status atualizado
      return res.status(200).json({ message: "Status alterado com sucesso", fornecedor });
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao alterar o status do Fornecedor' });
    }
  },
} 