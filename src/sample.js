function sample(mode = 0) {
  switch (mode) {
    case 0:
      return "sample0";
    case 1:
      return "sample1";
    case 2:
      return "sample2";
    default:
      throw new Error("Invalid mode");
  }
}

module.exports = sample;
