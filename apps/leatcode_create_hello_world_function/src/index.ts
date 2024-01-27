export const createHelloWorld = () => {
  return (...args) => {
    if (args.length > 10) {
      throw new Error("引数の数が多すぎます。最大10個の引数まで許容されます。");
    }

    return "Hello World";
  };
};
