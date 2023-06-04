import './style.css';

export interface TableLineProps {
  name: string;
  description: string;
  speedLimits: {
    name: string;
    speedLimit: number;
  }[];
}

const TableLine = (props: { json: TableLineProps[]; changedState: (newValue: TableLineProps[]) => void }) => {
  const speed = (train: TableLineProps, name: string) => {
    return train.speedLimits.map((currentSpeedLimit) => {
      return (
        <tr>
          <td>{currentSpeedLimit.name}</td>
          <td>
            <input
              className="input"
              type="number"
              min="0"
              step="1"
              value={currentSpeedLimit.speedLimit}
              onChange={(event) => {
                props.changedState(
                  props.json.map((train) => {
                    return train.name != name
                      ? train
                      : {
                          ...train,
                          speedLimits: train.speedLimits.map((speedLimit) => {
                            return speedLimit.name === currentSpeedLimit.name
                              ? { name: speedLimit.name, speedLimit: +event.target.value }
                              : speedLimit;
                          }),
                        };
                  }),
                );
              }}
            ></input>
          </td>
        </tr>
      );
    });
  };

  return (
    <>
      {props.json.map((item) => {
        return (
          <tr className="table_line">
            <td>{item.name} </td>
            <tr>
              <td>
                <>{speed(item, item.name)}</>
              </td>
            </tr>
          </tr>
        );
      })}
    </>
  );
};
export default TableLine;
