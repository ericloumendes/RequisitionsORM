import { Fornecedor } from "../models/fornecedor";
import { Historico_Compras } from "../models/historico_compras";
import { Request, Response } from 'express';
import { Produto } from "../models/produto";

export const historicoController = {
    save: async (req: Request, res: Response) => {
        try {
            const produto = await Historico_Compras.create(req.body);
            return res.status(201).json(produto);
          } catch (error) {
            return res.status(400).json({ error: 'Error saving Historico_Compras', details: error.message });
          }
    },

    show: async (req: Request, res: Response) => {
        try {
          const produto = await Historico_Compras.findAll({include: [Fornecedor, Produto], order: [['createdAt', 'DESC']]});
          return res.status(200).json(produto);
        } catch (error) {
          return res.status(400).json({ error: 'Error fetching Historico_Compras', details: error.message });
        }
    },
} 