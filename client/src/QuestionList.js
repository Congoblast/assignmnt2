import React, { Component } from 'react'
import ReactTable from 'react-table-6'
import api from './datas'
import "./styles.css";
import 'react-table-6/react-table.css'
import {Button} from "react-bootstrap";


class AnswerQuestion extends Component {
    updateUser = event => {
        event.preventDefault()

        window.location.href = `/questions/update/${this.props.id}`
    }

    render() {
        
        return <Button onClick={this.updateUser}>Answer This Question</Button>
    }
}
class QuestionList extends Component {
    constructor(props) {
        //const filter = props.filter;
        super(props)
        this.state = {
            //questions: [],
            //columns: [],
            //isLoading: false,
        }
    }
    componentDidMount = async () => {
        //this.setState({ isLoading: true })

        await api.AllQuestions().then(questions => {
            this.setState({
                questions: questions.data.data,
                //isLoading: false,
            })
        })
    }
    
    render() {

        const { questions } = this.state
        //console.log('TCL: MoviesList -> render -> movies', questions)
        const columns = [
            //{
              //  Header: 'ID',
                //accessor: '_id',
               // filterable: true,
            //},
            {
                Header: 'Names',
                accessor: 'name',
                sortable:false
            },
           // {
             //   Header: "Question",
               // accessor: 'question',
                //sortable:false
      //  },
        {
           // Header: '',
            //accessor: '',
            sortable:false,

            Cell: function(props) {
                return (
                    <span>
                        <AnswerQuestion id={props.original._id} />
                    </span>
                )
            },
        },
    

        ]

        let showTable = true
       // if (!questions.length) {
         //   showTable = false
        //}
        return (
            <>
             <h1 className="primary text-center">Questions List</h1>
            <div className="wrapper">
              
               

                    {showTable && (
                        
                    <ReactTable
                  

                        data={questions}
                        
                        columns={columns}
                        //loading={isLoading}
                       // defaultPageSize={10}
                        //showPageSizeOptions={true}
                        //minRows={0}
                        showPagination={false}
                    />
                )}
                
            </div>
            </>
        )
                    }
                }

export default QuestionList;