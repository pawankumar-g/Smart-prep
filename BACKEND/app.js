const express = require('express');
const cors = require('cors');

// Import routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

const schoolRoutes = require("./routes/schoolRoutes");
const regionalSchoolRoutes = require('./routes/regionalSchoolRoutes');
const regionRoutes = require('./routes/regionRoutes');

const subjectRoutes = require("./routes/ResourceSubjectRoute");
const tutorRoutes = require('./routes/tutors');
const statsRoutes = require('./routes/statsRoutes');
const resourceTypeRoutes = require("./routes/resourceTypeRoutes");




const app = express();

// Enable CORS
app.use(cors({
  origin: 'http://localhost:3000', // frontend URL
  credentials: true,
}));

// Parse JSON bodies
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

app.use("/api/schools", schoolRoutes);

app.use('/api/regions', regionRoutes);

app.use('/api/regional-schools', regionalSchoolRoutes);

app.use("/api/subjects", subjectRoutes);

app.use('/api/tutors', tutorRoutes);

app.use('/api/stats', statsRoutes);

app.use("/api/resource-types", resourceTypeRoutes);




app.get('/', (req, res) => {
  res.send('API is running...');
});

module.exports = app;
