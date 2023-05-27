import { CellOptions } from "../types"
import style from './Cell.module.scss';
interface Props{
    type:CellOptions
}

const Cell = ({type}:Props) =>  <div className={`cell ${type}`}></div>


export default Cell