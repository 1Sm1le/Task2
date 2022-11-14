class Message{
    constructor(author, time, message){
        this.author = author
        this.time = time
        this.message = message
    }
    toString(){
        return `${this.time} ${this.author}: ${this.message}`
    }
}
class Messenger extends Message{
    arr = []
    send(author, message){
        let newMessage = new Message(author, gettime(), message)
        this.arr.push(newMessage)
    }
    showHistory(){
        this.arr.forEach((item) => {
            console.log(item.toString())
        })
    }
}
function gettime() {
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`
}
let newMessenger = new Messenger()
newMessenger.send('Артем', 'Первое сообщение')
newMessenger.send('Мария', 'Второе сообщение')
newMessenger.showHistory()