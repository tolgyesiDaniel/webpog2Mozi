import require from 'mysql';

class Connection {
    connection() {
        const con = require.createConnection({
            host: '185.111.89.131',
            user: 'litscor1_Admin',
            password: 'fd4$@8.uwK[$',
            database: 'litscor1_beadDatabase'
        });
        con.connect((err) => {
            if (err) throw err;
            console.log('Connected');
        });
    }
}

export default Connection;
