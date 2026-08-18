require('dotenv').config();

const express = require('express');
const swaggerUi = require('swagger-ui-express');
const openapiDocument = require('./openapi.json');

const authRoutes = require('./routes/auth');
const publicRoutes = require('./routes/public');
const protectedRoutes = require('./routes/protected');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Swagger documentation route
app.use('/docs', swaggerUi.serve, swaggerUi.setup(openapiDocument));

// API Routes
app.use('/auth', authRoutes);
app.use('/public', publicRoutes);
app.use('/protected', protectedRoutes);

app.listen(PORT, () => {
  console.log('Server running and connected to Supabase');
});
