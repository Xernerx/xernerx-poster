import PostStats from './models/stats.js';

export default class XernerxPoster {
    public name;
    public client;
    public options;

    constructor(client: Record<string, unknown>, options: Options) {
        this.name = 'XernerxPoster';

        this.client = client;

        this.options = options;

        PostStats(options.topgg, this.client as unknown as Client);

        setInterval(async () => {
            PostStats(options.topgg, this.client as unknown as Client);
        }, 1800000);
    }
}

interface Options {
    topgg: string;
}

export interface Client {
    guilds: Record<string, Function>;
    options: {
        shardCount: number;
        shards: Array<number>;
    };
    ws: {
        totalShards: number;
    };
    emit: Function;
}

export { XernerxPoster };
