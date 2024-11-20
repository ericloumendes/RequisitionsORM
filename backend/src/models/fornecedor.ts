import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { Produto } from "./produto";
import { Historico_Compras } from "./historico_compras";

@Table({
    tableName: 'Fornecedor',
    timestamps: false
})

export class Fornecedor extends Model{
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
    forn_id!: number;

    @Column({
        type: DataType.STRING(100),
        allowNull: false
    })
    forn_nome!: string;

    @Column({
        type: DataType.STRING(100),
        allowNull: false
    })
    forn_nomeFantasia!: string;

    @Column({
        type: DataType.STRING(14),
        allowNull: false
    })
    forn_cnpj!: string;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false
    })
    forn_status!: boolean

    @BelongsToMany(() => Produto, () => Historico_Compras)
    produtos!: Produto[]
}