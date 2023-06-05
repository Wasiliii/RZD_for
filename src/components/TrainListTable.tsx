import { CloseIcon, EditIcon } from '@/src/assets';
import { Table, Td, Th } from '@/src/components/Styled';
import { TrainInfo } from '@/src/types/api';
import { FC } from 'react';
import { styled } from 'styled-components';

interface TrainListTableProps {
  trainCollection: TrainInfo[];
  editableTrainName: string;
  onSelectTrainToEdit?: (trainName: string) => void;
}

const TrainListTable: FC<TrainListTableProps> = ({ trainCollection, onSelectTrainToEdit, editableTrainName }) => {
  return (
    <Table>
      <thead>
        <tr>
          <Th>Название поезда</Th>
          <Th></Th>
        </tr>
      </thead>
      <tbody>
        {trainCollection.map((train) => {
          const isSelectedForEdit = editableTrainName === train.name;
          return (
            <tr key={train.name} style={{ background: isSelectedForEdit ? '#3b3e77' : undefined }}>
              <Td>{train.name}</Td>
              <Td>
                {isSelectedForEdit ? (
                  <IconButton
                    title="Отменить редактирование"
                    onClick={() => {
                      if (onSelectTrainToEdit) onSelectTrainToEdit('');
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                ) : (
                  <IconButton
                    title="Редактировать скорость"
                    onClick={() => {
                      if (onSelectTrainToEdit) onSelectTrainToEdit(train.name);
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                )}
              </Td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

const IconButton = styled.button`
  padding: 4px 6px;
  height: 38px;
  width: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default TrainListTable;
