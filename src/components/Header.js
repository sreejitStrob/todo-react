import Button from './Button'


const Header = ({title}) => {

 const onClick = () => {
 alert("test");
}

 return (
  <header className='header'>
    <h1>Task Tracker</h1>
   <Button color='green' text = 'Add' test = {onClick}/>
  </header>
 )
}

Header.defaultProps = {
 title : 'Task Tracker'
}

export default Header
