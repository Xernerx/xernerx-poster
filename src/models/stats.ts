import got from 'got';

interface Client {
    token: string,
    user: {
        id: string,
    },
    guilds: Record<string, Function | object>
    [index: string]: unknown
}
export class Post {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    botsForDiscord(token: string) {
        try {
            (async () => {
                const response = await got.post(`https://discords.com/bots/api/bot/${this.client.user.id}`, {
                    json: {
                        headers: {
                            Authorization: token
                        },
                        body: {
                            server_count: (await (this.client.guilds.fetch as Function)()).size
                        }
                    }
                })

                console.log(response)
            })();
        }

        catch (error) {
            // this.client.emit()
        }
    }
}