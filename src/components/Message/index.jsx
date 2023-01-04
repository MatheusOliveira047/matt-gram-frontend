import './Message.css'

const Message = ({type,msg}) => {
  return (
    <div className={`message ${type}`}>
      <p>{msg}</p>
    </div>
  )
}

export default Message
