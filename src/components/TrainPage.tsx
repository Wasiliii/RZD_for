import SpeedListTable from '@/src/components/SpeedListTable';
import TrainListTable from '@/src/components/TrainListTable';
import { TrainInfo } from '@/src/types/api';
import { FC, useEffect, useState } from 'react';
import { styled } from 'styled-components';

const TrainPage: FC = () => {
  const [trainCollection, setTrainCollection] = useState<TrainInfo[]>();
  const [editableTrainName, setEditableTrainName] = useState('');

  useEffect(() => {
    (async function () {
      const response = await fetch(
        'https://gist.githubusercontent.com/GlennMiller1991/152583a1bf1e057e8db06f5949ae3dda/raw/f84adf51092706ae0e7c0abc7589ad49800d8112/trains.json',
      );

      if (response.status === 200) {
        const trainCollection = await response.json();
        setTrainCollection(trainCollection);
      } else {
        console.error('Ошибка при загрузке данных о поездах');
      }
    })();
  }, []);

  const handleSave = () => {
    if (!trainCollection) return console.error('Unexpected');

    const arr = trainCollection.map((train) => {
      const sortedSpeedLimits = train.speedLimits.sort(({ speedLimit: firstSpeed }, { speedLimit: secondSpeed }) => {
        return firstSpeed - secondSpeed;
      });

      return {
        ...train,
        speedLimits: sortedSpeedLimits,
      };
    });
    console.info('ok', arr);
    alert('Данные сохранены');
  };

  const editableTrain = editableTrainName && trainCollection?.find((train) => train.name === editableTrainName);

  if (!trainCollection) return <>Загрузка данных...</>;

  return (
    <Root>
      <TrainListTable
        trainCollection={trainCollection}
        onSelectTrainToEdit={setEditableTrainName}
        editableTrainName={editableTrainName}
      />
      {editableTrain && (
        <SpeedListTable
          editableTrain={editableTrain}
          onChange={(changedTrain) =>
            setTrainCollection(
              trainCollection.map((train) => (train.name === changedTrain.name ? changedTrain : train)),
            )
          }
        />
      )}
      <Button onClick={handleSave}>Сохранить</Button>
    </Root>
  );
};

const Root = styled.div`
  display: grid;
  align-items: flex-start;
  grid-template-columns: repeat(2, 300px);
  gap: 64px;
`;

const Button = styled.button`
  position: fixed;
  top: 32px;
  right: 32px;
  height: 5%;
  margin: 16px;
  padding: 16px;
  color: #747bff;
`;

export default TrainPage;
