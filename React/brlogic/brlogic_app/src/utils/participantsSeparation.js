export const participantsSeparation = (value) => {
  let separationElement;

  if (value.length > 1) {
    separationElement = ", ";
  }
  if (value.length === 2) {
    separationElement = " & ";
  }
  if (value.length === 3) {
    value.splice(2, 0, " & ");
  }

  if (value.length > 5) {
    value.splice(value[value.length - 2], 0, " & ");
  }

  return [value.join(separationElement)];
};
