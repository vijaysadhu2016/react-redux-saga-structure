import React, { Component, Fragment } from 'react';
import { Row, Col, Input } from 'reactstrap';
import { NotificationManager, NotificationContainer } from 'react-notifications';

import ProductTable from "./components/ProductTable";
import "./libCss";
import jsonData from './data';

class App extends Component {

  state = {
    Product_List: jsonData.data,
    isDeleteOpen: false,
    isEditOpen: false,
    isAddOpen: false,
    deleteId: "",
    editData: {},
    addData:{
      product_id: null,
      product_name:"",
      product_price: "",
      product_dis: ""
    }
  }

  toggleDelete = (value) => {
    this.setState({
      isDeleteOpen: true,
      isEditOpen: false,
      deleteId: value,
      editData:{},
      isAddOpen:false,
      addData:{}
    })
  }

  toggleEdit = (data) => {
    this.setState({
      isEditOpen: true,
      isDeleteOpen: false,
      editData: data,
      isAddOpen: false,
      addData: {}
    })
  }

  toggleAdd = () =>{
    this.setState({
      isAddOpen: true,
      isEditOpen: false,
      isDeleteOpen: false,
      deleteId: "",
      editData: {}
    })
  }

  onClose = () => {
    this.setState({
      isDeleteOpen: false,
      isEditOpen: false,
      deleteId: "",
      editData: {},
      isAddOpen: false,
      addData: {}
    })
  }

  removeRecord = () => {
    const list = this.state.Product_List.slice();
    list.some((el, i) => {
      if (el.product_id === this.state.deleteId) {
        list.splice(i, 1);
        return true;
      }
    });
    this.setState({
      Product_List: list,
      isDeleteOpen: false,
      isEditOpen: false,
      deleteId: "",
      editData: {},
      isAddOpen: false,
      addData: {}
    });
    NotificationManager.success("successfully deleted record");
  }

  onChangeEdit = (e) => {
    var tempObj = Object.assign({}, this.state.editData)
    tempObj[e.target.name] = e.target.value;
    this.setState({
      editData: tempObj
    })
  }

  onEditData = () => {
    var objIndex = this.state.Product_List.findIndex((obj => obj.product_id === this.state.editData.product_id));
    var newObj = this.state.Product_List;
    newObj[objIndex] = this.state.editData;
    this.setState({
      Product_List : newObj,
      isEditOpen: false,
      isDeleteOpen: false,
      deleteId: "",
      editData: {},
      isAddOpen: {},
      addData: {}
    })
    NotificationManager.success("successfully updated record");
  }

  onChangeAdd = (e) => {
    var tempObj = Object.assign({}, this.state.addData)
    tempObj[e.target.name] = e.target.value;
    tempObj["product_id"] = this.state.Product_List.length + 1;
    this.setState({
      addData: tempObj
    })
  }

  onAddData = () =>{    
    this.setState({
      Product_List: [...this.state.Product_List, this.state.addData],
      isAddOpen: false,
      isDeleteOpen: false,
      isEditOpen: false,
      addData: {},
      editData: {},
      deleteId: "" 
    })
    NotificationManager.success("successfully added record");
  }

  render() {
    const { Product_List, isDeleteOpen, isEditOpen, editData, isAddOpen, addData } = this.state; 
    return (
      <Fragment>
        <Row className="App">
          <Col md="3" className="App-Search">
            <Input placeholder="Product Search Here....."/>
          </Col>
          <Col md="9">
            <ProductTable 
              removeRecord={this.removeRecord} 
              isDeleteOpen={isDeleteOpen} 
              toggleDelete={this.toggleDelete} 
              Product_List={Product_List} 
              onClose={this.onClose}
              toggleEdit={this.toggleEdit}
              isEditOpen={isEditOpen}
              editData={editData}
              onEditData={this.onEditData}
              onChange={this.onChangeEdit}
              isAddOpen={isAddOpen}
              addData={addData}
              toggleAdd={this.toggleAdd}
              onChangeAdd={this.onChangeAdd}
              onAddData={this.onAddData}
            />
          </Col>
        </Row>
        <NotificationContainer/>
      </Fragment>
    )
  }
}

export default App;
