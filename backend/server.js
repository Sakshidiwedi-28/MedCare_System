const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/User');
const Appointment = require('./models/Appointment');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Replace with your MongoDB URI
const MONGO_URI = 'mongodb+srv://admin:321@cluster0.6pkvh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// MongoDB connection
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to MedCare Backend!');
});

// User registration
app.post('/register', async (req, res) => {
  const { firstName, lastName, email, phone, password, confirmPassword } = req.body;
  if (!firstName || !lastName || !email || !phone || !password || !confirmPassword) {
    return res.status(400).send('All fields are required');
  }
  if (password !== confirmPassword) {
    return res.status(400).send('Passwords do not match');
  }
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send('Email already exists');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ firstName, lastName, email, phone, password: hashedPassword });
    await user.save();
    res.status(201).send('User registered successfully');
  } catch (err) {
    console.error('Error registering user:', err);
    res.status(500).send('Internal server error');
  }
});

// User login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send('All fields are required');
  }
  try {
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).send('Invalid credentials');
    }
    const token = jwt.sign({ userId: user._id }, '123', { expiresIn: '1h' });
    res.send({ token, message: 'Login successful' });
  } catch (err) {
    console.error('Error during login:', err);
    res.status(500).send('Internal server error');
  }
});

// Book appointment
app.post('/appointments', async (req, res) => {
  const { email, doctor, date, time, notes } = req.body;
  if (!email || !doctor || !date || !time) {
    return res.status(400).send('All fields are required');
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send('User not found');
    }
    const appointment = new Appointment({ email, doctor, date, time, notes });
    await appointment.save();
    console.log('Appointment booked:', appointment);
    res.status(201).send('Appointment booked successfully');
  } catch (err) {
    console.error('Error booking appointment:', err);
    res.status(500).send('Internal server error');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
