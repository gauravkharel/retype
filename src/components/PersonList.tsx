import { Name } from "./Person.types"

type PersonListProps = {
    names: Name[]
}

const PersonList = (props: PersonListProps) =>  {
  return ( 
        <>
            {props.names.map(name => {
                return (
                    <h2 key={name.first}>{name.first} {name.last}</h2>
                )
            })}
        </>
    )
}

export default PersonList