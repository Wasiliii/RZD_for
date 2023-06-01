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
    return item.speedLimits.map((item) => {
      return (
        <tr>
          <td>
            <input value={item.name}></input>
          </td>
          <td>
            <input value={item.speedLimit}></input>
          </td>
        </tr>
      );
    });
  };

  return (
    <>
      {props.json.map((item) => {
        return (
          <tr>
            <td>{item.name} </td>
            <tr>
              <td>
                <>{speed(item)}</>
              </td>
            </tr>
          </tr>
        );
      })}
    </>
  );
};
export default TableLine;
