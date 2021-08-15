const got = require('got');
const cheerio = require('cheerio');

const amcUrl = "https://www.google.com/finance/quote/AMC:NYSE";


got(amcUrl)
.then(res => {
    const $ = cheerio.load(res.body);
    const heading = $('.kHAtIb')
    const price = $(".YMlKec.fxKbKc");
    const stats = $(".uptEI").each((i,element) => {
        const textSide = $(element).children('div').children('span').find($('div')).html()
        console.log(textSide);
    });

})

















/* const accountSid = 'AC42474977264072da7257d91e3b3f3ed6'
const authToken = 'a5b783e591e78abfdec60d64b558ec2b'

const client = require('twilio')(accountSid, authToken)
client.messages.create({
    body: "test test 1, 2",
    from: "+14342531690",
    to: "+17028573658"
})
.then(message => console.log(message.sid)); */
