db.createUser({
    user: 'ycsb',
    pwd: 'ycsb',
    roles: [{
        role: 'readWrite',
        db: 'ycsb'
    }]
});