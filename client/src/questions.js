import React, { Component } from "react"
import ReactTable from "react-table-6"
import api from "./datas"


class UpdateQuestion extends Component {
    updateUser = event => {
        event.preventDefault()

        window.location.href = `/questions/update/${this.props.id}`
    }

    render() {
        return <button onClick={this.updateUser}>Update</button>
    }
}
class QuestionList2 extends Component {
    constructor(props) {
        const filter = props.filter;

        super(props)
        this.state = {
            
            questions: [],
            columns: [],
        }
    }
    
    componentDidMount = async () => {
        this.setState({ })

        await api.AllQuestions().then(questions => {
            this.setState({
                questions: questions.data.data,
            })
        })
    }
    
    render() {
        const { questions } = this.state
        console.log( questions)
        const columns = [
         
            {
                Header: "Questions",
                accessor: "name",
                filterable: true,
            },
            {
                Header: "answer section",
                accessor: "question",
        },
        {
            Header: '',
            accessor: '',
            Cell: function(props) {
                return (
                    <span>
                        <UpdateQuestion id={props.original._id} />
                    </span>
                )
            },
        },
    

        ]

        let showTable = true
        if (!questions.length) {
            showTable = false
            
        }
        return (
            <>
            <div>
              
                <h1>Questions</h1>

                    {showTable && (
                    <ReactTable
                   
                        data={questions}
                        columns={columns}
                        defaultPageSize={10}
                        showPageSizeOptions={false}
                        minRows={0}
                    />
                )}
            </div>
            </>
        )
                    }
                }

export default QuestionList2;