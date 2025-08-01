const express = require("express");
const cors = require("cors");
const db = require("./models");
const authRoutes = require("./routes/auth.routes");

const app = express();
const PORT = process.env.PORT

// Middleware
app.use(cors({
  origin: 'http://localhost:4200',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);

// Sync database
db.sequelize.sync()
  .then(() => {
    console.log("✅ Database connected and synced.");
    // Start server
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Failed to connect to DB:", err);
  });