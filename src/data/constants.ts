import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'

export const userDataMock = {
  id: 1,
  name: 'Fulano de Tal',
  email: 'fulaninho_rei_delas@inovarsistemas.com',
  profileImage: 'https://picsum.photos/300/300',
}

export const footerLinksOptions = [
  { title: 'About', link: '#' },
  { title: 'Contact', link: '#' },
  { title: 'Sign in', link: '#' },
]

export const socialMediasLinks = [
  {
    IconComponent: FacebookIcon,
    color: '#3e5a9b',
    label: 'Facebook',
    href: '#',
  },
  {
    IconComponent: TwitterIcon,
    color: '#00acee',
    label: 'Twitter',
    href: '#',
  },
]

export const postCategories = [
  { name: 'Case Study', color: '#f4973c' },
  { name: 'Literature', color: '#8b5cf6' },
  { name: 'Opinion', color: '#4271d6' },
  { name: 'Product Design', color: '#00e2ad' },
  { name: 'UX Map', color: '#ff0066' },
  { name: 'UX Theory', color: '#00bbff' },
]

export const searchMenuOptions = [
  {
    key: '',
    value: 'Ordenar por',
    disabled: true,
  },
  {
    key: 'likes',
    value: 'Popularidade',
    disabled: false,
  },
  {
    key: 'created_at',
    value: 'Data de publicação',
    disabled: false,
  },
  {
    key: 'comments',
    value: 'Quantidade de comentários',
    disabled: false,
  },
]
