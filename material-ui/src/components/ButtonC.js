import {Button} from '@mui/material'
function ButtonC() {
  return (
    <div>
      <Button variant='contained'> click me</Button>
      <Button variant='text' sx={{backgroundColor:'purple'}}> click me</Button>
      <Button variant='outlined' size='large'  onClick={()=>alert("viru mat chedo pls")}> click me</Button>
    </div>
  )
}

export default ButtonC;
