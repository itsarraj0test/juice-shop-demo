app.get('/users', (req, res) => {
    const userId = req.query.userId;

    // Safe: Using a parameterized query to prevent SQL Injection
    const query = 'SELECT * FROM users WHERE id = ?';

    db.query(query, [userId], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});
