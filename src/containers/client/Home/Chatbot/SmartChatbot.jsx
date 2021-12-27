import React, { Component, Fragment } from 'react';
import Chatbot from 'react-chatbot-kit';
import config from './Config';
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';

import './SmartChatBot.scss'

class SmartChatbot extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className="chat-support">
                        <button type="button" className="btn btnMess" data-toggle="modal" data-target="#staticBackdrop">
                            <img src="https://ahachat.com/img/girl-helper.png" />
                        </button>
                    </div>

                    {/* Modal */}
                    <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="staticBackdropLabel">HELPING BOT</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default SmartChatbot;
