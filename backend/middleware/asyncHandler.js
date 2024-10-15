// crie um manipulador assíncrono porque usaremos async await Mongoose
// ou os métodos do modelo que são métodos Mongoose são assíncronos, então precisamos usar um sync.

const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
}

export default asyncHandler;