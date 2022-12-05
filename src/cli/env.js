const parseEnv = () => {
  const envVariables = process.env;

  const result = Object.entries(envVariables).reduce((acc, [key, value]) => {
    if (key.startsWith("RSS_")) {
      acc.push(`${key}=${value}`);
    }
    return acc;
  }, []);

  console.log(result.join("; "));
};

parseEnv();
