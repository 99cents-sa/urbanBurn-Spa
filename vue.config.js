module.exports = {
    baseUrl: process.env.NODE_ENV === 'production' ? 'https://s3.amazonaws.com/99dev.co.za/urban-burn/' : './',
    //baseUrl: './',
    productionSourceMap: false
  };


  /* module.exports = {
    publicPath: 'https://checkershosting.s3.amazonaws.com/championship-boerewors-gallery/',
    productionSourceMap: false
  } */