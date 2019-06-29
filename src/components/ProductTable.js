/**
 * Create BY Sanjay 
 * Created Date 28-06-2019
 * Component for Product Table 
 */

import React, { Fragment } from 'react';
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

import DeleteConfirm from "./DeleteConfirm";//for Delete Confirmation Modal 

export default function ProductTable({
    Product_List,
    onClose,
    editData,
    onEditData,
    onChangeEdit,
    removeRecord,
    isEditOpen,
    toggleDelete,
    toggleEdit,
    isDeleteOpen,
    toggleAdd,
    isAddOpen,
    addData,
    onChangeAdd,
    onAddData
}) {
    return (
        <Fragment>
            <div className="row justify-content-between" style={{ margin: "0" }}>
                <div>
                    <h3>Product List</h3>
                </div>
                <div>
                    <Button style={{ width: "100px" }} onClick={toggleAdd} color="primary">Add</Button>
                </div>
            </div>
            <Table bordered responsive hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Discription</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {Product_List &&
                        Product_List.map((item, key) => {
                            return <tr key={key}>
                                <th scope="row">{key + 1}</th>
                                <td>{item.product_name}</td>
                                <td>{item.product_price}</td>
                                <td>{item.product_dis}</td>
                                <td>
                                    <i className="fa fa-trash" onClick={() => toggleDelete(item.product_id)} />
                                    <i className="fa fa-edit" onClick={() => toggleEdit(item)} />
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </Table>
            <DeleteConfirm removeRecord={removeRecord} isDeleteOpen={isDeleteOpen} onClose={onClose} />
            {editData &&
                <Modal isOpen={isEditOpen} toggle={onClose}>
                    <ModalHeader toggle={onClose}>Update Product</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label for="product_name">Product Name</Label>
                                <Input
                                    type="text"
                                    name="product_name"
                                    value={editData.product_name}
                                    onChange={(e) => onChangeEdit(e)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="product_price">Product Price</Label>
                                <Input
                                    type="text"
                                    name="product_price"
                                    value={editData.product_price}
                                    onChange={(e) => onChangeEdit(e)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="product_dis">Product Discription</Label>
                                <Input
                                    type="textarea"
                                    name="product_dis"
                                    value={editData.product_dis}
                                    onChange={(e) => onChangeEdit(e)}
                                />
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={onEditData}>Update</Button>{' '}
                        <Button color="secondary" onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            }
            {isAddOpen &&
                <Modal isOpen={isAddOpen} toggle={onClose}>
                    <ModalHeader toggle={onClose}>Add Product</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label for="product_name">Product Name</Label>
                                <Input
                                    type="text"
                                    name="product_name"
                                    value={addData.product_name}
                                    onChange={(e) => onChangeAdd(e)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="product_price">Product Price</Label>
                                <Input
                                    type="text"
                                    name="product_price"
                                    value={addData.product_price}
                                    onChange={(e) => onChangeAdd(e)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="product_dis">Product Discription</Label>
                                <Input
                                    type="textarea"
                                    name="product_dis"
                                    value={addData.product_dis}
                                    onChange={(e) => onChangeAdd(e)}
                                />
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={onAddData}>Add</Button>{' '}
                        <Button color="secondary" onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            }
        </Fragment>
    )
}
