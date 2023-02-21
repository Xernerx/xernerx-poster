import { Client } from '../main.js';

export default async function PostStats(token: string, client: Client) {
    const baseUrl = 'https://top.gg/api/';

    const body = {
        server_count: (await client.guilds.fetch()).size,
        shard_id: client.options.shards[0] || 0,
        shard_count: client.options.shardCount || client.ws.totalShards || client.options.shards.length,
    };

    const res = await fetch(`${baseUrl}bots/stats`, {
        method: 'POST',
        headers: {
            Authorization: token,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });

    if (res.status === 200) return client.emit('webhookPost', client, body);
    else if (!res.ok) client.emit('webhookError', client, body, (await res.json()).error);
}
