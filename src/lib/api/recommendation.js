import client from './client';

// 추천시스템
export const recommendation = ({ latitude, longitude, range, categories }) => {
  const processedCategories = categories.filter(category => category.selected === true).map(category => category.text);
  return client.post('/api/recommendation', {
    latitude: latitude,
    longitude: longitude,
    range: range,
    categories: processedCategories
  })
}