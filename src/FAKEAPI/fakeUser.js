export const fakeDatabase = {
    sellers: [
      // Premium Sellers
      {
        id: 1,
        name: 'Adeola Ogunleye',
        location: 'Lagos, Nigeria',
        premiumUser: true,
        whatsapp: '080*********',
        produce: { name: 'Yam', price: '₦50,000 per tonne' },
        contact: 'adeola.ogunleye@example.com',
      },
      {
        id: 2,
        name: 'Abubakar Suleiman',
        location: 'Kano, Nigeria',
        premiumUser: true,
        whatsapp: '09*********',
        produce: { name: 'Groundnut', price: '₦90,000 per tonne' },
        contact: 'abubakar.suleiman@example.com',
      },
      {
        id: 3,
        name: 'Emeka Nwosu',
        location: 'Owerri, Nigeria',
        premiumUser: true,
        whatsapp: '0801234567',
        produce: { name: 'Cocoyam', price: '₦55,000 per tonne' },
        contact: 'emeka.nwosu@example.com',
      },
      {
        id: 4,
        name: 'Yakubu Garba',
        location: 'Minna, Nigeria',
        premiumUser: true,
        whatsapp: '091*********',
        produce: { name: 'Rice', price: '₦100,000 per tonne' },
        contact: 'yakubu.garba@example.com',
      },
  
      // Non-Premium Sellers
      {
        id: 5,
        name: 'Chinwe Okafor',
        location: 'Enugu, Nigeria',
        whatsapp: '08123456781',
        produce: { name: 'Palm Oil', price: '₦150,000 per 100 ltrs' },
        contact: 'chinwe.okafor@example.com',
      },
      {
        id: 6,
        name: 'Tunde Babalola',
        location: 'Ibadan, Nigeria',
        premiumUser: true,
        whatsapp: '09*********',
        produce: { name: 'Maize', price: '₦70,000 per tonne' },
        contact: 'tunde.babalola@example.com',
      },
      {
        id: 7,
        name: 'Fatima Abdullahi',
        location: 'Sokoto, Nigeria',
        whatsapp: '08145678134',
        produce: { name: 'Onions', price: '₦40,000 per tonne' },
        contact: 'fatima.abdullahi@example.com',
      },
      {
        id: 8,
        name: 'Hauwa Yusuf',
        location: 'Abuja, Nigeria',
        premiumUser: true,
        whatsapp: '09*********',
        produce: { name: 'Palm Oil', price: '₦145,000 per 100 ltrs' },
        contact: 'hauwa.yusuf@example.com',
      },
      {
        id: 9,
        name: 'Uche Eze',
        location: 'Onitsha, Nigeria',
        whatsapp: '08145898134',
        produce: { name: 'Palm Kernel', price: '₦80,000 per tonne' },
        contact: 'uche.eze@example.com',
      },
      {
        id: 10,
        name: 'Kemi Afolabi',
        location: 'Abeokuta, Nigeria',
        whatsapp: '081456783423',
        produce: { name: 'Cassava', price: '₦70,000 per tonne' },
        contact: 'kemi.afolabi@example.com',
      },
      {
        id: 11,
        name: 'Zainab Bello',
        location: 'Zaria, Nigeria',
        whatsapp: '08165478134',
        produce: { name: 'Cocoyam', price: '₦40,000 per tonne' },
        contact: 'zainab.bello@example.com',
      },
      {
        id: 12,
        name: 'Joseph Bassey',
        location: 'Calabar, Nigeria',
        whatsapp: '08145699134',
        produce: { name: 'Pineapple', price: '₦90,000 per tonne' },
        contact: 'joseph.bassey@example.com',
      },
      {
        id: 13,
        name: 'Ngozi Obi',
        location: 'Umuahia, Nigeria',
        premiumUser: true,
        whatsapp: '09*********',
        produce: { name: 'Yam', price: '₦60,000 per tonne' },
        contact: 'ngozi.obi@example.com',
      },
      {
        id: 14,
        name: 'Musa Aliyu',
        location: 'Kaduna, Nigeria',
        whatsapp: '09045678134',
        produce: { name: 'Rice', price: '₦95,000 per tonne' },
        contact: 'musa.aliyu@example.com',
      },
      {
        id: 15,
        name: 'Bola Oladipo',
        location: 'Ilorin, Nigeria',
        whatsapp: '07045678134',
        produce: { name: 'Tomatoes', price: '₦45,000 per bskt' },
        contact: 'bola.oladipo@example.com',
      },
  
      // Additional Sellers
      {
        id: 16,
        name: 'Nnamdi Eze',
        location: 'Asaba, Nigeria',
        whatsapp: '07067878134',
        produce: { name: 'Cassava', price: '₦75,000 per tonne' },
        contact: 'nnamdi.eze@example.com',
      },
      {
        id: 17,
        name: 'Oluwaseun Ojo',
        location: 'Benin City, Nigeria',
        premiumUser: true,
        whatsapp: '09*********',
        produce: { name: 'Tomatoes', price: '₦50,000 per bskt' },
        contact: 'oluwaseun.ojo@example.com',
      },
      {
        id: 18,
        name: 'Sola Adeyemi',
        location: 'Abeokuta, Nigeria',
        whatsapp: '08189778134',
        produce: { name: 'Pepper', price: '₦60,000 per bskt' },
        contact: 'sola.adeyemi@example.com',
      },
      {
        id: 19,
        name: 'Jibola Afolabi',
        location: 'Ilorin, Nigeria',
        premiumUser: true,
        whatsapp: '09*********',
        produce: { name: 'Rice', price: '₦110,000 per tonne' },
        contact: 'jibola.afolabi@example.com',
      },
      {
        id: 20,
        name: 'Amaka Okoro',
        location: 'Port Harcourt, Nigeria',
        whatsapp: '0701234567',
        produce: { name: 'Maize', price: '₦75,000 per tonne' },
        contact: 'amaka.okoro@example.com',
      },
      {
        id: 21,
        name: 'Gift Omojiate',
        location: 'Abeokuta, Nigeria',
        premiumUser: true,
        whatsapp: '09*********',
        produce: { name: 'Pepper', price: '₦60,000 per bskt' },
        contact: 'gift.omogit@example.com',
      },
      {
        id: 22,
        name: 'Assumpta Mordi',
        location: 'Benin City, Nigeria',
        premiumUser: true,
        whatsapp: '09*********',
        produce: { name: 'Tomatoes', price: '₦60,000 per bskt' },
        contact: 'oluwaseun.ojo@example.com',
      },
      {
        id: 23,
        name: 'Rightheart okoro',
        location: 'lagos, Nigeria',
        premiumUser: true,
        whatsapp: '09*********',
        produce: { name: 'Rice', price: '₦95,000 per tonne' },
        contact: 'musa.aliyu@example.com',
      },
      {
        id: 24,
        name: 'Daniel Oyeleye',
        location: 'Lagos, Nigeria',
        premiumUser: true,
        whatsapp: '080*********',
        produce: { name: 'Yam', price: '₦50,000 per tonne' },
        contact: 'adeola.ogunleye@example.com',
      },
      {
        id: 25,
        name: 'Oluchi Princess',
        location: 'Calabar, Nigeria',
        premiumUser: true,
        whatsapp: '080*********',
        produce: { name: 'Pineapple', price: '₦90,000 per tonne' },
        contact: 'joseph.bassey@example.com',
      },
    ],
  };
  