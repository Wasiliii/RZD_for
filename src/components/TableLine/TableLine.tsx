import './style.css';
export interface TableLineProps {
  name: string;
  description: string;
  speedLimits: {
    name: string;
    speedLimit: number;
  }[];
}

const TableLine = (props: { setTrainName: (item: string) => void; trainCollection: TableLineProps[] }) => {
  return (
    <>
      {props.trainCollection.map((item) => {
        return (
          <tr className="table_line">
            <td
              onClick={() => {
                props.setTrainName(item.name);
              }}
            >
              {item.name}
            </td>
          </tr>
        );
      })}
    </>
  );
};
export default TableLine;
