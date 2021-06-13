export enum LocalLibrary {
  UPDATE_LOCAL_FOLDERS = 'UPDATE_LOCAL_FOLDERS',
  REMOVE_LOCAL_FOLDER = 'REMOVE_LOCAL_FOLDER',
  SCAN_LOCAL_FOLDERS = 'SCAN_LOCAL_FOLDERS',
  SCAN_LOCAL_FOLDERS_PROGRESS = 'SCAN_LOCAL_FOLDERS_PROGRESS',
  SCAN_LOCAL_FOLDERS_SUCCESS = 'SCAN_LOCAL_FOLDERS_SUCCESS',
  SCAN_LOCAL_FOLDERS_FAILURE = 'SCAN_LOCAL_FOLDERS_FAILURE',
  UPDATE_LOCAL_FILTER = 'UPDATE_LOCAL_FILTER',
  UPDATE_LOCAL_SORT = 'UPDATE_LOCAL_SORT',
  UPDATE_LIBRARY_LIST_TYPE = 'UPDATE_LIBRARY_LIST_TYPE',
  UPDATE_EXPANDED_FOLDERS = 'UPDATE_EXPANDED_FOLDERS'
}

export enum Search {
  UNIFIED_SEARCH_START = 'UNIFIED_SEARCH_START',
  UNIFIED_SEARCH_SUCCESS = 'UNIFIED_SEARCH_SUCCESS',
  UNIFIED_SEARCH_ERROR = 'UNIFIED_SEARCH_ERROR',
  ARTIST_SEARCH_SUCCESS = 'ARTIST_SEARCH_SUCCESS',
  ALBUM_SEARCH_SUCCESS = 'ALBUM_SEARCH_SUCCESS',
  ALBUM_INFO_SEARCH_START = 'ALBUM_INFO_SEARCH_START',
  ALBUM_INFO_SEARCH_SUCCESS = 'ALBUM_INFO_SEARCH_SUCCESS',
  ALBUM_INFO_SEARCH_ERROR = 'ALBUM_INFO_SEARCH_ERROR',
  ARTIST_INFO_SEARCH_START = 'ARTIST_INFO_SEARCH_START',
  ARTIST_INFO_SEARCH_SUCCESS = 'ARTIST_INFO_SEARCH_SUCCESS',
  ARTIST_INFO_SEARCH_ERROR = 'ARTIST_INFO_SEARCH_ERROR',
  ARTIST_RELEASES_SEARCH_START = 'ARTIST_RELEASES_SEARCH_START',
  ARTIST_RELEASES_SEARCH_SUCCESS = 'ARTIST_RELEASES_SEARCH_SUCCESS',
  ARTIST_RELEASES_SEARCH_ERROR = 'ARTIST_RELEASES_SEARCH_ERROR',
  LASTFM_TRACK_SEARCH_START = 'LASTFM_TRACK_SEARCH_START',
  LASTFM_TRACK_SEARCH_SUCCESS = 'LASTFM_TRACK_SEARCH_SUCCESS',
  YOUTUBE_PLAYLIST_SEARCH_START = 'YOUTUBE_PLAYLIST_SEARCH_START',
  YOUTUBE_PLAYLIST_SEARCH_SUCCESS = 'YOUTUBE_PLAYLIST_SEARCH_SUCCESS',
  YOUTUBE_LIVESTREAM_SEARCH_START = 'YOUTUBE_LIVESTREAM_SEARCH_START',
  YOUTUBE_LIVESTREAM_SEARCH_SUCCESS = 'YOUTUBE_LIVESTREAM_SEARCH_SUCCESS',
  YOUTUBE_LIVESTREAM_SEARCH_ERROR = 'YOUTUBE_LIVESTREAM_SEARCH_ERROR',
  SEARCH_DROPDOWN_DISPLAY_CHANGE = 'SEARCH_DROPDOWN_DISPLAY_CHANGE',
  UPDATE_SEARCH_HISTORY = 'UPDATE_SEARCH_HISTORY',
}

export enum Scrobbling {
  LASTFM_CONNECT = 'LASTFM_CONNECT',
  LASTFM_LOGIN = 'LASTFM_LOGIN',
  LASTFM_LOGOUT = 'LASTFM_LOGOUT',
  LASTFM_READ_SETTINGS = 'LASTFM_READ_SETTINGS',
  LASTFM_ENABLE_SCROBBLING = 'LASTFM_ENABLE_SCROBBLING',
  LASTFM_DISABLE_SCROBBLING = 'LASTFM_DISABLE_SCROBBLING',
  LASTFM_SCROBBLE = 'LASTFM_SCROBBLE',
  LASTFM_UPDATE_NOW_PLAYING = 'LASTFM_UPDATE_NOW_PLAYING'
}

export enum Settings {
  READ_SETTINGS = 'READ_SETTINGS',
  SET_BOOLEAN_OPTION = 'SET_BOOLEAN_OPTION',
  SET_STRING_OPTION = 'SET_STRING_OPTION',
  SET_NUMBER_OPTION = 'SET_NUMBER_OPTION'
}

export enum ImportFavs {
  FAV_IMPORT_INIT = 'FAV_IMPORT_INIT',
  LASTFM_FAV_IMPORT_START = 'LASTFM_FAV_IMPORT_START',
  LASTFM_FAV_IMPORT_SUCCESS_1 = 'LASTFM_FAV_IMPORT_SUCCESS_1',
  LASTFM_FAV_IMPORT_SUCCESS_FINAL = 'LASTFM_FAV_IMPORT_SUCCESS_FINAL',
  LASTFM_FAV_IMPORT_ERROR = 'LASTFM_FAV_IMPORT_ERROR'
}

export enum Mastodon {
  MASTODON_REGISTER_NUCLEAR_START = 'MASTODON_REGISTER_NUCLEAR_START',
  MASTODON_REGISTER_NUCLEAR_SUCCESS = 'MASTODON_REGISTER_NUCLEAR_SUCCESS',
  MASTODON_REGISTER_NUCLEAR_ERROR = 'MASTODON_REGISTER_NUCLEAR_ERROR',

  MASTODON_GET_ACCESS_TOKEN_START = 'MASTODON_GET_ACCESS_TOKEN_START',
  MASTODON_GET_ACCESS_TOKEN_SUCCESS = 'MASTODON_GET_ACCESS_TOKEN_SUCCESS',
  MASTODON_GET_ACCESS_TOKEN_ERROR = 'MASTODON_GET_ACCESS_TOKEN_ERROR',

  MASTODON_LOG_OUT = 'MASTODON_LOG_OUT'
}