const analizer = (array) => {
  const average = array.reduce((total, num) => total + num, 0) / array.length;
  const min = Math.min(...array);
  const max = Math.max(...array);
  const { length } = array;
  return {
    average, min, max, length,
  };
};


export default analizer;
