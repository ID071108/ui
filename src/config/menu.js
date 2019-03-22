const MENU = [
  {
    name: 'Home',
    path: '/home',
    children: [
      {
        name: 'child-1',
        path: 'child-1',
        children: {
          name: 'child-1-1',
          path: 'child-1-1'
        },
        children: {
          name: 'child-1-2',
          path: 'child-1-2'
        },
        children: {
          name: 'child-1-3',
          path: 'child-1-3'
        }
      }
    ]
  },
  {
    name: 'button',
    path: '/button'
  }
]

export default MENU
