const swaggerDocs = {
  swagger: "2.0",
  info: {
      version: "1.2.3",
      title: "Example REST API Hotel Service",
      description: "API for hotels",
      license: {
          name: "MIT",
          url: "https://opensource.org/licenses/MIT"
      }
  },
  host: "localhost:4000",
  tags: [
      {
          name: "Hotels",
          description: "Hotels in the database"
      },
      {
          name: "Rooms",
          description: "Rooms in the database"
      },
      {
          name: "Employees",
          description: "Employees in the database"
      }
  ],
  consumes: ["application/json"],
  produces: ["application/json"],
  paths: {
      "/Hotel": {
          get: {
              tags: ["Hotels"],
              summary: "Get all hotels in the system",
              responses: {
                  200: {
                      description: "OK",
                      schema: {
                          $ref: "#/definitions/Hotel"
                      }
                  }, 
                  404: {
                      description: "Hotel Not Found",
                      schema: {
                          $ref: "#/definitions/Hotel"
                      }
                  },
                  500: {
                      description: "Server Not Found",
                      schema: {
                          $ref: "#/definitions/Hotel"
                      }
                  }
              }
          }
      },
      "Hotel/search/{name}": {
          get: {
              tags: ["Hotels"],
              summary: "Get a specific hotel by name",
              parameters: [
                  {
                      name: "name",
                      in: "path",
                      description: "Name of the hotel searched for",
                      schema: {
                          $ref: "#/definitions/Hotel"
                      }
                  },
              ],
              responses: {
                  200: {
                      description: "OK",
                      schema: {
                          $ref: "#/definitions/Hotel"
                      }
                  },
                  400: {
                      description: "Bad Request",
                      schema: {
                          $ref: "#/definitions/Hotel"
                      }
                  },
                  404: {
                      description: "Hotel Not Found",
                      schema: {
                          $ref: "#/definitions/Hotel"
                      }
                  },
                  500: {
                      description: "Server Not Found",
                      schema: {
                          $ref: "#/definitions/Hotel"
                      }
                  }
              }
          }
      },
      "Hotel/search/{city}": {
          get: {
              tags: ["Hotels"],
              summary: "Get a specific hotel by city",
              parameters: [
                  {
                      name: "city",
                      in: "path",
                      description: "City of the hotel searched for",
                      schema: {
                          $ref: "#/definitions/Hotel"
                      }
                  },
              ],
              responses: {
                  200: {
                      description: "OK",
                      schema: {
                          $ref: "#/definitions/Hotel"
                      }
                  },
                  400: {
                      description: "Bad Request",
                      schema: {
                          $ref: "#/definitions/Hotel"
                      }
                  },
                  404: {
                      description: "Hotel Not Found",
                      schema: {
                          $ref: "#/definitions/Hotel"
                      }
                  },
                  500: {
                      description: "Server Not Found",
                      schema: {
                          $ref: "#/definitions/Hotel"
                      }
                  }
              }
          }
      },
      "/Hotel/add": {
          post: {
              tags: ["Hotels"],
              summary: "Add a new hotel",
              parameters: [
                  {
                      name: "Hotel",
                      in: "body",
                      description: "Hotel to be added",
                      schema: {
                          $ref: "#/definitions/Hotel"
                      }
                  },
              ],
              responses: {
                  201: {
                      description: "Created",
                      schema: {
                          $ref: "#/definitions/Hotel"
                      }
                  },
                  400: {
                      description: "Bad Request",
                      schema: {
                          $ref: "#/definitions/Hotel"
                      }
                  },
                  404: {
                      description: "Hotel Not Found",
                      schema: {
                          $ref: "#/definitions/Hotel"
                      }
                  },
                  500: {
                      description: "Server Not Found",
                      schema: {
                          $ref: "#/definitions/Hotel"
                      }
                  }
              }
          }
      },
      "/Hotel/change/{name}": {
          put: {
              tags: ["Hotels"],
              summary: "Change a specific Hotel by number",
              parameters: [
                  {
                      name: "name",
                      in: "path",
                      description: "Name of the hotel searched for",
                      schema: {
                          $ref: "#/definitions/Hotel"
                      }
                  },
                  {
                      name: "Hotel",
                      in: "body",
                      description: "Hotel will be changed",
                      schema: {
                          $ref: "#/definitions/Hotel"
                      }
                  },
              ],
              responses: {
                  200: {
                      description: "OK",
                      schema: {
                          $ref: "#/definitions/Hotel"
                      }
                  },
                  400: {
                      description: "Bad Request",
                      schema: {
                          $ref: "#/definitions/Hotel"
                      }
                  },
                  404: {
                      description: "Hotel Not Found",
                      schema: {
                          $ref: "#/definitions/Hotel"
                      }
                  },
                  500: {
                      description: "Server Not Found",
                      schema: {
                          $ref: "#/definitions/Hotel"
                      }
                  }
              }
          }
      },
      "/Hotel/delete/{name}": {
          delete: {
              tags: ["Hotels"],
              summary: "Delete a specific hotel",
              parameters: [
                  {
                      name: "name",
                      in: "path",
                      description: "Name of the hotel searched for",
                      schema: {
                          $ref: "#/definitions/Hotel"
                      }
                  },
              ],
              responses: {
                  200: {
                      description: "OK",
                      schema: {
                          $ref: "#/definitions/Hotel"
                      }
                  },
                  400: {
                      description: "Bad Request",
                      schema: {
                          $ref: "#/definitions/Hotel"
                      }
                  },
                  404: {
                      description: "Hotel Not Found",
                      schema: {
                          $ref: "#/definitions/Hotel"
                      }
                  },
                  500: {
                      description: "Server Not Found",
                      schema: {
                          $ref: "#/definitions/Hotel"
                      }
                  }
              }
          }
      },
      "/Room": {
          get: {
              tags: ["Rooms"],
              summary: "Get all Rooms in the system",
              responses: {
                  200: {
                      description: "OK",
                      schema: {
                          $ref: "#/definitions/Hotel/Room"
                      }
                  },
                  400: {
                      description: "Bad Request",
                      schema: {
                          $ref: "#/definitions/Hotel/Room"
                      }
                  },
                  404: {
                      description: "Hotel Not Found",
                      schema: {
                          $ref: "#/definitions/Hotel/Room"
                      }
                  },
                  500: {
                      description: "Server Not Found",
                      schema: {
                          $ref: "#/definitions/Hotel/Room"
                      }
                  }
              }
          }
      },
      "/Room/search/{hotel_id}": {
          get: {
              tags: ["Rooms"],
              summary: "Get all rooms in a specific hotel",
              parameters: [
                  {
                      name: "hotel_id",
                      in: "path",
                      description: "Hotel_id of the Hotel where Rooms searched for",
                      schema: {
                          $ref: "#/definitions/Hotel/Room"
                      }
                  },
              ],
              responses: {
                  200: {
                      description: "OK",
                      schema: {
                          $ref: "#/definitions/Hotel/Room"
                      }
                  },
                  400: {
                      description: "Bad Request",
                      schema: {
                          $ref: "#/definitions/Hotel/Room"
                      }
                  },
                  404: {
                      description: "Hotel Not Found",
                      schema: {
                          $ref: "#/definitions/Hotel/Room"
                      }
                  },
                  500: {
                      description: "Server Not Found",
                      schema: {
                          $ref: "#/definitions/Hotel/Room"
                      }
                  }
              }
          }
      },
      "/Room/search/{availability}": {
          get: {
              tags: ["Rooms"],
              summary: "Get all rooms in a specific hotel",
              parameters: [
                  {
                      name: "availability",
                      in: "path",
                      description: "Availability of the Hotel where Rooms searched for",
                      schema: {
                          $ref: "#/definitions/Hotel/Room"
                      }
                  },
              ],
              responses: {
                  200: {
                      description: "OK",
                      schema: {
                          $ref: "#/definitions/Hotel/Room"
                      }
                  },
                  400: {
                      description: "Bad Request",
                      schema: {
                          $ref: "#/definitions/Hotel/Room"
                      }
                  },
                  404: {
                      description: "Hotel Not Found",
                      schema: {
                          $ref: "#/definitions/Hotel/Room"
                      }
                  },
                  500: {
                      description: "Server Not Found",
                      schema: {
                          $ref: "#/definitions/Hotel/Room"
                      }
                  }
              }
          }
      },
      "/Room/add": {
          post: {
              tags: ["Rooms"],
              summary: "Add a new Room",
              parameters: [
                  {
                      name: "Room",
                      in: "body",
                      description: "Room to be added",
                      schema: {
                          $ref: "#/definitions/Hotel/Room"
                      }
                  },
              ],
              responses: {
                  201: {
                      description: "Created",
                      schema: {
                          $ref: "#/definitions/Hotel/Room"
                      }
                  },
                  400: {
                      description: "Bad Request",
                      schema: {
                          $ref: "#/definitions/Hotel/Room"
                      }
                  },
                  404: {
                      description: "Hotel Not Found",
                      schema: {
                          $ref: "#/definitions/Hotel/Room"
                      }
                  },
                  500: {
                      description: "Server Not Found",
                      schema: {
                          $ref: "#/definitions/Hotel/Room"
                      }
                  }
              }
          }
      },
      "/Room/change/{id}": {
          put: {
              tags: ["Rooms"],
              summary: "Change a specific Room by id",
              parameters: [
                  {
                      name: "id",
                      in: "path",
                      description: "ID of the Room searched for",
                      schema: {
                          $ref: "#/definitions/Hotel/Room"
                      }
                  },
                  {
                      name: "Room",
                      in: "body",
                      description: "Room will be changed",
                      schema: {
                          $ref: "#/definitions/Hotel/Room"
                      }
                  },
              ],
              responses: {
                  200: {
                      description: "OK",
                      schema: {
                          $ref: "#/definitions/Hotel/Room"
                      }
                  },
                  400: {
                      description: "Bad Request",
                      schema: {
                          $ref: "#/definitions/Hotel/Room"
                      }
                  },
                  404: {
                      description: "Hotel Not Found",
                      schema: {
                          $ref: "#/definitions/Hotel/Room"
                      }
                  },
                  500: {
                      description: "Server Not Found",
                      schema: {
                          $ref: "#/definitions/Hotel/Room"
                      }
                  }
              }
          }
      },
      "/Room/delete/{id}": {
          delete: {
              tags: ["Rooms"],
              summary: "Delete a specific Room",
              parameters: [
                  {
                      name: "id",
                      in: "path",
                      description: "ID of the Room searched for",
                      schema: {
                          $ref: "#/definitions/Hotel/Room"
                      }
                  },
              ],
              responses: {
                  200: {
                      description: "OK",
                      schema: {
                          $ref: "#/definitions/Hotel/Room"
                      }
                  },
                  400: {
                      description: "Bad Request",
                      schema: {
                          $ref: "#/definitions/Hotel/Room"
                      }
                  },
                  404: {
                      description: "Hotel Not Found",
                      schema: {
                          $ref: "#/definitions/Hotel/Room"
                      }
                  },
                  500: {
                      description: "Server Not Found",
                      schema: {
                          $ref: "#/definitions/Hotel/Room"
                      }
                  }
              }
          }
      },
      "/Employee": {
          get: {
              tags: ["Employees"],
              summary: "Get all Employees in the system",
              responses: {
                  200: {
                      description: "OK",
                      schema: {
                          $ref: "#/definitions/Hotel/Employee"
                      }
                  },
                  400: {
                      description: "Bad Request",
                      schema: {
                          $ref: "#/definitions/Hotel/Employee"
                      }
                  },
                  404: {
                      description: "Employee Not Found",
                      schema: {
                          $ref: "#/definitions/Hotel/Employee"
                      }
                  },
                  500: {
                      description: "Server Not Found",
                      schema: {
                          $ref: "#/definitions/Hotel/Employee"
                      }
                  }
              }
          }
      },
      "/Employee/{job}": {
          get: {
              tags: ["Employees"],
              summary: "Get a specific Employee by job",
              parameters: [
                  {
                      name: "job",
                      in: "path",
                      description: "Job of the Employee searched for",
                      schema: {
                          $ref: "#/definitions/Hotel/Employee"
                      }
                  },
              ],
              responses: {
                  200: {
                      description: "OK",
                      schema: {
                          $ref: "#/definitions/Hotel/Employee"
                      }
                  },
                  400: {
                      description: "Bad Request",
                      schema: {
                          $ref: "#/definitions/Hotel/Employee"
                      }
                  },
                  404: {
                      description: "Employee Not Found",
                      schema: {
                          $ref: "#/definitions/Hotel/Employee"
                      }
                  },
                  500: {
                      description: "Server Not Found",
                      schema: {
                          $ref: "#/definitions/Hotel/Employee"
                      }
                  }
              }
          }
      },
      "/Employee/{lastname}": {
          get: {
              tags: ["Employees"],
              summary: "Get a specific Employee by lastname",
              parameters: [
                  {
                      name: "lastname",
                      in: "path",
                      description: "Lastname of the Employee searched for",
                      schema: {
                          $ref: "#/definitions/Hotel/Employee"
                      }
                  },
              ],
              responses: {
                  200: {
                      description: "OK",
                      schema: {
                          $ref: "#/definitions/Hotel/Employee"
                      }
                  },
                  400: {
                      description: "Bad Request",
                      schema: {
                          $ref: "#/definitions/Hotel/Employee"
                      }
                  },
                  404: {
                      description: "Employee Not Found",
                      schema: {
                          $ref: "#/definitions/Hotel/Employee"
                      }
                  },
                  500: {
                      description: "Server Not Found",
                      schema: {
                          $ref: "#/definitions/Hotel/Employee"
                      }
                  }
              }
          }
      },
      "/Employee/add": {
          post: {
              tags: ["Employees"],
              summary: "Add a new Employee",
              parameters: [
                  {
                      name: "Employee",
                      in: "body",
                      description: "Employee to be added",
                      schema: {
                          $ref: "#/definitions/Hotel/Employee"
                      }
                  },
              ],
              responses: {
                  201: {
                      description: "Created",
                      schema: {
                          $ref: "#/definitions/Hotel/Employee"
                      }
                  },
                  400: {
                      description: "Bad Request",
                      schema: {
                          $ref: "#/definitions/Hotel/Employee"
                      }
                  },
                  404: {
                      description: "Employee Not Found",
                      schema: {
                          $ref: "#/definitions/Hotel/Employee"
                      }
                  },
                  500: {
                      description: "Server Not Found",
                      schema: {
                          $ref: "#/definitions/Hotel/Employee"
                      }
                  }
              }
          }
      },
      "/Employee/change/{id}": {
          put: {
              tags: ["Employees"],
              summary: "Change a specific Employee by id",
              parameters: [
                  {
                      name: "id",
                      in: "path",
                      description: "ID of the Employee searched for",
                      schema: {
                          $ref: "#/definitions/Hotel/Employee"
                      }
                  },
                  {
                      name: "Employee",
                      in: "body",
                      description: "Employee will be changed",
                      schema: {
                          $ref: "#/definitions/Hotel/Employee"
                      }
                  },
              ],
              responses: {
                  200: {
                      description: "OK",
                      schema: {
                          $ref: "#/definitions/Hotel/Employee"
                      }
                  },
                  400: {
                      description: "Bad Request",
                      schema: {
                          $ref: "#/definitions/Hotel/Employee"
                      }
                  },
                  404: {
                      description: "Employee Not Found",
                      schema: {
                          $ref: "#/definitions/Hotel/Employee"
                      }
                  },
                  500: {
                      description: "Server Not Found",
                      schema: {
                          $ref: "#/definitions/Hotel/Employee"
                      }
                  }
              }
          }
      },
      "/Employee/delete/{id}": {
          delete: {
              tags: ["Employees"],
              summary: "Delete a specific Employee",
              parameters: [
                  {
                      name: "id",
                      in: "path",
                      description: "ID of the Employee searched for",
                      schema: {
                          $ref: "#/definitions/Hotel/Employee"
                      }
                  },
              ],
              responses: {
                  200: {
                      description: "OK",
                      schema: {
                          $ref: "#/definitions/Hotel/Employee"
                      }
                  },
                  400: {
                      description: "Bad Request",
                      schema: {
                          $ref: "#/definitions/Hotel/Employee"
                      }
                  },
                  404: {
                      description: "Employee Not Found",
                      schema: {
                          $ref: "#/definitions/Hotel/Employee"
                      }
                  },
                  500: {
                      description: "Server Not Found",
                      schema: {
                          $ref: "#/definitions/Hotel/Employee"
                      }
                  }
              }
          }
      }
  },
  definitions: {
      Hotel: {
          required: [
              "name", "city", "stars" 
          ],
          properties: {
              _id: {
                  type: "string",
                  uniqueItems: true
              },
              name: {
                  type: "string"
              },
              city: {
                  type: "string"
              },
              stars: {
                  type: "integer"
              },
              rooms: {
                  type: "number"
              },
              restaurant : {
                  type: "boolean"
              }
          }
      },
      Room: {
          required: [
              "hotel_id", "type", "price"
          ],
          properties: {
              _id: {
                  type: "string",
                  uniqueItems: true
              },
              hotel_id: {
                  type: "string"
              },
              type: {
                  type: "string"
              },
              size: {
                  type: "string"
              },
              price: {
                  type: "number"
              },
              availability: {
                  type: "boolean"
              },
              balcony: {
                  type: "boolean"
              }
          }
      },
      Employee: {
          required: [
              "hotel_id", "first_name", "last_name", "job"
          ],
          properties: {
              _id: {
                  type: "string",
                  uniqueItems: true
              },
              hotel_id: {
                  type: "integer",
              },
              first_name: {
                  type: "string"
              },
              last_name: {
                  type: "string"
              },
              job: {
                  type: "string"
              },
              work_experience: {
                  type: "string"
              }
          }
      }
  }
};

export default swaggerDocs;