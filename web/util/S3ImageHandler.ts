import ReactS3Client from 'react-aws-s3-typescript';

const s3Config = {
  bucketName: 'linkbook-s3-1',
  region: 'ap-northeast-2',
  dirName: 'static',
  accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY,
  secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_KEY,
};

const s3 = new ReactS3Client(s3Config);

export const uploadImageToS3 = async (file: File) => {
  const fileName = file.name.replace(/ /g, '');

  try {
    console.log(s3, file);
    const res = await s3.uploadFile(file, fileName);
    console.log(res);
    return res;
  } catch (exception) {
    console.log(exception);
  }
};

export const deleteImageToS3 = async (file: File) => {
  const filepath = `${s3Config.dirName}/${file.name}`;

  try {
    await s3.deleteFile(filepath);
  } catch (exception) {
    console.log(exception);
  }
};

export const listFiles = async () => {
  try {
    const fileList = await s3.listFiles();
    console.log(fileList);
  } catch (exception) {
    console.log(exception);
  }
};
