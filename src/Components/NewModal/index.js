import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import ReactModal from 'react-modal'
import {Tabs, Tab, TabPanel, TabList} from 'react-web-tabs'

import 'react-web-tabs/dist/react-web-tabs.css'
import './style.scss'

import {FaClose} from "react-icons/lib/fa";

class NewModal extends Component {


    render() {
        return (
            <ReactModal isOpen={this.props.show ? this.props.show : false} contentLabel="New project" className="new-project-modal"
                        overlayClassName="modal-overlay">
                <div className="header">New Project <span className='float-right close-modal' onClick={this.props.close}><FaClose /></span></div>

                <Tabs
                    vertical={true}
                    defaultTab="one"
                    onChange={(tabId) => {
                        console.log(tabId)
                    }}
                >
                    <TabList>
                        {this.props.studios.map((studio, index) => (
                            <Tab key={index} tabFor={'New-Project-Tab-' + index}>{studio.title}</Tab>
                        ))}
                    </TabList>

                    {this.props.studios.map((studio, index) => (
                        <TabPanel key={index} tabId={'New-Project-Tab-' + index}>
                            <p>Content of {studio.title} studio</p>
                        </TabPanel>
                    ))}
                </Tabs>
            </ReactModal>
        )
    }
}

const mapStateToProps = (state) => {
    let studios = []
    if (state.studio.data) studios = state.studio.data.data
    return {
        studios: studios,
    }
}

export default connect(mapStateToProps, null)(NewModal)