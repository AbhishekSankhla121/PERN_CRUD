import ErrorHandler from "../assets/customErrorHaandler.js"
import { catchAsyncError } from "../middleware/catchAsyncError.js"
import Blog from "../Model/blog.js"

export const createBlog = catchAsyncError(async (req, res, next) => {
    const { title, author, genre } = req.body
    if (!title || !author || !genre) {
        return next(new ErrorHandler("Fileds cannot be empty", 500))
    }
    const file = req.file.filename;
    const image = `http://localhost:${process.env.PORT}/image/${file}`
    const data = await Blog.create({ title, author, genre, image })
    res.status(200).json({ success: true, message: 'Blog created successfully', data })
});

export const getBlog = catchAsyncError(async (req, res, next) => {
    const data = await Blog.findAll({});
    res.status(200).json({ success: true, message: 'data fetch successfully', data })
});

export const updateBlog = catchAsyncError(async (req, res, next) => {
    const values = req.body
    const data = await Blog.update(values, {
        where: {
            id: req.params.id
        }
    })
    res.status(200).json({ success: true, message: 'update Blog successfully', data })
});

export const deleteBlog = catchAsyncError(async (req, res, next) => {
    const data = await Blog.destroy({
        where: {
            id: req.params.id
        }
    });
    res.status(200).json({ success: true, message: 'Delete Blog successfully', data })
})