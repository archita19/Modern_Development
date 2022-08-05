const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('studentDB.sqlite');

let createQuery = "CREATE TABLE student (\
	roll_no INTEGER PRIMARY KEY,\
	first_name TEXT NOT NULL,\
	last_name TEXT NOT NULL,\
	email TEXT NOT NULL UNIQUE,\
	phone TEXT NOT NULL UNIQUE\
)";

db.serialize(()=> {
    db.run(createQuery);

    let insertQuery = db.prepare("INSERT INTO student VALUES (?,?,?,?,?)");
    insertQuery.run(1234, "Ray", "Doe", "raydoe@rediff.com", "9045678882");
    insertQuery.run(1235, "Sam", "Dias", "sam11@rediff.com", "9045670002");
    insertQuery.run(1237, "Janice", "Fernandes", "jnnn@rediff.com", "9045671112");
    insertQuery.finalize();

    db.each("SELECT roll_no, first_name, last_name, email, phone FROM student", (err, row) => {
        if(err) return console.error(err.message)
        console.log("Roll No : " + row.roll_no);
        console.log("Name : " + row.first_name +  " " + row.last_name);
        console.log("Email : " + row.email);
        console.log("Phone : " + row.phone + "\n");
    });

    db.run("UPDATE student SET email = ? WHERE roll_no = ?", ["jnnn@yahoo.com", 1237], err => {
        if(err) return console.error(err.message)
        console.log("student updated successfully!");
    })

    db.run("DELETE FROM student WHERE roll_no = ?", 1235, err => {
        if(err) return console.error(err.message)
        console.log("student deleted successfully!");
    })
})

db.close();