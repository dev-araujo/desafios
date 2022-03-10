export const nextPodcast = (values, id) => {
  if (id >= values.length - 1) {
    id = 0;
  } else {
    id++;
  }

  return values[id];
};
export const previousPodcast = (values, id) => {
  if (id <= 0) {
    id = values.length - 1;
  } else {
    id--;
  }

  return values[id];
};
