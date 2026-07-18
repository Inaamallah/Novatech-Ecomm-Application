const Imagekit = require('@imagekit/nodejs')
const client = new Imagekit({
  privateKey: process.env['IMAGEKIT_SECRET_KEY'], 
});

async function uploadFile(file,filename){
    const response = await client.files.upload({
    file: file,
    fileName: filename,
    folder:'NovaTech/Products'
})
return response.url
}
module.exports = {uploadFile}