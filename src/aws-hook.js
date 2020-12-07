import { useEffect, useState } from 'react';
import AWS from 'aws-sdk';

import { awsIdentityPoolId } from './config';

export const useS3 = (onSuccess, onError) => {
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

  const upload = file => {
    const uploadObject = new AWS.S3.ManagedUpload({
      params: {
        Bucket: 'test-sto',
        Key: `${new Date().getTime()}.mp4`,
        Body: file,
        ACL: 'public-read'
      }
    });
    const promise = uploadObject.promise();
    promise.then(
      data => {
        onSuccess(data);
      },
      err => {
        onError(err);
      }
    );
  };
  return { upload, getList, list };
};
