import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { Fornecedor } from "./fornecedor";
import { Historico_Compras } from "./historico_compras";

@Table({
    tableName: 'Produto',
    timestamps: false
})

export class Produto extends Model{
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
    prod_id!: number;

    @Column({
        type: DataType.STRING(100),
        allowNull: false
    })
    prod_nome!: string;

    @Column({
        type: DataType.DECIMAL(8,2),
        allowNull: false
    })
    prod_preco!: number;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false
    })
    prod_status!: boolean

    @BelongsToMany(() => Fornecedor, () => Historico_Compras)
    fornecedores!: Fornecedor[]
}