import { useTSelector } from '@hooks';
import { StageIndicator } from '../StageIndicator';
import style from './StageIndicatorList.style.module.css';
import helper from './StageIndicatorList.helper';

function StageIndicatorList() {
  const stages = useTSelector((state) => state.quiz.stages);
  const currentStageIndex = useTSelector((state) => state.quiz.currentStageIndex);

  return (
    <ul className={style.container}>
      {stages?.map((stage, stageIndex) => (
        <StageIndicator
          key={stage.prize}
          prize={stage.prize}
          variant={helper.getStageIndicatorVariant(
            stageIndex,
            currentStageIndex,
          )}
        />
      ))}
    </ul>
  );
}

export default StageIndicatorList;
