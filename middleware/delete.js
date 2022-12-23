const fs = require('fs');


const validateID = (note, notes, noteId, val, req, res, next) => {
// if val = true
    if(val) {
      // noteafterDel will euqal cuttent notes
      // filtered by selected.id 
      noteAfterDel = notes.filter(selected =>{
        return selected.id != noteId;
    });
        console.log(noteAfterDel);
        // write to db
    fs.writeFile(`./db/db.json`, JSON.stringify(noteAfterDel), (err) =>
        err
            ? console.error(err)
            : console.log(`note with id: ${note.id}, Titled: ${note.title} has been Deleted`));      
    }else {
      res.json({statusCode: 401, message: 'No notes found'})
    }
};
  
exports.validateID = validateID;