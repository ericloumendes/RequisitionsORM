import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Fornecedor } from "./fornecedor";
import { Produto } from "./produto";

@Table({
    tableName: 'Historico_Compras',
    timestamps: true
})

export class Historico_Compras extends Model{
    @ForeignKey(() => Fornecedor)
    @Column({
        type: DataType.INTEGER,
    })
    forn_id!: number;

    @ForeignKey(() => Produto)
    @Column({
        type: DataType.INTEGER,
    })
    prod_id!: number;

    @Column({
        type: DataType.INTEGER,
    })
    prod_quantidade!: number;

    @BelongsTo(() => Fornecedor)
    fornecedores!: Fornecedor;

    @BelongsTo(() => Produto)
    produtos!: Produto;
}