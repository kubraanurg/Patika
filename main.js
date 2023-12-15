const axios = require('axios');

async function getUserData(userId) {
  try {
    // Kullanıcı bilgileri için istek
    const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const userData = userResponse.data;

    // Kullanıcının post'ları için istek
    const postsResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const userPosts = postsResponse.data;

    // Kullanıcı bilgileri ve post'ları birleştirilerek return ediliyor
    const result = {
      id: userData.id,
      name: userData.name,
      username: userData.username,
      email: userData.email,
      address: userData.address,
      phone: userData.phone,
      website: userData.website,
      company: userData.company,
      posts: userPosts
    };

    return result;
  } catch (error) {
    // Hata durumunda hatayı konsola yazdırabilir veya uygun bir şekilde yönetebilirsiniz.
    console.error('Hata oluştu:', error.message);
    throw error; // Hata durumunu yönetmek istiyorsanız throw etmeyebilirsiniz.
  }
}

// Fonksiyon default olarak dışa aktarılıyor
export default getUserData;
