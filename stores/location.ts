import { defineStore } from 'pinia';

export const useLocationStore = defineStore('location', () => {
  const country = ref('');
  const city = ref('');
  const fetched = ref(false);

  const fetchLocation = async () => {
    const API_URL = 'http://ip-api.com/json?fields=country,city';

    if (fetched.value) return;

    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(
          'Request failed. Returned status of ' + response.status
        );
      }
      const data = await response.json();
      country.value = data.country;
      city.value = data.city;
      fetched.value = true;
    } catch (error) {
      console.error('Request failed:', error);
    }
  };

  return { country, city, fetchLocation };
});
