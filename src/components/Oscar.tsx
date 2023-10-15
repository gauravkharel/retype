//type safety for react component 
//React.ReactNode is the safest way to do it.
type OscarProps = {
    children: React.ReactNode
}

export const Oscar = (props: OscarProps) => {
    return (
        <div>{props.children}</div>
    )
}