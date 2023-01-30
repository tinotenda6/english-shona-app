import * as AWS from 'aws-sdk';
import { ConfigurationOptions } from 'aws-sdk';

const configuration: ConfigurationOptions = {
    region: 'us-east-2',
    secretAccessKey: 'DIHyeropk7TVBP3g/cZIBBOJUM6AL3esv0T8l4Xu',
    accessKeyId: 'AKIATGKNSEBTIM3DDD6O'
}

AWS.config.update(configuration)
const docClient = new AWS.DynamoDB.DocumentClient()

export const fetchData = (tableName) => {
    var params = {
        TableName: tableName
    }

    docClient.scan(params, function (err, data) {
        if (!err) {
            console.log(data);
        }
        else{
            console.log(err);
        }
    })
}