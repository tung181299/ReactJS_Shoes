class MessageParser {
    constructor(actionProvider) {
        this.actionProvider = actionProvider;
    }

    parse(message) {
        const lowerCaseMessage = message.toLowerCase();

        if (lowerCaseMessage.includes("shoes")) {
            this.actionProvider.handleShoesList();
        }
    }
}

export default MessageParser;