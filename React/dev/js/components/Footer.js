import React from "react"


class Footer extends React.Component{

    render(){
        return (
                <footer className="navbar navbar-fixed-bottom">
                    <div className='container'>
                    <div className='row'>
                        <div className='col-sm-5'>
                        <h3 className='lead'><strong>Information</strong> and <strong>Copyright</strong></h3>
                        <p>Powered by <strong>Node.js</strong>, <strong>ElasticSearch</strong> and <strong>React</strong> with Redux architecture and server-side rendering.</p>
                        <p>You may view the <a href='https://github.com/aayush-bhardwaj/FlashCard'>Source Code</a> behind this project on GitHub.</p>
                        <p>© 2016 Hackavan.</p>
                        </div>
                        <div className='col-sm-7 hidden-xs'>
                        <h3 className='lead'><strong><a href='https://www.youtube.com/channel/UCRV2ZWpnGf3M2PMm8irs3kg'>YouTube</a></strong> Subscribe Us.</h3>
                        </div>
                    </div>
                    </div>
                </footer>
            );
    }
}

export default Footer;