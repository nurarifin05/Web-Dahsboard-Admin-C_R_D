import React, {Component} from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input} from "reactstrap";

export default class CreateMenu1 extends Component{
    render () {
        return (
            <div>
                <Button 
                className="float-right mb-5" 
                color="primary" 
                onClick={this.props.toggleNewTrModal}>
                    Create
                </Button>
                <Modal
                    isOpen={this.props.newTrModal}
                    toggle={this.props.toggleNewTrModal}
                >
                    <ModalHeader toggle={this.props.toggleNewTrModal}> 
                    Add Data 
                    </ModalHeader>

                    <ModalBody>
                        <FormGroup>
                            <Label for="Device_ID">Device ID</Label>
                            <Input 
                            id="Device_ID" 
                            name="Device_ID"
                            value={this.props.newTrData.Device_ID}
                            onChange={this.props.onChangeCreateTrHandler} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="id_Account">ID Acoount</Label>
                            <Input 
                            id="id_Account" 
                            name="id_Account"
                            value={this.props.newTrData.id_Account}
                            onChange={this.props.onChangeCreateTrHandler}
                            />
                        </FormGroup>


                        <FormGroup>
                            <Label for="id_location">id_location</Label>
                            <Input 
                            id="id_location" 
                            name="id_location"
                            value={this.props.newTrData.id_location}
                            onChange={this.props.onChangeCreateTrHandler}
                             />
                        </FormGroup>

                        <FormGroup>
                            <Label for="item_id">Item ID</Label>
                            <Input 
                            id="item_id" 
                            name="item_id"
                            value={this.props.newTrData.item_id}
                            onChange={this.props.onChangeCreateTrHandler}
                             />
                        </FormGroup>

                        <FormGroup>
                            <Label for="UoM">UoM</Label>
                            <Input 
                            id="UoM" 
                            name="UoM"
                            value={this.props.newTrData.UoM}
                            onChange={this.props.onChangeCreateTrHandler}
                             />
                        </FormGroup>

                        <FormGroup>
                            <Label for="Quantity">Quantity</Label>
                            <Input 
                            id="Quantity" 
                            name="Quantity"
                            value={this.props.newTrData.Quantity}
                            onChange={this.props.onChangeCreateTrHandler}
                             />
                        </FormGroup>

                        <FormGroup>
                            <Label for="Line_number">Line_number</Label>
                            <Input 
                            id="Line_number" 
                            name="Line_number"
                            value={this.props.newTrData.Line_number}
                            onChange={this.props.onChangeCreateTrHandler}
                             />
                        </FormGroup>

                        <FormGroup>
                            <Label for="Rack_number">Rack_number</Label>
                            <Input 
                            id="Rack_number" 
                            name="Rack_number"
                            value={this.props.newTrData.Rack_number}
                            onChange={this.props.onChangeCreateTrHandler}
                             />
                        </FormGroup>

                        <FormGroup>
                            <Label for="Bin_number">Bin_number</Label>
                            <Input 
                            id="Bin_number" 
                            name="Bin_number"
                            value={this.props.newTrData.Bin_number}
                            onChange={this.props.onChangeCreateTrHandler}
                             />
                        </FormGroup>

                        <FormGroup>
                            <Label for="Time_Enter">Time_Enter</Label>
                            <Input 
                            id="Time_Enter" 
                            name="Time_Enter"
                            value={this.props.newTrData.Time_Enter}
                            onChange={this.props.onChangeCreateTrHandler}
                             />
                        </FormGroup>

                        <FormGroup>
                            <Label for="status">status</Label>
                            <Input 
                            id="status" 
                            name="status"
                            value={this.props.newTrData.status}
                            onChange={this.props.onChangeCreateTrHandler}
                             />
                        </FormGroup>


                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={() => this.props.createTr()}>
                            Add
                            </Button> {" "}
                        <Button color="secondary" onClick={this.props.toggleNewTrModal}>
                            Cancel
                            </Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}