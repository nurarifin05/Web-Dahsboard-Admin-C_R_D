import React, {Component} from 'react'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    FormGroup,
    Label,
    Input,
  } from "reactstrap";

export default class updateMenu1 extends Component {
render (){
    return(
        <div>
            <Modal
            isOpen={this.props.editTrModal}
            toggle={this.props.toggleEditTrModal}
            >
            <ModalHeader toggle={this.props.toggleEditTrModal}>
                Update Tr
            </ModalHeader>
            <ModalBody>
                        <FormGroup>
                            <Label for="Device_ID">Device ID</Label>
                            <Input 
                            id="Device_ID" 
                            name="Device_ID"
                            value={this.props.editTrData.Device_ID}
                            onChange={this.props.onChangeEditTrHanler} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="id_Account">ID Acoount</Label>
                            <Input 
                            id="id_Account" 
                            name="id_Account"
                            value={this.props.editTrData.id_Account}
                            onChange={this.props.onChangeEditTrHanler}
                            />
                        </FormGroup>


                        <FormGroup>
                            <Label for="id_location">id_location</Label>
                            <Input 
                            id="id_location" 
                            name="id_location"
                            value={this.props.editTrData.id_location}
                            onChange={this.props.onChangeEditTrHanler}
                             />
                        </FormGroup>

                        <FormGroup>
                            <Label for="item_id">Item ID</Label>
                            <Input 
                            id="item_id" 
                            name="item_id"
                            value={this.props.editTrData.item_id}
                            onChange={this.props.onChangeEditTrHanler}
                             />
                        </FormGroup>

                        <FormGroup>
                            <Label for="UoM">UoM</Label>
                            <Input 
                            id="UoM" 
                            name="UoM"
                            value={this.props.editTrData.UoM}
                            onChange={this.props.onChangeEditTrHanler}
                             />
                        </FormGroup>

                        <FormGroup>
                            <Label for="Quantity">Quantity</Label>
                            <Input 
                            id="Quantity" 
                            name="Quantity"
                            value={this.props.editTrData.Quantity}
                            onChange={this.props.onChangeEditTrHanler}
                             />
                        </FormGroup>

                        <FormGroup>
                            <Label for="Line_number">Line_number</Label>
                            <Input 
                            id="Line_number" 
                            name="Line_number"
                            value={this.props.editTrData.Line_number}
                            onChange={this.props.onChangeEditTrHanler}
                             />
                        </FormGroup>

                        <FormGroup>
                            <Label for="Rack_number">Rack_number</Label>
                            <Input 
                            id="Rack_number" 
                            name="Rack_number"
                            value={this.props.editTrData.Rack_number}
                            onChange={this.props.onChangeEditTrHanler}
                             />
                        </FormGroup>

                        <FormGroup>
                            <Label for="Bin_number">Bin_number</Label>
                            <Input 
                            id="Bin_number" 
                            name="Bin_number"
                            value={this.props.editTrData.Bin_number}
                            onChange={this.props.onChangeEditTrHanler}
                             />
                        </FormGroup>

                        <FormGroup>
                            <Label for="Time_Enter">Time_Enter</Label>
                            <Input 
                            id="Time_Enter" 
                            name="Time_Enter"
                            value={this.props.editTrData.Time_Enter}
                            onChange={this.props.onChangeEditTrHanler}
                             />
                        </FormGroup>

                        <FormGroup>
                            <Label for="status">status</Label>
                            <Input 
                            id="status" 
                            name="status"
                            value={this.props.editTrData.status}
                            onChange={this.props.onChangeEditTrHanler}
                             />
                        </FormGroup>
            </ModalBody>
            <ModalFooter>
                <Button
                color="primary"
                onClick={this.props.updateTr}
                >
                    Update
                </Button>
                <Button
                color="secondary"
                onClick={this.props.toggleEditTrModal}
                >
                    Cancel
                </Button>
            </ModalFooter>
            </Modal>
        </div>
    );
}
}