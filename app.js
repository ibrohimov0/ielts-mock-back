const express = require('express');
const app = express();
const { default: mongoose } = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerOptions = require('./swagger/swagger.json');
const swaggerDocs = swaggerJsDoc(swaggerOptions);
const cors = require('cors');
require('dotenv').config();

// routes
const loginRoute = require("./routes/login")
const testsRoute = require("./routes/tests")

/**
 * @swagger
 * tags:
 *      - name: login
 *      - name: tests
 */

var options = {
    swaggerOptions: {
        authAction: {
            JWT: {
                name: "JWT",
                schema: {
                    type: "apiKey",
                    in: "header",
                    name: "Authorization"
                },
                value: "Bearer <JWT>"
            }
        }
    }
};

app.use(cors({
    origin: '*',
}))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", loginRoute,testsRoute);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs, options));

app.use((error, req, res, next) => {
    console.log(error);
    const status = error.status || 500;
    const message = error.message || 'Internal Server Error';
    res.status(status).json({ message: message });
})

mongoose.connect(process.env.ADMIN_KEY)
    .then(() => {
        app.listen(process.env.PORT || 8080, () => {
            console.log(`Server is running on port ${process.env.PORT || 8080}`);
        })
    })
    .catch((err) => {
        console.error("Database connection error:", err);
    });