import { Block, SHAPES } from '../types';
import style from './UpcomingBlocks.module.scss';

interface UpcomingBlocksType {
  upcomingBlocks: Block[];
}

const UpcomingBlocks = ({ upcomingBlocks }: UpcomingBlocksType) => {
  return (
    <div className={style.upcoming}>
       {upcomingBlocks.map((block, blockIndex) => {
        const shape = SHAPES[block].shape.filter((row:any) =>
          row.some((cell:any) => cell)
        );
        return (
          <div key={blockIndex} className={style.upcomingBlock}>
            {shape.map((row:any, rowIndex:any) => {
              return (
                <div key={rowIndex} className={style.row}>
                  {row.map((isSet:any, cellIndex:any) => {
                    const cellClass = isSet ? block : 'hidden';
                    return (
                      <div
                        key={`${blockIndex}-${rowIndex}-${cellIndex}`}
                        className={`cell ${cellClass}`}
                      ></div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  )
}

export default UpcomingBlocks