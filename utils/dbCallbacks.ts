export const dbConnectionCallback = (err: Error | null) => {
  if (err) console.log(err);
  console.log("Database connected successfully");
};

export const dbOperationCallback = (err: Error ) => {
  if (err) console.log(err);
  console.log("Database Operation completed successfully");
};
