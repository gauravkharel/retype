type NameProps = {
    name: string
    //making messageCount optional
    messageCount?: number
    isLoggedIn: boolean
}
//importing from here
function Greet(props: NameProps) {
  //setting its value to 0
  const {messageCount = 0} = props
  return (
    <div>
        {
          props.isLoggedIn ? `welcome ${props.name}! you have ${messageCount} unread messages` : `welcome guests`
        }
    </div>
  )
}

export default Greet