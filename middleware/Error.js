export const errorMiddelware = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error!";
    return res.status(err.statusCode).json({
        success: false,
        error: err.message
    })
}