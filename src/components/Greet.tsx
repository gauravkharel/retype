type NameProps = {
    name: string
    messageCount: number
    isLoggedIn: boolean
}

function Greet(props: NameProps) {
  return (
    <div>
        {
          props.isLoggedIn ? `welcome ${props.name}! you have ${props.messageCount} unread messages` : `welcome guests`
        }
    </div>
  )
}

export default Greet