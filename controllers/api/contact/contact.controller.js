const contactsRepo = require('../../../lib/contactRepository'),
    util = require('util');

class ContactController {

    constructor(router) {
        router.post('/', this.insertGetInTouch.bind(this));
    }


    insertGetInTouch(req, res) {

        let subject = 'Inquiry';
        let body = '<p>Hello there!</p>'
        sendEmail('pmohite13@gmail.com'.toString(), subject.toString(), body.toString());

        console.log('*** insertGetInTouch');
        contactsRepo.insertGetInTouch(req.body, (err, contact) => {

            if (err) {
                console.log('*** contactsRepo.insertGetInTouch error: ' + util.inspect(err));
                res.json({ status: false, error: 'Insert failed', contact: null });
            } else {
                console.log('*** insertGetInTouch ok');
                res.json({ status: true, error: null, contact: contact });
            }
        });
    }





}

module.exports = ContactController;