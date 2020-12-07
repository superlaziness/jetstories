import { useEffect, useState } from 'react';
import AWS from 'aws-sdk';

import { awsIdentityPoolId } from './config';

export const useS3 = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    AWS.config.region = 'us-east-1';
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: awsIdentityPoolId
    });
  }, []);

  const getList = () => {
    const s3 = new AWS.S3({
      apiVersion: '2006-03-01',
      params: { Bucket: 'test-sto' }
    });
    s3.listObjects({ Delimiter: '/' }, (err, data) => {
      if (data && data.Contents) setList(data.Contents);
      if (err) console.log('failed getting list', err);
    });
  };

  const upload = ({ file, name }) => {
    const uploadObject = new AWS.S3.ManagedUpload({
      params: {
        Bucket: 'test-sto',
        Key: name,
        Body: file,
        ACL: 'public-read'
      }
    });
    const promise = uploadObject.promise();
    promise.then(
      data => {
        console.log('uploaded', data);
      },
      err => {
        console.log('error', err);
      }
    );
  };
  return { upload, getList, list };
};
