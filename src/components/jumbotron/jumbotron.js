import React,{Component} from 'react';

import {Jumbotron} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import {ButtonGroup} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

import Modal from '../modal/modal';

import api from '../../services/api';

export class JumbotronFilters extends Component{
    render(){
        return(
            <Jumbotron className='mt-3 mb-3 pt-4 pb-4'>
                <h2>Pokedex</h2>
                <hr/>
                <div className='d-flex'>
                    <div className='col-4'>
                        <Form.Label>Filtrar</Form.Label>
                        <Form.Control type='text'/>
                    </div>
                    <div className='col-4'>
                        <Modal />
                    </div>
                    <div className='col-4'>c</div>
                </div>
            </Jumbotron>
        );
    }
}

const initialState ={
    data:[],
    url: '',
    page: ''
}

export class JumbotonItens extends Component{
    
    state = {...initialState};
    
    componentDidMount(){
        this.profiles('/?offset=0&limit=20');
    }
    

    async profiles (url, page = 1){
        const response = await api.get(`${url}`);
        this.setState({
            data: response.data.results,
            page
        });
        console.log(response)
    };
    
    nextPage = () =>{
        let newPage = this.state.page + 1;
        const url = `/?offset=${newPage}&limit=20`;
        this.profiles(url, newPage);
    }

    prevPage = () =>{
        let newPage = this.state.page - 1;
        const url = `/?offset=${newPage}&limit=20`;
        this.profiles(url, newPage);
    }

    render(){
        return(
            <Jumbotron className='pt-4'>
                <div className='d-flex justify-content-end'>
                    <ButtonGroup>
                        <Button onClick={this.prevPage} variant='secondary'>Prev</Button>
                        <Button onClick={this.nextPage} variant='secondary'>Next</Button>
                    </ButtonGroup>
                </div>
                
                <div className='mt-3'>
                    {this.state.data.map( (itens, index) => (
                        <Card key={index} >
                            <Card.Body>
                                <Card.Text>
                                    {itens.name}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
                {console.log(this.state.data)}
            </Jumbotron>
        );
    }
}