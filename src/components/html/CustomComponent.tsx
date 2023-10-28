import Greet from "../Greet"
//here we used the props for the Greet component
const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
  return (
    <div>
        {props.name}
    </div>
  )
}

export default CustomComponent