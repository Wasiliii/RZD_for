import TableLine, { TableLineProps } from '@/components/TableLine/TableLine';
import { useEffect, useState } from 'react';
import './style.css';

const Table = () => {
  const [state, setState] = useState<TableLineProps[]>();

  useEffect(() => {
    async function takeArr() {
      const response = await fetch(
        'https://gist.githubusercontent.com/GlennMiller1991/152583a1bf1e057e8db06f5949ae3dda/raw/f84adf51092706ae0e7c0abc7589ad49800d8112/trains.json',
      );
      if (response.status === 200) {
        const json = await response.json();
        setState(json);
      }
    }
    takeArr();
  }, []);
  if (!state) return <>Загрузка данных</>;

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Номер поезда</th>
            <th>Скорости поезда</th>
          </tr>
        </thead>
        <tbody>
          <TableLine json={state} changedState={setState}></TableLine>
        </tbody>
      </table>

      <button
        className="button"
        onClick={() => {
          const arr = state?.map((train) => {
            return {
              ...train,
              speedLimits: train.speedLimits.sort((a, b) => {
                return a.speedLimit - b.speedLimit;
              }),
            };
          });
          console.info(arr);
          console.info('ok');
        }}
      >
        Сохранить
      </button>
    </>
  );
};
export default Table;
