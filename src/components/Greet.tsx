type NameProps = {
    name: string
}

function Greet(props: NameProps) {
  return (
    <div>
        <h2>welcome {props.name}</h2>
    </div>
  )
}

export default Greet