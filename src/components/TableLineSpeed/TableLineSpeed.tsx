import { TableLineProps } from '@/components/TableLine/TableLine';

const TableLineSpeed = (props: {
  trainCollection: TableLineProps[];
  trainName: string;
  changedState: (newValue: TableLineProps[]) => void;
}) => {
  const train = props.trainCollection.find((train) => {
    return train.name === props.trainName;
  });

  console.log(train);
  return (
    <table className="table">
      <thead>
        <tr>
          <th>{props.trainName}</th>
        </tr>
      </thead>
      {train?.speedLimits.map((currentSpeedLimit: { name: string; speedLimit: number }) => {
        return (
          <tbody>
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
                      props.trainCollection.map((train) => {
                        return train.name != props.trainName
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
          </tbody>
        );
      })}
    </table>
  );
};
export default TableLineSpeed;
