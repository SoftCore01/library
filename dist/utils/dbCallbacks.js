export const dbConnectionCallback = (err) => {
    if (err)
        console.log(err);
    console.log("Database connected successfully");
};
export const dbOperationCallback = (err) => {
    if (err)
        console.log(err);
    console.log("Database Operation completed successfully");
};
