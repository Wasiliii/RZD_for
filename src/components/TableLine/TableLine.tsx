export interface TableLineProps {
  name: string;
  description: string;
  speedLimits: {
    name: string;
    speedLimit: number;
  }[];
}

const TableLine = (props: { json: TableLineProps[] }) => {
  const speed = (item: TableLineProps) => {
    item.speedLimits.forEach((item) => {
      return (
        <tr>
          <td>
            <input>{item.name}</input>
          </td>
          <td>
            <input>{item.speedLimit}</input>
          </td>
        </tr>
      );
    });
  };

  props.json.forEach((item) => {
    return (
      <tr>
        <td>{item.name} </td>)
        <tr>
          <td>
            <>{speed(item)}</>
          </td>
        </tr>
      </tr>
    );
  });

  return <></>;
};
export default TableLine;
