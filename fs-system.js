const fs = require('fs');

fs.writeFile('employees.json', '{"name":"Employee 1 Name","salary":2000}', 'utf8', (err) => {
    if (err) console.log(err);
    console.log('NEW EMPLOYEES IS CRATED');
});

fs.readFile('employees.json','utf8',(err,data) => {
    if (err) console.log(err);
    console.log(data);
    console.log('EMPLOYEES DATA İS READİNG');
})

fs.appendFile('employees.json','\n{"name":"Employee 2 Name","salary":2000}', 'utf8', (err) => {
    if(err) console.log(err);
    console.log('NEW DATA İS ADDED');
})
fs.unlink('employees.json',(err) => {
    if(err) console.log(err);
    console.log('FILE İS DELETED');
})