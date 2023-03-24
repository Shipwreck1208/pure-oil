const express       = require('express'),
      sql           = require('mssql'),
      bodyParser = require('body-parser'),
    //   dbOperation   = require('./dbFiles/dbOperation'),
      cors          = require('cors');


const app = express();

app.use(cors());
app.use(bodyParser.json());

const config = {
    user: 'shippy',
    password: 'ship',
    server: 'DESKTOP-S1KJGBI',
    database: 'CocoOil',
    options: {
        trustServerCertificate: true
    }
};


app.post('/order', async (req, res) => {
  const { name, bottle, phone, status } = req.body;

  
  try {
    const pool = await sql.connect(config);

    const result = await pool.request()
      .input('name', sql.NVarChar, name)
      .input('bottle', sql.NVarChar, bottle)
      .input('phone', sql.NVarChar, phone)
      .input('status', sql.NVarChar, status)
      .query('INSERT INTO Orders (name, bottle, phone, status) VALUES (@name, @bottle, @phone, @status)');

    console.log(`User added: ${name} (${phone})`);

    res.status(201).json(result.recordset[0]);
  } catch (error) {
    console.error('Error adding user:', error);
    res.status(500).send('Internal server error');
  }
});


app.get('/show', async (req, res) => {
    try {
      await sql.connect(config);
      const result = await sql.query('SELECT * FROM Orders');
      res.send(result.recordset);
    //   console.log(result.recordset)
    } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
    }
  });



const API_PORT = process.env.PORT || 5000;

// app.use(express.json());
// app.use(express.urlencoded());
// app.use(cors());

// app.post('/api', async(req, res) => {
//     const result = await dbOperation.getCustomers(req.body.name, req.body.id);
//     res.send(result.recordset);
// });

// app.post('/create', async(req, res) =>{
//     await dbOperation.createCustomer(req.body);
//     const result = await dbOperation.getCustomers(req.body.cus_name);
//     res.send(result.recordset);
// });

// app.put('/edit', async(req, res) =>{
//     await dbOperation.updateCustomer(req.body);
//     const result = await dbOperation.updateCustomer(req.body.id, req.body.cus_name);
//     res.send(result);
// });

// app.get('/show', async(req, res) =>{
//     const result = await dbOperation.showCustomers();
//     res.send(result.recordset);
// });

// app.delete('/delete', async(req, res) => {
//     const result = await dbOperation.deleteCustomer(req.body.name, req.body.id);
//     res.send(result);
// });

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));