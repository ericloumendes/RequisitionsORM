import React from "react";
import './style.css'

interface TableProps{
    data: any[],
    dataFormat: string[]
}

const Table: React.FC<TableProps> = ({data, dataFormat}) => {
    return(
        <table>
            <tr>
                {dataFormat.map((header, index) => (
                    <th key={index}>{header}</th>
                ))}
            </tr>
            {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
                {dataFormat.map((key, colIndex) => (
                    <td key={colIndex}>
                        {typeof row[key] === "boolean" ? (row[key] ? "Ativo" : "Inativo") : row[key]?.toString()}
                    </td>
                ))}
            </tr>
            ))}

        </table>
    )
}

export default Table