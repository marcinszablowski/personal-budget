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
      title: true,
      name: ' ',
      wrapper: {
        element: '',
        attributes: {},
      },
    },

    {
      name: 'Konta',
      url: '/theme/colors',
      icon: 'icon-credit-card',
      children: [
        {
          name: 'Konto główne',
          url: '/icons/coreui-icons',
          icon: '',
        },
        {
          name: 'Oszczędności',
          url: '/',
          icon: '',
        },
        {
          name: 'Wakacje',
          url: '/icons',
          icon: '',
        },
      ],
    },
    {
      name: 'Cele',
      url: '/theme/typography',
      icon: 'icon-target',
    },
    {
      title: true,
      name: ' ',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
  
    {
      name: 'Ustawienia',
      url: '/icons',
      icon: 'icon-wrench',
      children: [
        {
          name: 'Konta',
          url: '/icons/coreui-icons',
          icon: 'icon-credit-card',
        },
        {
          name: 'Kategorie',
          url: '/icons/flags',
          icon: 'icon-tag',
        },
        {
          name: 'Profil użytkownika',
          url: '/icons/font-awesome',
          icon: 'icon-user',
        },
      ],
    },    
  ],
};