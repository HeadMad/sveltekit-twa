import {createHmac} from 'crypto';

export default function (token, rawData) {
  if (rawData.startsWith('#'))
    rawData = rawData.slice(1);
    
  const entries = rawData.split('&').sort()
    .map(keyVal => keyVal.split('=').map(decodeURIComponent));
    
  const data = entries
    .filter(item => item[0] !== 'hash')
    .map(([key, val]) => key + '=' + val)
    .join('\n');

  const result = Object.fromEntries(entries);
  

  const secretKey  = createHmac('sha256', 'WebAppData').update(token).digest();
  const hexHash = createHmac('sha256', secretKey).update(data).digest('hex');


  if (hexHash !== result.hash)
    return {hexHash, hash: result.hash, data};

  return result;
}