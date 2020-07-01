import * as React from 'react';
import ReactPlayer from 'react-player'

export const RoomVideoFrame = () => {

    const config = {

    };

    const handlePlay = () => {
        console.log('VIDEO PLAYING');
    };

    const handlePause = () => {
        console.log('VIDEO PAUSED');
    };

    return (
        <div className="video-frame">
            <ReactPlayer config={config} controls={true}  url='https://youtu.be/UjtOGPJ0URM' width="100%" height="100%" muted={true} onPlay={handlePlay}
                         onPause={handlePause}/>
        </div>
    );
};