const { Client, LocalAuth, MessageMedia, Buttons } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const fs = require('fs');
const exceljs = require('exceljs');
const moment = require('moment');

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', (qr) => {
    console.log('Dont have a saved session, QRCODE...:')
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', message => {
    let { from, to, body } = message;
	console.log(from, to, body);
    body = body.toLowerCase();
    
    if(from === 'status@broadcast') return;
    if(from.split("@")[1] === "g.us") return;

    switch(body){
        case('a'):
        sendMessage(from, 'We have incredible discounts waiting for you on our website 🌐 \n https://e-commerce-pf-henna.vercel.app/');
        sendMedia(from, 'discount.png');
        sendMediaURL(from, "https://i.blogs.es/4bc9dc/moviles-baratos-a-plazos-con-movistar-vodafone-orange-y-yoigo-en-marzo-de-2021/500_333.jpg");
        break;
        case('b'):
        sendMessage(from, 'We need you to provide us with your shipment number and we will inform you of its status 🚚');
        break;
        case('c'):
        sendMessage(from, 'We need you to provide us with your order number and the reasons for your decision 💱') ;
        break;
        case('d'):
        sendMessage(from, 'We have more than 100 branches throughout the country. 🏙') ;
        break;
        case('e'):
        sendMessage(from, 'Trained personnel will contact you in a few minutes 👩🏻‍💻👨🏻‍💻') ;
        break;
        default:
            sendMedia(from, 'logo.png');
            setTimeout(()=>{
                sendMessage(from,'Greetings from *TECNOSHOP* team \n\n i am a 🤖bot programmed to help you, what can i do for you? \n\n *A*: Discounts 🤑 \n *B*: Shipping 🚚 \n *C*: Returns 💱 \n *D*: Branches 🏙 \n *E*: Personalized attention 👩🏻‍💻👨🏻‍💻')
            }, 3000)
        }
        saveHistorial(from, body);
 
});

const sendMedia = (to, file)=>{
    const mediaFile = MessageMedia.fromFilePath(`./whatsapp/mediaSend/${file}`);
    client.sendMessage(to, mediaFile);
}

const sendMediaURL = async (to, url)=>{
    const media = await MessageMedia.fromUrl(`${url}`);
    client.sendMessage(to, media);
}

/* const sendButtons = (to)=>{
    let button = new Buttons("message", [{body: "bt1"}, {body: "bt2"}], "title", "footer")
    client.sendMessage(to, button)
} */

const saveHistorial = (number, message)=>{
    const pathChat = `./whatsapp/chats/${number}.xlsx`;
    const workbook = new exceljs.Workbook()
    const today = moment().format('DD-MM-YYYY hh:mm');
    if(fs.existsSync(pathChat)){
        workbook.xlsx.readFile(pathChat)
        .then(()=>{
            const worksheet = workbook.getWorksheet(1);
            const lastRow = worksheet.lastRow;
            let getRowInsert = worksheet.getRow(++(lastRow.number));
            getRowInsert.getCell('A').value= today;
            getRowInsert.getCell('B').value= message;
            getRowInsert.commit();
            workbook.xlsx.writeFile(pathChat)
            .then(()=>{
                console.log('Add new chats');
            })
            .catch(()=>{
                console.log('Something fail');
            })
        })
    }else{
        const worksheet = workbook.addWorksheet('Chats');
        worksheet.columns = [
            { header: 'Date', key: 'date'},
            { header: 'Message', key: 'message'}
        ]
        worksheet.addRow([today, message]);
        workbook.xlsx.writeFile(pathChat)
        .then(()=>{
            console.log('History created')
        })
        .catch(()=>{
            console.log('Something fail')
        })
    }
}

const sendMessage = (to, message)=>{
    client.sendMessage(to, message);
}

module.exports = {
    client,
    sendMedia,
    sendMessage,
    sendMediaURL
};
 