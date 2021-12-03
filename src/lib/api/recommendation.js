import client from './client';

// 추천시스템
export const recommendation = ({ latitude, longitude, range, categories }) => {

  client.post('/api/recommendation', {latitude, longitude, range, categories});
}