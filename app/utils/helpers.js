
const ip = '192.168.72.86'
export const DB_URL = `http://${ip}:3000`;
export const Get_Image_url = `${DB_URL}/products`

export const config = {
    headers: {
        'Content-Type': 'application/protobuf',
    },
    responseType: 'arraybuffer',
}



