
import Drawer from "@mui/material/Drawer";
import Form from './Form'

function NewCar({ open, callFunction }) {
  return (
    <Drawer anchor={"right"} open={open} onClose={callFunction}>
     <Form/>
    </Drawer>
  );
}
export default NewCar;
