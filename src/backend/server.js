import express from 'express';
import postgres from 'postgres';
import 'dotenv/config';

const sql = postgres(process.env.DATABASE_URL);
const app = express();
const port = 8080;

app.get('/api/products', async (req, res, next) => {
  const currentPage = req.query.page;

  // Calculate the offset based on the current page
  const offset = currentPage * 5 - 5;

  // Fetch the products from the database
  const products = await sql`
  SELECT *
  FROM product
  ORDER BY id DESC
  OFFSET ${offset} ROWS
  FETCH FIRST 5 ROW ONLY`;

  // set the response headers to allow all origins - CORS policy
  // for testing purposes only
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );

  res.status(200).json(products);
});

// 404 error handler
app.use((req, res, next) => {
  res.status(404).json({ message: 'NOT FOUND.' });
});

// global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
