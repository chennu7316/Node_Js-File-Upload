module.exports = {
    aws_table_name: 'user_data',
    aws_local_config: {
        region: 'local',
        endpoint: 'http://localhost:8000'
    },
    aws_remote_config: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: 'us-east-1'
    }
};