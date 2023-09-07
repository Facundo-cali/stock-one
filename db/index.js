const mongoose = require('mongoose');

// Connect to DB and start server
const dbConnection = (app) => {
    mongoose
        .connect(process.env.MONGO_URI)
        .then(() => {
            const PORT = process.env.PORT || 3001;
            app.listen(PORT, () => {
                console.log(`Server is running on port ${PORT}`);
            });
        })
        .catch((err) => {
            console.log(err);
        });
};

module.exports = dbConnection;