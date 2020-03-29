import React ,{Component} from 'react'

import Aux from '../Auxiliary'
import Modal from '../../Modal/Modal'

const withErrorHandler = (WrappedComponent,axios)=>{
    return class extends Component{
        state = {
            error : null
        }

        errorHandler = ()=>{
            this.setState({error:null})
        }

        componentWillMount(){
            this.reqInterceptors = axios.interceptors.request.use(req=>{
                this.setState({error : null});
                return req;
            })

            this.resInterceptors = axios.interceptors.response.use(res=>res,error=>{
                this.setState({error : error});
                console.log(error);
            })
        }

        componentWillUnmount(){
            axios.interceptors.request.eject(this.reqInterceptors);
            axios.interceptors.response.eject(this.resInterceptors);
        }

        render(){
            return(
                <Aux>
                    <Modal show={this.state.error} cancel={this.errorHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props}>
                    </WrappedComponent>
                </Aux>
            )
        }
    } 
}

export default withErrorHandler;