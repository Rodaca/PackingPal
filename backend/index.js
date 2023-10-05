import express from 'express';
import dotenv from 'dotenv';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import router from './routes/router.js';



import cors from 'cors';


dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());

app.use(express.json());


app.use('/api', router);

const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'DSC ESCOM ExpressAPI',
        version: '0.1.0',
        description:
                  'Esta API fue creada para el taller del DSC-ESCOM 2020-2',
        license: {
          name: 'MIT',
          url: 'https://spdx.org/licenses/MIT.html',
        },
        contact: {
          name: 'DSC-ESCOM',
          url: 'https://www.facebook.com/Developer-Student-Club-ESCOM-IPN-111708200650636',
        },
      },
      servers: [{
        url: `http://localhost:6998`,
      }],
    },
    apis: ['./documentation.yml'],
  };
  const specs = swaggerJsdoc(options);
  app.use(
      '/api-docs',
      swaggerUi.serve,
      swaggerUi.setup(specs, {explorer: true}),
  );
  


app.listen(port, ()=>{
    console.log(`Server listening on ${port}`);
})