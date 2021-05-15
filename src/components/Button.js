const Button = ({text , color , test}) => {
//  const clickToAdd = () => {
//  alert ('Clicked Here');
// }

 
 return (
  <button onClick={test} style={{backgroundColor : color}} className='btn'>{text}</button>
 )
}

Button.defaultProps = {
 color : 'steelblue'
}

export default Button
