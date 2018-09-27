function errorHandler(err, request, response, next){
  return response.status(err.status || 500).json({
    err:{
      message: err.message || "There is somthing wrong."
    }
  });
}

module.exports = errorHandler;
