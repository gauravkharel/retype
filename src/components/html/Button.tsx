type ButtonProps = {
    variant: 'primary' | 'secondary'
    children: string
} & Omit<React.ComponentProps<'button'>, 'children'> 
// the omit keyword allows the button to take out the children from the button html component as 
// it previously intersects with the ComponentProps

export const CustomButton = ({variant, children, ...rest}: ButtonProps) => {
    return <button className={`class-width-${variant}`} {...rest}>{children}</button>
}