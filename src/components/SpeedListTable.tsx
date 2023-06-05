import { Table, Td, Th } from '@/src/components/Styled';
import { TrainInfo } from '@/src/types/api';
import { FC } from 'react';
import { styled } from 'styled-components';

interface SpeedListTableProps {
  editableTrain: TrainInfo;
  onChange?: (editableTrain: TrainInfo) => void;
}

const SpeedListTable: FC<SpeedListTableProps> = ({ editableTrain, onChange }) => {
  return (
    <Table>
      <thead>
        <tr>
          <Th colSpan={2}>Скорость</Th>
        </tr>
      </thead>
      <tbody>
        {editableTrain.speedLimits.map((speedLimitInfo) => {
          return (
            <tr key={speedLimitInfo.name}>
              <Td>{speedLimitInfo.name}</Td>
              <Td>
                <Input
                  type="number"
                  min="0"
                  step="1"
                  value={speedLimitInfo.speedLimit}
                  onChange={(event) => {
                    if (!onChange) return;

                    onChange({
                      ...editableTrain,
                      speedLimits: editableTrain.speedLimits.map((initSpeedLimit) =>
                        speedLimitInfo.name === initSpeedLimit.name
                          ? { ...initSpeedLimit, speedLimit: +event.target.value }
                          : initSpeedLimit,
                      ),
                    });
                  }}
                ></Input>
              </Td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

const Input = styled.input`
  display: block;
  height: calc(2.25rem + 2px);
  padding: 0.175rem 0.55rem;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 200;
  color: #bdbdbd;
  background-clip: padding-box;
  border: 1px solid #242424;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

export default SpeedListTable;
