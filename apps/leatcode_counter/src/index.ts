const maxNumber = 1000;
const minNumber = -1000;
const maxExecutionLimit = 1000;

export const createCounter = (num: number) => {
  if (num < minNumber || num > maxNumber) {
    throw new Error();
  }

  let callCount = 0;
  return () => {
    const result = num + callCount;
    callCount++;
    if (callCount > maxExecutionLimit) {
      throw new Error();
    }

    return result;
  };
};
