import TableLine, { TableLineProps } from '@/components/TableLine/TableLine';
import { useEffect, useState } from 'react';

const Table = () => {
  const [state, setState] = useState([
    {
      name: '',
      description: '',
      speedLimits: [
        {
          name: '',
          speedLimit: 0,
        },
      ],
    },
  ]);

  useEffect(() => {
    const arrTake = async () => {
      const response = await fetch(
        'https://gist.githubusercontent.com/GlennMiller1991/152583a1bf1e057e8db06f5949ae3dda/raw/f84adf51092706ae0e7c0abc7589ad49800d8112/trains.json',
      );
      if (response.status === 200) {
        const json = await response.json();
        json.forEach((item: TableLineProps, index: number) => {
          //    let a:{ speedLimits: { name: string; speedLimit: number }[]; name: string; description: string }[]= state

          setState(state.splice(index + 1, 0, item));
        });
      }
    };
    arrTake();
  });

  console.log(state);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Номер поезда</th>
            <th>Скорости поезда</th>
          </tr>
        </thead>
        <tbody>
          <TableLine json={state}></TableLine>
        </tbody>
      </table>
    </>
  );
};
export default Table;
