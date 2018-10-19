import React, { Component } from 'react';

export default class Product extends Component {
    constructor(props) {
        super(props);
    }
    componentWillReceiveProps(){
        console.log('entrou no produto');
    }
    
    render() {
        return (
            <div>
                <div className="col-sm-3">
                    <div className="thumb-wrapper">
                        <div className="img-box">
                            <img src={this.props.imageName} className="img-responsive img-fluid" alt=""></img>
                        </div>
                        <div className="thumb-content">
                            <h5>{this.props.name}</h5>
                            <p className="item-price">
                                <span id="old-price"> de: <strike>{this.props.oldPrice}</strike></span>
                                <span id="price"> por: <strong>{this.props.price}</strong></span>
                            </p>

                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}