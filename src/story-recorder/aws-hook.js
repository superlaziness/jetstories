import { useEffect } from 'react';
import AWS from 'aws-sdk';

import { awsIdentityPoolId } from '../config';

const useS3 = () => {
  useEffect(() => {
    AWS.config.region = 'us-east-1'; // Region
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: awsIdentityPoolId
    });
    console.log('aws');
    const s3 = new AWS.S3({
      apiVersion: '2006-03-01',
      params: { Bucket: 'test-sto' }
    });
    console.log('s3', s3);
    s3.listObjects({ Delimiter: '/' }, (err, data) => {
      console.log('check', err, data);
    });
    // const objectParams = {
    //   Bucket: 'test-sto',
    //   Key: 'telegram-cloud-document-2-5361931506988091867.mp4'
    // };
    // s3.getObject(objectParams, (getErr, getData) => {
    //   console.log('object got', getErr, getData);
    // });
  }, []);

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
  return { upload };
};

export default useS3;
