const helper = {
  getStageIndicatorVariant(
    stageIndex: number,
    currentStageIndex: number,
  ) {
    if (currentStageIndex < stageIndex) {
      return null;
    }

    return currentStageIndex === stageIndex ? 'active' : 'disabled';
  },
};

export default helper;
