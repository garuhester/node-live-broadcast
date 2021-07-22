const nodeMediaServer = require("node-media-server")

const config = {
    rtmp: {
        port: 1935,
        chunk_size: 60000,
        gop_cache: true,
        ping: 60,
        ping_timeout: 30
    },
    http: {
        port: 8000,
        allow_origin: '*'
    },
    relay: {
        ffmpeg: 'D:\\哔哩哔哩压制工具\\tools\\ffmpeg.exe',
        tasks: [
            {
                app: 'live',
                mode: 'pull',
                edge: 'rtsp://admin:wewin123456@172.16.100.236:554/h264/ch1/main/av_stream',
                // edge: 'rtsp://admin:wewin123456@172.16.38.2:554/h264/ch1/main/av_stream',
            },
            {
                app: 'live',
                mode: 'pull',
                // edge: 'rtsp://admin:wewin123456@172.16.100.236:554/h264/ch1/main/av_stream',
                edge: 'rtsp://admin:wewin123456@172.16.38.2:554/h264/ch1/main/av_stream',
            }
        ]
    }
}

var nms = new nodeMediaServer(config)
nms.run();