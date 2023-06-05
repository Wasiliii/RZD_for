import './style.css';
import { useState } from 'react';

export interface TableLineProps {
  name: string;
  description: string;
  speedLimits: {
    name: string;
    speedLimit: number;
  }[];
}

const TableLine = (props: { json: TableLineProps[]; changedState: (newValue: TableLineProps[]) => void }) => {
  const [trainSpeed, setTrainSpeed] = useState<string>('');

  const speed = (train: TableLineProps, name: string) => {
    return train.speedLimits.map((currentSpeedLimit) => {
      if (trainSpeed === name)
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
      return <></>;
    });
  };

  return (
    <>
      {props.json.map((item) => {
        return (
          <tr className="table_line">
            <td
              onClick={() => {
                setTrainSpeed(item.name);
              }}
            >
              {item.name}
            </td>
            <tr>
              <td>{speed(item, item.name)}</td>
            </tr>
          </tr>
        );
      })}
    </>
  );
};
export default TableLine;
