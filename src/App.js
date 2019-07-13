/**
 * Create By Sanjay 
 * This is a Main Component of Application
 */
import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import { Row, Col, Input } from 'reactstrap';
//for Notification porpose on add/edit/delete
import { NotificationManager, NotificationContainer } from 'react-notifications';

import { productRemove } from "./actions";
//product table component 
import ProductTable from "./components/ProductTable";
//all style import here
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
    addData: {
      product_id: null,
      product_name: "",
      product_price: "",
      product_dis: ""
    },
    filtered: [],
    flag: true
  }

  //when delete Popoup Open 
  toggleDelete = (value) => {
    this.setState({
      isDeleteOpen: true,
      isEditOpen: false,
      deleteId: value,
      editData: {},
      isAddOpen: false,
      addData: {}
    })
  }

  //edit modal Open 
  toggleEdit = (data) => {
    this.setState({
      isEditOpen: true,
      isDeleteOpen: false,
      editData: data,
      isAddOpen: false,
      addData: {}
    })
  }

  //add Modal Open
  toggleAdd = () => {
    this.setState({
      isAddOpen: true,
      isEditOpen: false,
      isDeleteOpen: false,
      deleteId: "",
      editData: {}
    })
  }

  //onClose of all popup modal 
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

  //function for Remove Data from Table  
  removeRecord = () => {
    const list = this.state.Product_List.slice();//slice the array 
    //find exact match and delete with splice
    list.some((el, i) => {
      if (el.product_id === this.state.deleteId) {
        list.splice(i, 1);
        return true;
      }
      return false;
    });
    this.props.productRemove(this.state.deleteId)
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

  //change event function for edit form 
  onChangeEdit = (e) => {
    var tempObj = Object.assign({}, this.state.editData)
    tempObj[e.target.name] = e.target.value;
    this.setState({
      editData: tempObj
    })
  }

  //on Edit Button Click
  onEditData = () => {
    //find the index of object in array 
    var objIndex = this.state.Product_List.findIndex((obj => obj.product_id === this.state.editData.product_id));
    //store array in new var and replace index of Array object with new one
    var newObj = this.state.Product_List;
    newObj[objIndex] = this.state.editData;
    this.setState({
      Product_List: newObj,
      isEditOpen: false,
      isDeleteOpen: false,
      deleteId: "",
      editData: {},
      isAddOpen: {},
      addData: {}
    })
    NotificationManager.success("successfully updated record");
  }

  //onChange event Of add Form 
  onChangeAdd = (e) => {
    var tempObj = Object.assign({}, this.state.addData)
    tempObj[e.target.name] = e.target.value;
    tempObj["product_id"] = this.state.Product_List.length + 1;
    this.setState({
      addData: tempObj
    })
  }

  //add button click function
  onAddData = () => {
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

  //on Search Data in Table 
  onSearchData = (e) => {
    var searchData = [];
    if (e.target.value !== "") {
      function find(arr) {
        var result = [];
        for (var i in arr) {
          if (arr[i].product_name.toLowerCase().match(e.target.value.toLowerCase())) {
            result.push(arr[i]);
          }
        }
        return result;
      }
      searchData = find(this.state.Product_List);
      this.setState({
        filtered: searchData,
        flag: false
      })
    } else {
      searchData = [];
      this.setState({
        filtered: searchData,
        flag: true
      })
    }
  }

  render() {
    const { Product_List, isDeleteOpen, isEditOpen, editData, isAddOpen, addData, filtered, flag } = this.state;
    return (
      <Fragment>
        <Row className="App">
          <Col md="3" className="App-Search">
            <Input
              placeholder="Product Search By Name....."
              onChange={(e) => this.onSearchData(e)}
            />
          </Col>
          <Col md="9">
            <ProductTable
              removeRecord={this.removeRecord}
              isDeleteOpen={isDeleteOpen}
              toggleDelete={this.toggleDelete}
              Product_List={flag ? Product_List : filtered}
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
        <NotificationContainer />
      </Fragment>
    )
  }
}

const mapDispatchToProps = {
  productRemove
}

const mapStateToProps = ({ ProductReducer }) => {
  const { loading, deleteProduct } = ProductReducer;
  return { loading, deleteProduct };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
