import React, { Component } from 'react';
import axios from 'axios';
import '../../assets/style.css'
import Product from './product';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dados: [],
            index: 0   

        }
    }

    componentDidMount() {
        axios.get(`http://localhost:3003/itens`)
            .then(res => {
                this.setState({ dados: res.data.data.recommendation});
            });
    
    }

    renderProduct(produto){
  
        return <Product name={produto.name} 
                    imageName={produto.imageName} 
                    price={produto.price} 
                    oldPrice={produto.oldPrice} 
        />
    }

    

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Produtos</h2>
                            <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="0">

                                <ol className="carousel-indicators">
                                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                                    <li data-target="#myCarousel" data-slide-to="1"></li>
                                    <li data-target="#myCarousel" data-slide-to="2"></li>
                                </ol>
                                <div className="carousel-inner">

                                    <div className="item carousel-item active">
                                        <div className="row">
                                            {this.state.dados.map(produto => 
                                                this.renderProduct(produto)
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <a className="carousel-control left carousel-control-prev" href="#myCarousel" data-slide="prev">
                                    <i className="fa fa-angle-left"></i>
                                </a>
                                <a className="carousel-control right carousel-control-next" href="#myCarousel" data-slide="next">
                                    <i className="fa fa-angle-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
