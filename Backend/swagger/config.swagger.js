const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Grocery App API",
      version: "1.0.0",
      description: "API documentation for Grocery, Group, and User routes"
    },
    servers: [
      {
        url: "http://localhost:4444",
      }
    ],
  },
  apis: [
    // __dirname + "/routes/*.js",
    __dirname + "/User.swagger.js",
    __dirname + "/Group.swagger.js",
    __dirname + "/Grocery.swagger.js",
    
    
    ], // look for Swagger comments in route files
};

const swaggerSpec = swaggerJsdoc(options);
// export default {swaggerUi, swaggerSpec};
module.exports = {
  swaggerUi,
  swaggerSpec
}