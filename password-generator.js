const generator = require('generate-password');

// 4eme tache
const pwGenerator=()=>{
    const password = generator.generate({
        length: 10,
        numbers: true,
        symbols:true
    });
    console.log("password : "+password);
}

pwGenerator();
