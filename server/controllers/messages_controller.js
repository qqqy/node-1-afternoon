let messages = []

let id = 0;

function findMessage(id){
  for(let i = 0; i<messages.length; i++){
    let thisId = messages[i].id
    if(id==thisId){return i}
  }
}

module.exports = {
  createMessage: (req, res, next) => {
    console.log('createMessage invoked. Creating message...')
    let { text , time} = req.body
    messages.push({ id , time , text})
    id++
    res.status(200).send(messages)
  } ,

  getMessages: (req, res) => {
    console.log('getMessages invoked')
    res.status(200).send(messages)
  } ,

  editMessage: (req, res) => {
    console.log('editMessage invoked on message #' + req.params.id)
    let index = findMessage(req.params.id)
    // console.log(index)
    messages[index].text = req.body.text
    console.log('New text: ' + messages[index].text)
    res.status(200).send(messages)
  } ,

  deleteMessage: (req, res) => {
    console.log('deleteMessage invoked on #' + req.params.id)
    let index = findMessage(req.params.id)
    console.log('Index is found: '+ index)
    messages.splice(index, 1)
    console.log('message at index ' + index + ' removed')
    res.status(200).send(messages)
  }
}