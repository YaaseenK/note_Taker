const fs = require('fs');


const validateID = (note, notes, noteId, val, req, res, next) => {

    if(val) {
      noteAfterDel = notes.filter(selected =>{
        return selected.id != noteId;
    });
        console.log(noteAfterDel);
    fs.writeFile(`./db/db.json`, JSON.stringify(noteAfterDel), (err) =>
        err
            ? console.error(err)
            : console.log(`note with id: ${note.id}, Titled: ${note.title} has been Deleted`));      
    }else {
      res.json({statusCode: 401, message: 'Unauthorized'})
    }
};
  
exports.validateID = validateID;