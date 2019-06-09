import UserProvider from './user_provider'
import AlbumService from './album_provider'
import PhotoService from './photo_provider'


export const UserService = new UserProvider
export const AlbumsService = new AlbumService
export const PhotosService = new PhotoService
