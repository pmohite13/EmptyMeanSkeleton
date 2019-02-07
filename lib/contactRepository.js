// const mongoose = require('mongoose'),
//     Schema = mongoose.Schema,
//     // VolunteerVm = require('../models/vm/volunteerVm')(),
//     Contact = require('../models/contact');

class ContactRepository {


    // insert a  get in touch
    insertGetInTouch(body, callback) {
        console.log('*** ContactRepository.insertGetInTouch');

        // let contact = new Contact();        

        // contact.name = body.name;
        // contact.email = body.email;
        // contact.subject = body.subject;
        // contact.message = body.message;
       
        // contact.save((err, contact) => {
        //     if (err) {
        //         console.log(`*** ContactRepository insertGetInTouch error: ${err}`);
        //         return callback(err, null);
        //     }

        //     callback(null, contact);
        // });
    }



}

module.exports = new ContactRepository();