const parseArgs = () => {
  const trimmedArguments = process.argv.slice(2);
  const comLineArguments = trimmedArguments.reduce((acc, arg, index, array) => {
    const trimArgName = (argument) => {
      return argument.slice(2);
    };

    if (index % 2 === 0) {
      acc.push(`${trimArgName(arg)} is ${array[index + 1]}`);
    }
    return acc;
  }, []);

  console.log(comLineArguments.join(", "));
};

parseArgs();
