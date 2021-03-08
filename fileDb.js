const fs = require('fs');
const path = "./messages";

let newData = null;
let data = [];

module.exports = {
    init() {
        try {
            fs.readdir(path, (err, files) => {
                if (err) {
                    console.error(err);
                } else {
                    files.forEach(file => { 
                        const message = fs.readFileSync(path + '/' + file)
                        const info = JSON.parse(message.toString());
                        if(data.length >= 5){
                            const difference = (data.length)-4;
                            data.splice(0,difference);
                        };
                        data.push(info);
                    });
                }   
            });
        } catch (e) {
            data = [];
        };
    },

    getItems() {
        return data;
    },

    addItem(item) {
        item.date = new Date();
        newData = item;
        if(data.length >= 5){
            const difference = (data.length)-4;
            data.splice(0,difference);
        };
        data.push(newData);
        this.save();
    },
    save() {
        const fileName = './messages/' + new Date() + '.txt';
        fs.writeFileSync(fileName, JSON.stringify(newData));
    }
};