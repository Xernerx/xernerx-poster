class XernerxPoster {
    name: string;
    client: Client;

    constructor(client: Client) {
        this.name = "XernerxPoster";

        this.client = client;
    }
}

interface Client {

};

export { XernerxPoster }