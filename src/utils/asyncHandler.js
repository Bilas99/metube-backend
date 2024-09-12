const asyncHandler = (requestHandeler) => {
   retrun (req, res, next) => {
      Promise.resolve(requestHandeler(req, res, next))
      .catch((err) => next(err))
   }
}


// const asyncHandler = (func) = async (req, res, next)=> {
//    try{
//       await func(req, res, next)
//    } catch (err) {
//       res.status(err.code || 500).json({
//          success: false,
//          message: err.message
//       })
//    }
// }


export {asyncHandler}