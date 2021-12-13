import Button from "./Button"

const Header = ({title}) => {
    const onClick = () =>{
        
    }
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color="green" text="Add" onClick={onClick}/>
        </header>
    )
}

export default Header
