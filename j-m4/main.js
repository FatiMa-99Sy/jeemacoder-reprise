class Jeemacoder extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            prenomInput: "",
            nomInput: "",
            emailInput: "",
            telephone: ""
        }
    }
    render() {
        return (
            <div className="container col-lg-6 m-auto col-12">
                            <h5 className=" d-flex justify-content-center">Jeemacoder</h5>

                <form className>
                    <div className="row">
                        <div class="col-6 py-2">
                            <label class="form-label">Prenom</label>
                            <input type="text" class="form-control" 
                            value={this.state.prenomInput}
                            onChange={(e)=> {
                                this.setState({
                                    prenomInput:e.target.value
                                })
                            }} />
                        </div>

                        <div class="col-6 py-2">
                            <label className="form-label">Nom</label>
                            <input type="text" class="form-control"  value={this.state.nomInput}
                            onChange={(e)=> {
                                this.setState({
                                    nomInput:e.target.value
                                })
                            }}/>
                        </div>
                    </div>


                   <div className="row">
                   <div class="col-6 py-2">
                        <label className="form-label">Email</label>
                        <input type="email" class="form-control"
                            value={this.state.emailInput}
                            onChange={(e)=> {
                                this.setState({
                                    emailInput:e.target.value
                                })
                            }}/>
                    </div>
                    <div class="col-6 py-2">
                        <label class="form-label">Telephone</label>
                        <input type="numbers" class="form-control" value={this.state.telephoneInput}
                            onChange={(e)=> {
                                this.setState({
                                    telephoneInput:e.target.value
                                })
                            }} />
                    </div>
                   </div>
        

                    <button type="submit" class="btn btn-success col-lg-12 m-auto col-12">Submit</button>
                </form>
            </div>
        )
    };
}



ReactDOM.render(<Jeemacoder />, document.getElementById("root"))
