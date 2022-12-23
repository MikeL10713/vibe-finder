import TrackDisplay from "./TrackDisplay"

const UserSearched = ({ artistName, artistImageUrl, trackCount, trackName, trackAlbumCoverUrl, trackAlbum, trackArtists, trackAudioUrl, audioPlaybackId }) => {
  
  return (
    <div style={{marginLeft: 10}}>
      <h1>We've got {trackCount} {trackCount > 1 ? "tracks" : "track"} for you from {artistName} - hopefully they capture the vibes of:</h1>
      <div style={{display: "flex"}}>
        <img 
          src={artistImageUrl} 
          alt="" 
          width={250}
          height={250}
        />
        <div style={{marginLeft: 30}}>
        <TrackDisplay
          trackName={trackName} 
          trackAlbumCoverUrl={trackAlbumCoverUrl} 
          trackAlbum={trackAlbum} 
          trackArtists={trackArtists} 
          trackAudioUrl={trackAudioUrl}
          audioPlaybackId={audioPlaybackId}
        />
        </div>
    </div>
    </div>
  )
}

export default UserSearched