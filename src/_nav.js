export default {
  items: [
    {
      name: 'Podsumowanie',
      url: '/dashboard',
      icon: 'icon-chart',
      // badge: {
      //   variant: 'info',
      //   text: 'NEW',
      // },
    },

    {
      name: 'Konta',
      url: '/accounts/main-account',
      icon: 'icon-credit-card',
      children: [
        {
          name: 'Konto główne',
          url: '/accounts/main-account',
          icon: 'icon-arrow-right',
        },
        {
          name: 'Oszczędności',
          url: '/',
          icon: 'icon-arrow-right',
        },
        {
          name: 'Wakacje',
          url: '/',
          icon: 'icon-arrow-right',
        },
      ],
    },
    {
      name: 'Cele',
      url: '/goals',
      icon: 'icon-target',
    },
  
    {
      name: 'Ustawienia',
      url: '/icons',
      icon: 'icon-wrench',
      children: [
        {
          name: 'Konta',
          url: '/',
          icon: 'icon-credit-card',
        },
        {
          name: 'Kategorie',
          url: '/',
          icon: 'icon-tag',
        },
        {
          name: 'Profil użytkownika',
          url: '/',
          icon: 'icon-user',
        },
      ],
    },    
  ],
};